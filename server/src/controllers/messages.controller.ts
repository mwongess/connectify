import { Request, Response } from "express";
import { IMessageRequest } from "../types/other.types";
import { Connection } from "../helpers/db.helpers";

const db = new Connection();

export const getUserMessages = async (req: IMessageRequest, res: Response) => {
  try {
    const { userID } = req.params;
    const { recordset } = await db.executeProcedure("GetUserMessages", {
      userID,
    });
    if (!recordset[0]) {
      return res.json({ message: "No messages yet" });
    }
    res.json({ messages: recordset });
  } catch (error: any) {
    res.json(error.message);
  }
};
export const deleteUserMessages = async (
  req: IMessageRequest,
  res: Response
) => {
  try {
    const { messageID } = req.body;
    const { userID } = req.user!;
    db.executeProcedure("DeleteMessage", { messageID, userID });
    res.json({ message: "Message has been deleted" });
  } catch (error: any) {
    res.json(error.message);
  }
};
