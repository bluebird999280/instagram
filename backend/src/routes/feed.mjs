import express from "express";
import multer from "multer";
import FeedSchema from "../models/feed.mjs";
import mongoose from "mongoose";
import checkMiddleware from "../middlewares/check.mjs";
import feedSchema from "../models/feed.mjs";

const router = express.Router();

/*
 * 전체 피드 가져오기 API (GET)
 * @param max max [Type] Number
 * data
 * status : 200(성공), 401(실패)
 * message : 401
 *  1). File or text is empty.
 *  2). Uploading to database is fail.
 */
router.get("/", async (req, res) => {
	const feedModel = mongoose.model("feed", feedSchema);

	try {
		const feeds = await feedModel
			.find()
			.sort({ good: -1 })
			.skip(req.query.count * req.query.max)
			.limit(req.query.max);

		if (feeds.length === 0) {
			return res.statusCode(401).send({ message: "There is no feeds" });
		}

		return res.send({ feeds });
	} catch (e) {
		return res.statusCode(500).send({ message: "db error" });
	}
});

/*
 * feed 업로드 api
 * @param text text [Type] String
 * @param imageList imageList [Type] FileList
 * data
 * status : 200(성공), 401(실패)
 * message : 401
 *  1). File or text is empty.
 *  2). Uploading to database is fail.
 */

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "files/images");
	},
	filename: function (req, file, cb) {
		const uniqueSuffix =
			(Date.now() + Math.round(Math.random() * 1e9)).toString() +
			"." +
			file.mimetype.split("/")[1];
		cb(null, uniqueSuffix);
	},
});

const upload = multer({ storage });

router.post(
	"/upload",
	checkMiddleware,
	upload.array("images", 12),
	async (req, res) => {
		const { text } = req.body;
		const imagePaths = req.files.map((file) => file.filename);

		if ([text, imagePaths].includes(undefined)) {
			res.status(400).send({ message: "File or text is empty." });
			return;
		}

		const feedModel = mongoose.model("Feed", FeedSchema);
		try {
			feedModel({ text, images: imagePaths }).save();
			return res.send(200);
		} catch (e) {
			return res
				.status(401)
				.send({ message: " Uploading to database is fail." });
		}
	}
);

export default router;
