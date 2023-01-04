///  const express = require("express");  ///
import "./db";
import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globerRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();

/// pug engine ///
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
/// morgan use ///
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
