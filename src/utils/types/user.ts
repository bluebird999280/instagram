export interface ILoginData {
	id: string;
	password: string;
}

export interface ILoginResponse {
	accessToken: string;
	refreshToken: string;
}
