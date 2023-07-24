import { Router } from "express";
import { VerifyToken } from "../middlewares/verifyToken";
import { getAllUsers } from "../controllers/user.controllers";

export const userRouter = Router();

userRouter.get("", VerifyToken, getAllUsers);
