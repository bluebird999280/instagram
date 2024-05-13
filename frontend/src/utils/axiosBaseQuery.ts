import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";

type dataType = {
	message: string;
};

interface IError {
	status: number;
	message: string;
}

const axiosBaseQuery =
	(
		{ baseUrl }: { baseUrl: string } = { baseUrl: "" }
	): BaseQueryFn<
		{
			url: string;
			method?: AxiosRequestConfig["method"];
			data?: AxiosRequestConfig["data"];
			params?: AxiosRequestConfig["params"];
			headers?: AxiosRequestConfig["headers"];
		},
		unknown,
		IError
	> =>
	async ({ url, method, data, params, headers }) => {
		try {
			const result = await axios({
				url: baseUrl + url,
				method,
				data,
				params,
				headers,
			});
			return { data: result.data, error: undefined };
		} catch (axiosError) {
			const err = axiosError as AxiosError;
			if (err.response !== undefined) {
				return {
					data: undefined,
					error: {
						status: err.response.status,
						message: (err.response.data as dataType).message,
					},
				};
			}
			return {
				data: undefined,
				error: {
					status: 500,
					message: "unknown error",
				},
			};
		}
	};

export default axiosBaseQuery;
