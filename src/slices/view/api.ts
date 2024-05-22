import axiosInstance from "@/utils/axios/index";
import { IGetFeedListParams } from "@/utils/types/view";

export const getFeedListApi = async (params: IGetFeedListParams) => {
	const result = await axiosInstance({
		method: "get",
		url: "/post",
		headers: {
			Authorization: "Bearer " + localStorage.getItem("accessToken"),
		},
		params,
	});

	return result.data;
};
