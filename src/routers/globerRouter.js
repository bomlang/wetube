import express from "express";
import { join } from "../controllers/userController";
import { trendingVideos } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", join);
globalRouter.get("/join", trendingVideos);

export default globalRouter;
