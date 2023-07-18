import { Connection } from "../helpers/db.helpers";
import { Request, Response } from "express";

const db = new Connection()

export const friendSomeone = async (req: Request, res: Response) => {
  try {
    // const {userID: userID1} = req.user! //logged in user
    const { userID: userID2 } = req.params; //
    db.executeProcedure("Connect",{userID1,userID2})
    res.json({message: "You're connected now, start sending messages😎"})
  } catch (error: any) {
    res.json(error.message);
  }
};
