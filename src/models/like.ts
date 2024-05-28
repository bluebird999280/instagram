import { Schema } from "mongoose";

interface ILikeSchema {
	_id: Schema.Types.ObjectId;
	parent: {
		type: Schema.Types.ObjectId;
		required: true;
	};
	count: {
		type: Number;
		default: 0;
	};
	people: {
		type: [Schema.Types.ObjectId];
		default: [];
	};
}

const LikeSchema = new Schema<ILikeSchema>({
	parent: Schema.Types.ObjectId,
	count: Number,
	people: [Schema.Types.ObjectId],
});

export default LikeSchema;
