import { Router } from "express";
import {
  SaveComment,
  deleteComment,
  getComments,
} from "../controllers/comments.controllers";
import { VerifyToken } from "../middlewares/verifyToken";
export const commentsRouter = Router();

commentsRouter
  .get("/:postID", VerifyToken,getComments)
  .post("/:postID/new",VerifyToken, SaveComment)
  .delete("/delete/:commentID",VerifyToken, deleteComment);
