import axiosInstance from "@/utils/axios/index";
import { ILoginData } from "@/utils/types/user";

export const loginApi = async (data: ILoginData) => {
	const result = await axiosInstance({
		method: "post",
		url: "/user/signIn",
		data,
	});

	return result.data;
};
