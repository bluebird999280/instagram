import TypedCreateAsyncThunk from "@/utils/hooks/TypedCreateAsyncThunk";
import { getFeedListApi } from "./api";
import { IGetFeedListParams } from "@/utils/types/view";
import { AxiosError } from "axios";

export const getFeedListThunk = TypedCreateAsyncThunk(
	"view/getFeedListThunk",
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
