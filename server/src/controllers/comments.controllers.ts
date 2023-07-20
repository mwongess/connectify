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
      return res.json({ error: "Post may have been deleted!!" });
    }
    const { recordset } = await db.executeProcedure("GetPostComments", {
      postID,
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
export const SaveComment = async (req: ICommentRequest, res: Response) => {
  try {
    const { commentText } = req.body;
    const { postID} = req.params
    const { userID } = req.user!;
    if (!(await postExists(postID))) {
      return res.json({ error: "Post may have been deleted😁" });
    }
    db.executeProcedure("SaveComment", { userID, postID, commentText });
    res.json({message: "Comment has been saved"})
  } catch (error:any) {
    res.json(error.message);
  }
};

// delete comment
export const deleteComment = async (req: ICommentRequest, res: Response) => {
  try {
    const { commentID } = req.params;
    // const { userID } = req.user!;
    if (!(await commentExists(commentID))) {
      return res.json({ error: "Comment is already deleted!!" });
    }

    db.executeProcedure("DeleteComment", { commentID });
    res.json({message: "Comment has been deleted"})
  } catch (error) {
    res.json(error);
  }
};

// Update a comment
