import { Router } from "express";
import { VerifyToken } from "../middlewares/verifyToken";
import { getAllUsers, getOneUser, updateUser } from "../controllers/user.controllers";

export const userRouter = Router();

userRouter.get("/", VerifyToken, getAllUsers).get("/me" ,VerifyToken,getOneUser).put("/",VerifyToken,updateUser)
