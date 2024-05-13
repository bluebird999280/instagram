import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.mjs";
import feedRouter from "./routes/feed.mjs";
import cors from "cors";

dotenv.config();
const { PORT, MONGO_URI } = process.env;

const app = express();
const port = PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRouter);
app.use("/api/feed", feedRouter);

mongoose
	.connect(MONGO_URI)
	.then(() => console.log("Successfully connected to mongodb"))
	.catch((e) => console.error(e));

app.listen(port, () => {
	console.log(`[Server] : Server is running at https://localhost:${port}`);
});
