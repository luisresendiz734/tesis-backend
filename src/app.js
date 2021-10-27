import path from "path";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import thesisRouter from "./tesis/Tesis.router";


const app = express();

dotenv.config();

// Basic config
app.use(cors());
app.set("port", process.env.PORT || 4000);
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "static/index.html")));
app.use("/thesis", thesisRouter);



export default app;