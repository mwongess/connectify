import { Request, Response } from "express";
import { Connection } from "../helpers/db.helpers";
import { postExists } from "../utils/postExists";

const db = new Connection();

export const like = async (req: Request, res: Response) => {
  try {
    const { UserID, PostID } = req.params as { UserID: string; PostID: string };
    if (!(await postExists(PostID))) {
      res.json({ error: "Post may have been deleted!!" });
    }
    await db.executeProcedure("Like", { UserID, PostID });
    res.json({ message: "Like posted successfully" });
  } catch (error: any) {
    res.json(error.message);
  }
};

export const getLikesCount = async (req: Request, res: Response) => {
  try {
    const { PostID } = req.params as { UserID: string; PostID: string };
    if (!(await postExists(PostID))) {
      res.json({ error: "Post may have been deleted!!" });
    }
    const { recordset } = await db.executeProcedure("GetLikesCount", {
      PostID,
    });
    res.json({ count: recordset[0] });
  } catch (error: any) {
    res.json(error.message);
  }
};
