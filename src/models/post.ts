import { Schema } from "mongoose";

interface IPostSchema {
	author: string;
	content?: string;
	createDate: Date;
}

const PostSchema = new Schema<IPostSchema>({
	author: { type: String, required: true },
	content: { type: [String], default: [] },
	createDate: { type: Date, default: Date.now },
});

export default PostSchema;
