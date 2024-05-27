import express from "express";
import mongoose from "mongoose";
import { generateToken } from "../utils/jwt";
import UserSchema from "../models/user";

const router = express.Router();

/* 로그인 API
 * @Http POST
 * @body id string
 * @body password string
 * @status
 * - 200
 *  {
 *   accessToken string
 *   refreshToken string
 *  }
 * - 400 Input is invalid (입력값이 비었거나 유효하지 않은 경우)
 * - 401 User does not exist (사용자가 존재하지 않을 경우)
 * - 401 Password is not correct (비밀번호가 틀린 경우)
 * - 500 Unknown error ( 알 수 없는 서버 오류 혹은 데이터베이스 오류)
 */
interface ISignInBody {
	id?: string;
	password?: string;
}

router.post("/signIn", async (req, res) => {
	const { id, password }: ISignInBody = req.body;

	if (id === undefined || password === undefined) {
		return res.status(400).send({
			message: "Input is invalid",
		});
	}

	let idType = "";
	const emailRegExp = /[^@]+@.+/;
	const phoneRegExp = /01[0-9]{9}/;

	if (emailRegExp.test(id)) {
		idType = "email";
	} else if (phoneRegExp.test(id)) {
		idType = "phone";
	} else {
		idType = "nickName";
	}

	const userModel = mongoose.model("user", UserSchema);
	const userDoc = await userModel.findOne({
		[idType]: id,
	});

	if (userDoc === null) {
		return res.status(401).send({
			message: "User does not exist",
		});
	}

	if (userDoc.password !== password) {
		return res.status(401).send({
			message: "Password is not correct",
		});
	}

	return res.send({
		accessToken: generateToken("accessToken", {
			id: userDoc._id.toString(),
		}),
		refreshToken: generateToken("refreshToken"),
	});
});

export default router;
