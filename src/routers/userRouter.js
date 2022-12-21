import express from "express";
import { editUser, deleteAccount, logout, seeUser } 
from "../controllers/userController";


const userRouter = express.Router();

userRouter.get("/editUser", editUser);
userRouter.get("/delete", deleteAccount);
userRouter.get("/logout", logout);
userRouter.get(":id", seeUser);

export default userRouter;