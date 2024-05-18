import axiosInstance from "@/utils/axios/index";
import { ILoginData, ILoginResult } from "@/utils/types/user";

export const loginApi = async (data: ILoginData) => {
	const result = await axiosInstance<ILoginResult>({
		method: "post",
		url: "/user/signIn",
		data,
	});

	return result.data;
};
