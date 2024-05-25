import TypedCreateAsyncThunk from "@/utils/hooks/TypedCreateAsyncThunk";
import { getFeedListApi, uploadFeedApi } from "./api";
import { IGetFeedListParams, IUploadFeedBody } from "@/utils/types/view";
import { AxiosError } from "axios";

export const getFeedListThunk = TypedCreateAsyncThunk(
	"feed/getFeedListThunk",
	async (params: IGetFeedListParams, thunkAPI) => {
		try {
			const result = await getFeedListApi(params);
			return result;
		} catch (e: unknown) {
			if (e instanceof AxiosError) {
				return thunkAPI.rejectWithValue(
					e.response?.data.message ?? "unknown error"
				);
			}
			return thunkAPI.rejectWithValue("unknown error");
		}
	}
);

export const uploadFeedThunk = TypedCreateAsyncThunk(
	"feed/uploadFeedThunk",
	async ({ caption, files }: IUploadFeedBody, thunkAPI) => {
		try {
			const sendData = new FormData();
			sendData.append("caption", caption);

			if (files !== undefined) {
				for (let i = 0; i < files.length; i++) {
					sendData.append("images", files[i]);
				}
			}

			const result = await uploadFeedApi(sendData);
			return result;
		} catch (e: unknown) {
			if (e instanceof AxiosError) {
				return thunkAPI.rejectWithValue(
					e.response?.data.message ?? "unknown error"
				);
			}
			return thunkAPI.rejectWithValue("unknown error");
		}
	}
);
