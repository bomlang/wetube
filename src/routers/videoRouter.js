import express from "express";
import { watch, editVideo, uploadVideo, deleteVideo} 
from "../controllers/videoController";


const videoRouter = express.Router();


videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:(\\d+)", watch);
videoRouter.get("/:(\\d+)/editVideo", editVideo);
videoRouter.get("/:(\\d+)/delete", deleteVideo);


export default videoRouter;