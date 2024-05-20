import express from "express";
import mongoose from "mongoose";
import UserSchema from "../models/user";
import { generateToken } from "../utils/jwt";

const router = express.Router();

/*
 * 로그인 api
 * @param id String
 * @param password String
 * @status
 * - 200 AccessToken, RefreshToken을 반환한다.
 * => accessToken[JWT] { nickName, fullName }
 * => refreshToken[JWT]
 * - 400 Input is invalid (입력값이 유효하지 않을 경우)
 * - 401 User does not exist (사용자가 존재하지 않을 경우)
 * - 401 Password is not correct (비밀번호가 잘못된 경우)
 * - 500 Unknown error (알 수 없는 오류가 발생했을 경우)
 */
router.post("/signIn", async (req, res) => {
	const { id, password } = req.body;
	if ([id, password].includes(undefined)) {
		return res.status(400).send({ message: "Input value is empty" });
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

	const userModel = mongoose.model("User", UserSchema);
	const userInfo = await userModel.findOne({ [idType]: id });
	if (userInfo === null && userInfo === undefined) {
		return res.status(401).send({
			message: "User does not exist",
		});
	}

	if (userInfo !== null && userInfo !== undefined) {
		const dbPassword = userInfo.password;
		if (password !== dbPassword) {
			return res.status(401).send({
				message: "Password is not correct",
			});
		}

		const accessToken = generateToken("accessToken", {
			nickName: userInfo.nickName,
			fullName: userInfo.fullName,
		});

		const refreshToken = generateToken("refreshToken");

		return res.send({
			accessToken,
			refreshToken,
		});
	}
});
