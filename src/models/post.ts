import { Schema } from "mongoose";

interface IPostSchema {
	author: string;
	content?: string;
	like: Schema.Types.ObjectId;
	comment?: [Schema.Types.ObjectId];
	createDate: Date;
}

const PostSchema = new Schema<IPostSchema>({
	author: { type: String, required: true },
	content: { type: [String], default: [] },
	like: { type: Schema.Types.ObjectId, required: true },
	comment: { type: [Schema.Types.ObjectId], default: [] },
	createDate: { type: Date, default: Date.now },
});

export default PostSchema;
