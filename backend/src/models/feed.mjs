import mongoose from "mongoose";

const feedSchema = new mongoose.Schema({
	text: {
		type: String,
	},
	images: {
		type: [String],
	},
	good: {
		type: Number,
		default: 0,
	},
	comment: {
		author: mongoose.Types.ObjectId,
		body: String,
		comment: {
			type: [
				{
					author: mongoose.Types.ObjectId,
					body: String,
					date: {
						type: Date,
						default: Date.now,
					},
				},
			],
			default: null,
		},
	},
	createDate: {
		type: Date,
		default: Date.now,
	},
});

export default feedSchema;
