import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import LikeSchema from "../models/like";
import PostSchema from "../models/post";
import removeFiles from "../utils/removeFile";
import { Error } from "mongoose";
import type { Request, Response, NextFunction } from "express";
import { MulterError } from "multer";

const router = express.Router();

/*
 * feed 업로드 POST api
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
			if (["mp4", "avi"].includes(ext)) video += 1;

			return file.filename;
		});

		if (video > 1) {
			removeFiles(filePathArray);
			return res
				.status(400)
				.send({ message: "There are too many videos" });
		}

		try {
			const PostModel = mongoose.model("post", PostSchema);
			const LikeModel = mongoose.model("like", LikeSchema);

			const newPost = await new PostModel({
				author: res.locals.user.nickName,
				caption,
				content: fileNameArray,
			}).save();

			await new LikeModel({
				parent: newPost._id,
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
