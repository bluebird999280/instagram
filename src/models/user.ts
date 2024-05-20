import mongoose from "mongoose";

interface IUserSchema {
	phone?: string;
	email?: string;
	fullName: string;
	nickName: string;
	password: string;
}

const UserSchema = new mongoose.Schema<IUserSchema>({
	phone: {
		type: String,
	},
	email: {
		type: String,
	},
	fullName: {
		type: String,
		require: true,
	},
	nickName: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
});

export default UserSchema;
