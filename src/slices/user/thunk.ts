import TypedCreateAsyncThunk from "@/utils/hooks/TypedCreateAsyncThunk";
import { loginApi } from "./api";
import { ILoginData } from "@/utils/types/user";
import { AxiosError } from "axios";

export const loginThunk = TypedCreateAsyncThunk(
	"user/loginApi",
	async (data: ILoginData, thunkAPI) => {
		try {
			return await loginApi(data);
		} catch (e: unknown) {
			if (e instanceof AxiosError) {
				return thunkAPI.rejectWithValue({
					status: e.status ?? 500,
					message: e.response?.data.message ?? "unknown error",
				});
			}
			return thunkAPI.rejectWithValue({
				status: 500,
				message: "unknown error",
			});
		}
	}
);
