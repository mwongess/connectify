import { Response } from "express";
import { Connection } from "../helpers/db.helpers";
import { postExists } from "../utils/postExists";
import { IPostRequest } from "../types/other.types";

const db = new Connection(); //connect to sql server db

// GET ALL POSTS FROM CONNECTED USERS
export const getConnectedUserPosts = async (req: IPostRequest, res: Response) => {
  try {
    const { userID } = req.user!;
    const { recordset } = await db.executeProcedure("GetConnectedUserPosts", { userID });
    if (!recordset[0]) {
      return res.json({ message: "No posts yet😎." });
    }
    res.json({ posts: recordset });
  } catch (error: any) {
    res.json(error.message);
  }
};

// SAVE A POST
export const savePost = async (req: IPostRequest, res: Response) => {
  try {
    const { content, imgUrl } = req.body;
    const { userID } = req.user!;
    await db.executeProcedure("SavePost", { userID, content, imgUrl });
    res.json({ message: "Post created successfully" });
  } catch (error: any) {
    res.json(error.message);
  }
};

// DELETE A POST
export const deletePost = async (req: IPostRequest, res: Response) => {
  try {
    const { postID } = req.params;
    const { userID } = req.user!; //logged in user from token
    if (!(await postExists(postID))) {
      res.json({ error: "Post may have been deleted😁" });
    }
    await db.executeProcedure("DeletePost", { postID, userID });
    res.json({ message: "Post deleted successfully✅." });
  } catch (error: any) {
    res.json(error.message);
  }
};

// UPDATE A POST
export const updatePost = async (req: IPostRequest, res: Response) => {
  try {
    const { postID } = req.params;
    const { userID } = req.user!; //logged in user from token
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
