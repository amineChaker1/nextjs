import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import membersRouter from "./routes/members.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URL);
app.use("/", membersRouter);
app.listen(4040, () => {
  console.log("server started");
});
