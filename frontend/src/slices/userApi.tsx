import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "utils/axiosBaseQuery";

type resultType = {
	accessToken: string;
	refreshToken: string;
};

type signInType = {
	[key: string]: string;
};

type signUpType = {
	[key: string]: string;
};

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: axiosBaseQuery({
		baseUrl: "http://localhost:4000/api/user",
	}),
	endpoints: (builder) => ({
		signIn: builder.query<resultType, signInType>({
			query: (data) => ({
				url: "/signIn",
				method: "POST",
				data,
			}),
		}),
		signUp: builder.query<resultType, signUpType>({
			query: (data) => ({
				url: "/signUp",
				method: "POST",
				data,
			}),
		}),
		check: builder.query<resultType, undefined>({
			query: () => ({
				url: "/check",
				method: "POST",
				data: {
					accessToken: localStorage.getItem("accessToken"),
					refreshToken: localStorage.getItem("refreshToken"),
				},
			}),
		}),
	}),
});

export const { useSignInQuery, useSignUpQuery, useCheckQuery } = authApi;
