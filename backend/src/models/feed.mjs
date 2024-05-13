import mongoose from "mongoose";

const feedSchema = new mongoose.Schema({
	text: {
		type: String,
	},
	images: {
		type: [String],
	},
});

export default feedSchema;
