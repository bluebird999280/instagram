import type { Request, Response, NextFunction } from "express";
import { validateToken } from "../utils/jwt";
import { JwtPayload } from "jsonwebtoken";

/*
 * 토큰 확인 api
 * @headers authorization String
 * status
 * - [400] AccessToken is empty (token이 존재하지 않거나 잘못되었을 경우)
 * - [401] AccessToken is expired. (token의 유효기간이 지났을 때)
 * - [500] Unknown Error (알 수 없는 오류가 발생했을 때)
 */

export default async function (
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (
		req.headers["authorization"] === undefined ||
		req.headers["authorization"].split("Bearer").length !== 2
	) {
		return res.status(400).send({
			message: "AccessToken is empty",
		});
	}

	const accessToken = req.headers["authorization"].split("Bearer ")[1];

	try {
		const decodedAccessToken = await validateToken(accessToken);

		if (decodedAccessToken.isExpired) {
			return res.status(401).send("AccessToken is expired");
		}

		if (decodedAccessToken.token !== undefined) {
			res.locals.user = decodedAccessToken.token;
			return next();
		}
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: "Unknown error" });
	}
}
