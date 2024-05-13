import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	id: {
		type: String,
	},
	name: {
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
