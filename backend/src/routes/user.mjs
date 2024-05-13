import express from "express";
import mongoose from "mongoose";
import UserSchema from "../models/user.mjs";
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

	const userModel = mongoose.model("User", UserSchema);
	const userInfo = await userModel.findOne({ id });

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
		id,
		name: userInfo.name,
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
	const { id, password, nickName, fullName } = req.body;
	if ([id, password, nickName, fullName].includes(undefined)) {
		res.status(401).send({ message: "Input value is empty" });
		return;
	}

	const userModel = mongoose.model("User", UserSchema);
	const isPresentId = await userModel.exists({ id });

	if (isPresentId) {
		res.status(401).send({ message: "ID exists" });
		return;
	}

	userModel({ id, password, nickName, name }).save();

	const accessToken = generateToken({
		id,
		name: name,
	});

	const refreshToken = generateToken();

	res.send({
		accessToken,
		refreshToken,
	});
});

export default router;
