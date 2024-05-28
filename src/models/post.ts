import { Schema } from "mongoose";

interface IPostSchema {
	author: string;
	caption: string;
	contents?: string[];
	createDate: Date;
}

const PostSchema = new Schema<IPostSchema>({
	author: { type: String, required: true },
	caption: { type: String },
	contents: { type: [String], default: [] },
	createDate: { type: Date, default: Date.now },
});

export default PostSchema;
