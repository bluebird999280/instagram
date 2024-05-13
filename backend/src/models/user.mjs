import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	phone: {
		type: String,
	},
	email: {
		type: String,
	},
	fullName: {
		type: String,
	},
	nickname: {
		type: String,
	},
	password: {
		type: String,
	},
});

export default userSchema;
