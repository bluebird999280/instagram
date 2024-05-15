import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "utils/axiosBaseQuery";

export type getFeedListResultType = {
	feeds: {
		_id: string;
		author: string;
		text: string;
		images: string[];
		good: number;
		comment: {
			author: string;
			comment: {
				author: string;
				body: string;
				date: string;
				comment: {
					author: string;
					body: string;
					date: string;
				} | null;
			} | null;
		}[];
		createDate: string;
	}[];
};

type getFeedListType = {
	max: number;
	count: number;
};

type uploadType = {
	content: string;
	imageFileList?: FileList;
};

export const feedApi = createApi({
	reducerPath: "feedApi",

	baseQuery: axiosBaseQuery({
		baseUrl: "http://localhost:4000/api/feed",
	}),
	endpoints: (builder) => ({
		getFeedList: builder.query<getFeedListResultType, getFeedListType>({
			query: ({ max, count }) => ({
				url: `?max=${max}&count=${count}`,
				method: "GET",
				headers: {
					authentication:
						"Bearer " + localStorage.getItem("accessToken"),
				},
			}),
		}),
		upload: builder.query<undefined, uploadType>({
			query: (data) => {
				const sendData = new FormData();
				sendData.append("text", data.content);

				if (data.imageFileList !== undefined) {
					for (let i = 0; i < data.imageFileList.length; i++) {
						sendData.append("images", data.imageFileList[i]);
					}
				}

				return {
					url: "/upload",
					method: "POST",
					headers: {
						authentication:
							"Bearer " + localStorage.getItem("accessToken"),
					},
					data: sendData,
				};
			},
		}),
	}),
});

export const { useUploadQuery, useGetFeedListQuery } = feedApi;
