import { Router } from "express";
import { SaveLike, getLikesCount } from "../controllers/likes.controllers";
import { VerifyToken } from "../middlewares/verifyToken";

export const likesRouter = Router();

likesRouter.get("/:postID",VerifyToken, getLikesCount).post("/new/:postID",VerifyToken, SaveLike);
