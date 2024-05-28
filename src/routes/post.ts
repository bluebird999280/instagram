import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import UserSchema from "../models/user";
import PostSchema from "../models/post";
import removeFiles from "../utils/removeFile";
import { Error } from "mongoose";
import type { Request, Response, NextFunction } from "express";
import { MulterError } from "multer";

const router = express.Router();

/*
 * 다중 포스트 조회 api
 * @http GET
 * @query max number
 * @query count number
 * @status
 * - [200] {length} 가져온 포스트 갯수
 * - [400] There are not queries ( max나 count가 비어있을 경우 )
 * - [400] There are no posts. ( 포스트를 더 이상 반환할 수 없을 때 )
 * - [500] Unknown error (알 수 없는 오류가 발생했을 때)
 *
 */

interface IPostQuery {
	max?: number;
	count?: number;
}

type ReturnType = {
	id: string;
	author: string;
	caption: string;
	contents?: string[];
	pressLike: boolean;
	likeCount: number;
}[];

router.get("/", async (req, res) => {
	const { count, max }: IPostQuery = req.query;

	if (count === undefined || max === undefined)
		return res.status(400).send({ message: "There are not queries" });

	try {
		const PostModel = mongoose.model("post", PostSchema);

		const posts = await PostModel.find()
			.sort({ like: -1, createDate: 1 })
			.skip(count * max)
			.limit(max);

		if (posts === undefined || posts.length === 0) {
			return res.status(400).send({ message: "There are no posts" });
		}

		let result: ReturnType = [];
		for (let i = 0; i < posts.length; i++) {
			result.push({
				id: posts[i]._id.toString(),
				author: posts[i].author,
				caption: posts[i].caption,
				contents: posts[i].contents,
				pressLike:
					posts[i].likePeople.findIndex(
						(person) => person === req.user._id
					) > -1,
				likeCount: posts[i].likeCount,
			});
		}

		return res.send({ posts: result });
	} catch (e) {
		return res.status(500).send({ message: "Unknown error" });
	}
});

/*
 * 포스트 업로드 POST api
 * @body caption String
 * @files imageList Express.Request.files
 * status
 * - [200]
 * - [400] There are no caption or files (캡션이나 파일이 존재하지 않습니다.)
 * - [400] Caption is longer than 2200 (caption의 길이 제한을 넘었을 경우)
 * - [400] There are too many files (파일의 갯수는 12개로 제한합니다.)
 * - [400] There are too many videos (비디오는 하나만 업로드 가능합니다)
 * - [500] Unknown Error ( 알 수 없는 오류가 발생했을 경우)
 */

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		const ext = file.mimetype.split("/")[1];

		if (["mp4", "avi"].includes(ext)) {
			return cb(null, "files/videos");
		}

		if (["png", "jpg", "jpeg"].includes(ext)) {
			return cb(null, "files/images");
		}
	},
	filename: function (req, file, cb) {
		const ext = file.mimetype.split("/")[1];

		const uniqueSuffix =
			(Date.now() + Math.round(Math.random() * 1e9)).toString() +
			"." +
			ext;
		cb(null, uniqueSuffix);
	},
});

const upload = multer({ storage });

function uploadErrorMiddleware(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (err instanceof MulterError) {
		const multerError = err as MulterError;
		if (multerError.code === "LIMIT_UNEXPECTED_FILE") {
			return res
				.status(400)
				.send({ message: "There are too many files" });
		}
	}

	console.error(err);
	return res.status(500).send({ message: "Unknown error" });
}

interface IPostUploadBody {
	caption: string;
}

router.post(
	"/",
	upload.array("files", 12),
	async (req: Request, res: Response) => {
		const { caption }: IPostUploadBody = req.body;
		const files = req.files as Express.Multer.File[];
		const filePathArray = files.map((file) => file.path);

		if (
			caption === undefined ||
			files === undefined ||
			files.length === 0
		) {
			removeFiles(filePathArray);
			return res
				.status(400)
				.send({ message: "There are no caption or files" });
		}

		if (caption.length > 2200) {
			removeFiles(filePathArray);
			return res
				.status(400)
				.send({ message: "Caption is longer than 2200" });
		}

		// errorHandler에서 처리
		// if (files.length > 12) {
		// 	removeFiles(filePathArray);
		// 	return res.status(400).send({ message: "There are too many files" });
		// }

		let video = 0;
		const fileNameArray = files.map((file) => {
			const ext = file.mimetype.split("/")[1];
			let type = "images";
			if (["mp4", "avi"].includes(ext)) {
				type = "videos";
				video += 1;
			}

			return `http://localhost:4000/files/${type}/${file.filename}`;
		});

		if (video > 1) {
			removeFiles(filePathArray);
			return res
				.status(400)
				.send({ message: "There are too many videos" });
		}

		try {
			const PostModel = mongoose.model("post", PostSchema);

			await new PostModel({
				author: req.user.nickName,
				caption,
				contents: fileNameArray,
			}).save();

			return res.sendStatus(200);
		} catch (error) {
			return res.status(500).send({
				message: "Unknown error",
			});
		}
	},
	uploadErrorMiddleware
);

export default router;
