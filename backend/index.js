import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/users.route.js";
import messageRoute from "./routes/message.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { app, server } from "./SocketIO/server.js";
import path from "path";
dotenv.config();
// middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: "https://chatverse-2.vercel.app",
  credentials: true,
}));
const port = process.env.PORT || 3002;
const URI = process.env.MONGOOSE_URI;
try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}
// routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);




server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
