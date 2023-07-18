import { Request, Response } from "express";
import { Connection } from "../helpers/db.helpers";
import { postExists } from "../utils/postExists";
import { IPostRequest } from "../types/other.types";

const db = new Connection();

// Get all posts
export const getAllPosts = async (req: IPostRequest, res: Response) => {
  try {
    const { userID } = req.user!;
    const { recordset } = await db.executeProcedure("GetProjects", { userID });
    if (!recordset[0]) {
      return res.json({ message: "No posts yet😎." });
    }
    res.json({ posts: recordset });
  } catch (error: any) {
    res.json(error.message);
  }
};

// Create a new post
export const createPost = async (req: IPostRequest, res: Response) => {
  try {
    const { content, imgUrl } = req.body;
    const { userID } = req.user!;
    await db.executeProcedure("CreatePost", { userID, content, imgUrl });
    res.json({ message: "Post created successfully" });
  } catch (error: any) {
    res.json(error.message);
  }
};

// Delete a post
export const deletePost = async (req: IPostRequest, res: Response) => {
  try {
    const { postID } = req.params;
    const { userID } = req.user!; //logged in user
    if (!(await postExists(postID))) {
      res.json({ error: "Post may have been deleted😁" });
    }
    await db.executeProcedure("DeletePost", { postID, userID });
    res.json({ message: "Post deleted successfully✅." });
  } catch (error: any) {
    res.json(error.message);
  }
};

// Update a post
export const updatePost = async (req: IPostRequest, res: Response) => {
  try {
    const { postID } = req.params;
    const { userID } = req.user!; //logged in user
    const { content, imgUrl } = req.body;
    if (!(await postExists(postID))) {
      res.json({ error: "Post may have been deleted😁" });
    }
    db.executeProcedure("UpdatePost", { postID, content, imgUrl, userID });
    res.json({ message: "Post has been updated successfully✅." });
  } catch (error: any) {
    res.json(error.message);
  }
};
