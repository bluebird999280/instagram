import express from "express";
import multer from "multer";
import FeedSchema from "../models/feed.mjs";
import mongoose from "mongoose";
import checkMiddleware from "../middlewares/check.mjs";

const router = express.Router();

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
