import path from "path";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import thesisRouter from "./tesis/Tesis.router";
import userRouter from "./user/User.router";

const app = express();

dotenv.config();

// Basic config
app.use(cors());
app.set("port", process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);
app.use("/thesis", thesisRouter);
app.use("/user", userRouter);

export default app;
