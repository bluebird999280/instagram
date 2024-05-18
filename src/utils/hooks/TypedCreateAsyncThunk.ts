import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkPayloadCreator, AsyncThunkOptions } from "@reduxjs/toolkit";
import { IAxiosError } from "../types/global";

export default function TypedCreateAsyncThunk<
	ResponseType,
	ParameterType,
	ErrorType = IAxiosError,
>(
	typePrefix: string,
	payloadCreator: AsyncThunkPayloadCreator<
		ResponseType,
		ParameterType,
		{
			rejectValue: ErrorType;
		}
	>,
	options?: AsyncThunkOptions<ParameterType>
) {
	return createAsyncThunk<
		ResponseType,
		ParameterType,
		{ rejectValue: ErrorType }
	>(typePrefix, payloadCreator, options);
}
