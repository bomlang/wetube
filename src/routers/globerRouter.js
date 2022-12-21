import express from "express";
import { join, login } from "../controllers/userController";
import { trendingVideos, search } from "../controllers/videoController";



const globalRouter = express.Router();

/// user ///
globalRouter.get("/join", join);
globalRouter.get("/login", login);

/// video ///
globalRouter.get("/", trendingVideos);
globalRouter.get("/search", search);



export default globalRouter;
