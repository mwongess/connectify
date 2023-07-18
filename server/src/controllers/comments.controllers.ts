import { Request, Response } from "express";
import { Connection } from "../helpers/db.helpers";
import { postExists } from "../utils/postExists";
import { commentExists } from "../utils/commentExists";
import { ICommentRequest } from "../types/other.types";

const db = new Connection();

// get comments
export const getComments = async (req: ICommentRequest, res: Response) => {
  try {
    const { postID } = req.params;
    const { userID } = req.user!;
    if (!(await postExists(postID))) {
      res.json({ error: "Post may have been deleted!!" });
    }
    const { recordset } = await db.executeProcedure("GetComments", {
      postID,
      userID,
    });
    if (!recordset[0]) {
      return res.json({ message: "No comments yet" });
    }
    res.json({ comments: recordset });
  } catch (error: any) {
    res.json(error.message);
  }
};
// comment
export const createComment = async (req: ICommentRequest, res: Response) => {
  try {
    const { postID, commentText } = req.body;
    const { userID } = req.user!;
    if (!(await postExists(postID))) {
      res.json({ error: "Post may have been deleted😁" });
    }
    db.executeProcedure("CreateComment", { userID, postID, commentText });
  } catch (error) {
    res.json(error);
  }
};

// delete comment
export const deleteComment = async (req: ICommentRequest, res: Response) => {
  try {
    const { commentID } = req.body;
    const { userID } = req.user!;
    if (!(await commentExists(commentID))) {
      res.json({ error: "Comment is already deleted!!" });
    }

    db.executeProcedure("DeleteComment", { commentID, userID });
  } catch (error) {
    res.json(error);
  }
};

// Update a comment
