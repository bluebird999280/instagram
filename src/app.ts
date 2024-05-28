import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user";
import postRouter from "./routes/post";

dotenv.config();
const { PORT, MONGO_URI } = process.env;

const app = express();
const port = PORT;

app.use(cors());
app.use(express.json());
app.use(express.static("files"));
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

async function main() {
	try {
		await mongoose.connect(MONGO_URI as string);
		app.listen(port, () => {
			console.log(
				`[Server] : Server is running at https://localhost:${port}`
			);
		});
	} catch (e) {
		console.error(e);
	}
}

main();
