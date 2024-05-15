import { validateToken } from "../utils/jwt.mjs";

/*
 * 토큰 확인 api
 * @param jwt jwt [Type] String
 * data : accessToken, refreshToken
 * status : 200(성공), 401(실패)
 * message : 401
 *  1). Id already exists
 *  2). Password is wrong.
 *  3). The id is empty
 *  4). The Password is empty
 */
export default async function (req, res, next) {
	const accessToken = req.headers["authentication"].split("Bearer ")[1];

	if (accessToken === undefined) {
		res.send({
			status: 401,
			message: "AccessToken is required",
		});
		return;
	}

	try {
		const decodedAccessToken = await validateToken(accessToken);
		console.log(decodedAccessToken);
		next();
	} catch (error) {
		console.log(error);
		if (error.name === "TokenExpiredError") {
			res.statusCode = 401;
			return res.send({
				message: "AccessToken is expired",
			});
		}

		return res.send({
			status: 401,
			message: "AccessToken is invalid",
		});
	}
}
