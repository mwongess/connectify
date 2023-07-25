import { Request, Response } from "express";
import { Connection } from "../helpers/db.helpers";
import { postExists } from "../utils/postExists";
import { ILikeRequest } from "../types/other.types";

const db = new Connection();

export const SaveLike = async (req: ILikeRequest, res: Response) => {
  try {
    const { postID } = req.params as { postID: string };
    const { userID } = req.user!;
    if (!(await postExists(postID))) {
      return res.json({ error: "Post may have been deleted!!" });
    }
    await db.executeProcedure("SaveLike", { userID, postID });
    res.json({ message: "Like posted successfully" });
  } catch (error: any) {
    res.json(error.message);
  }
};

export const getLikesCount = async (req:  ILikeRequest, res: Response) => {
  try {
    const { postID } = req.params as { postID: string };
    const { userID } = req.user!;
    if (!(await postExists(postID))) {
     return res.json({ error: "Post may have been deleted!!" });
    }
    const { recordset } = await db.executeProcedure("isLikedAndCount", {
      postID,userID
    });
    res.json({ likes: recordset });
  } catch (error: any) {
    res.json(error.message);
  }
};
