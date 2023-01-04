import express from "express";
import {
  watch,
  getEdit,
  uploadVideo,
  deleteVideo,
  postEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit", getEdit).get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
