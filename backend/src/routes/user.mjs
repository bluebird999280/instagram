import express from "express";
import mongoose from "mongoose";
import UserSchema from "../models/user.mjs";
import CheckMiddleware from "../middlewares/check.mjs";
import { generateToken, validateToken } from "../utils/jwt.mjs";

const router = express.Router();

/*
 * 로그인 api
 * @param id id [Type] String
 * @param pw pw [Type] String
 * data : accessToken, refreshToken
 * status : 200(성공), 401(실패)
 * message : 401
 *  1). Input value is empty
 *  2). User does not exist
 *  3). Password is incorrect
 */
router.post("/signIn", async (req, res) => {
	const id = req.body.id;
	const password = req.body.password;

	if ([id, password].includes(undefined)) {
		res.status(400).send({ message: "Input value is empty" });
		return;
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

	if (userInfo == null) {
		res.status(401).send({
			message: "User does not exist",
		});
		return;
	}

	const dbPassword = userInfo.password;
	if (password !== dbPassword) {
		res.status(401).send({
			message: "Password is incorrect",
		});
		return;
	}

	const accessToken = generateToken({
		nickName: userInfo.nickName,
		fullName: userInfo.fullName,
	});

	const refreshToken = generateToken();

	res.send({
		accessToken,
		refreshToken,
	});
});

/*
 * 회원가입 api
 * @param name name [Type] String
 * @param id id [Type] String
 * @param pw pw [Type] String
 * data : accessToken, refreshToken
 * status : 200(성공), 401(실패)
 * message : 401
 *  1). Id already exists
 *  2). Password is wrong.
 *  3). The id is empty
 *  4). The Password is empty
 */
router.post("/signUp", async (req, res) => {
	const { phoneOrEmail, password, nickName, fullName } = req.body;
	if ([phoneOrEmail, password, nickName, fullName].includes(undefined)) {
		res.status(401).send({ message: "Input value is empty" });
		return;
	}

	const userModel = mongoose.model("User", UserSchema);

	let phoneOrEmailType = "";
	const emailRegExp = /[^@]+@.+/;
	const phoneRegExp = /01[0-9]{9}/;
	if (emailRegExp.test(phoneOrEmail)) {
		phoneOrEmailType = "email";
		if (await userModel.exists({ email: phoneOrEmail })) {
			return res.status(401).send({ message: "Email already exists." });
		}
	}

	if (phoneRegExp.test(phoneOrEmail)) {
		phoneOrEmailType = "phone";
		if (await userModel.exists({ phone: phoneOrEmail }))
			return res.status(401).send({ message: "Phone already exists." });
	}

	if (await userModel.exists({ nickName })) {
		return res.status(401).send({ message: "Nickname already exists." });
	}

	userModel({
		[phoneOrEmailType]: phoneOrEmail,
		fullName,
		nickName,
		password,
	}).save();

	const accessToken = generateToken({
		nickName: nickName,
		fullName: fullName,
	});

	const refreshToken = generateToken();

	res.send({
		accessToken,
		refreshToken,
	});
});

router.post("/check", async (req, res) => {
	const { accessToken, refreshToken } = req.body;

	if (accessToken === undefined) {
		res.status(401).send({
			message: "AccessToken is required",
		});
		return;
	}

	try {
		const decodedAccessToken = await validateToken(accessToken);

		if (decodedAccessToken === null) {
			if (refreshToken === undefined) {
				return res.status(401).send({
					message: "RefreshToken is required",
				});
			}

			const decodedRefreshToken = await validateToken(refreshToken);
			const newAccessToken = generateToken(decodedAccessToken);
			if (decodedRefreshToken === null) {
				return res.status(401).send({
					message: "RefreshToken has expired",
				});
			}

			return res.send({ accessToken: newAccessToken });
		} else {
			return res.send({ accessToken });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).send({
			error,
		});
	}
});

export default router;
