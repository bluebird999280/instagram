import TypedCreateAsyncThunk from "@/utils/hooks/TypedCreateAsyncThunk";
import { loginApi } from "./api";
import { ILoginData } from "@/utils/types/user";
import { AxiosError } from "axios";

export const loginThunk = TypedCreateAsyncThunk(
	"user/loginApi",
	async (data: ILoginData, thunkAPI) => {
		try {
			const result = await loginApi(data);
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
