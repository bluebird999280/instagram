import axiosInstance from "@/utils/axios/index";
import { ILoginData, IRegisterData } from "@/utils/types/user";

export const loginApi = async (data: ILoginData) => {
	const result = await axiosInstance({
		method: "post",
		url: "/user/signIn",
		data,
	});

	return result.data;
};

export const registerApi = async (data: IRegisterData) => {
	const result = await axiosInstance({
		method: "post",
		url: "/user/signUp",
		data,
	});

	return result.data;
};
