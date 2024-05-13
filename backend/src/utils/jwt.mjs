import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

const { sign, verify } = jwt;

export function generateToken(payload = null) {
	const expiresIn = payload === null ? "1m" : "1s";
	const privateKey = fs.readFileSync(
		path.join(process.cwd(), "/private.key")
	);

	const signInOptions = {
		algorithm: "RS256",
		expiresIn,
	};

	return sign(
		payload ?? {},
		{
			key: privateKey,
			passphrase: process.env.PASS_PHRASE,
		},
		signInOptions
	);
}

export function validateToken(token) {
	const publicKey = fs.readFileSync(path.join(process.cwd(), "/public.key"));

	const verifyOptions = {
		algorithms: ["RS256"],
	};

	return new Promise((resolve, reject) => {
		verify(token, publicKey, verifyOptions, (error, decodedToken) => {
			if (error.name === "TokenExpiredError") return resolve(null);
			if (error) return reject(error);
			resolve(decodedToken);
		});
	});
}
