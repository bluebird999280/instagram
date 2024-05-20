import { sign, verify } from "jsonwebtoken";
import fs from "fs";
import path from "path";

type PayloadType = {
	[key: string]: string;
};

export function generateToken(type: string, payload: PayloadType = {}) {
	const expiresIn = type === "accessToken" ? "1h" : "1d";
	const privateKey = fs.readFileSync(
		path.join(process.cwd(), "/private.key")
	);

	return sign(
		payload,
		{
			key: privateKey,
			passphrase: process.env.PASS_PHRASE as string,
		},
		{
			algorithm: "RS256",
			expiresIn,
		}
	);
}

export function validateToken(token: string) {
	const publicKey = fs.readFileSync(path.join(process.cwd(), "/public.key"));

	return new Promise((resolve, reject) => {
		verify(
			token,
			publicKey,
			{
				algorithms: ["RS256"],
			},
			(error, decodedToken) => {
				if (error) return reject(error);
				resolve(decodedToken);
			}
		);
	});
}
