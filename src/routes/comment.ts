import express from "express";
import mongoose from "mongoose";
import CommentSchema from "../models/comment";

const router = express.Router();

/* 댓글 생성 api
 * @http POST
 * @body id String 댓글의 주체의 오브젝트 아이디
 * @body body String 댓글의 내용
 * @status
 * - [200] 성공
 * - [400] There are no bodies (id나 body가 비어있는 경우)
 * - [500] Unknown error (알 수 없는 오류가 발생 했을 경우)
 */

interface ICreateBody {
	id: string;
	body: string;
}

router.post("/", async (req, res) => {
	const { id, body }: ICreateBody = req.body;

	if (id === undefined || body === undefined) {
		return res.status(400).send({
			message: "There are no bodies",
		});
	}

	try {
		const commentModel = mongoose.model("comment", CommentSchema);

		await new commentModel({
			author: req.user.id,
			parent: id,
			body,
		}).save();
		return res.sendStatus(200);
	} catch (e) {
		console.log(e);
		return res.status(500).send({
			message: "Unknown error",
		});
	}
});

export default router;
