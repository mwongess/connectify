import { Router } from "express";
import {
  deletePost,
  getConnectedUserPosts,
  savePost,
  updatePost,
} from "../controllers/posts.controllers";
import { VerifyToken } from "../middlewares/verifyToken";

export const postsRouter = Router();

postsRouter
.get("/", VerifyToken,getConnectedUserPosts)
  .post("/new", VerifyToken,savePost)
  .delete("/delete/:postID",VerifyToken, deletePost)
  .put("/update/:postID",VerifyToken, updatePost);
