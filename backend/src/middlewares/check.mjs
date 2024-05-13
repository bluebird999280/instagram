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
	const accessToken = req.header;

	console.log(req.headers["Authentication"]);

	// if (accessToken === undefined) {
	// 	res.status(401).send({
	// 		message: "AccessToken is required",
	// 	});
	// 	return;
	// }

	// try {
	// 	const decodedAccessToken = await validateToken(accessToken);

	// 	if (decodedAccessToken === null) {
	// 		if (refreshToken === undefined) {
	// 			return res.status(401).send({
	// 				message: "RefreshToken is required",
	// 			});
	// 		}

	// 		const decodedRefreshToken = await validateToken(refreshToken);
	// 		const newAccessToken = generateToken(decodedAccessToken);
	// 		if (decodedRefreshToken === null) {
	// 			return res.status(401).send({
	// 				message: "RefreshToken has expired",
	// 			});
	// 		}

	// 		return res.send({ accessToken: newAccessToken });
	// 	} else {
	// 		next();
	// 	}
	// } catch (error) {
	// 	return res.status(500).send({
	// 		error,
	// 	});
	// }
}
