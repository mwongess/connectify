import { Request, Response } from "express";
import { Connection } from "../helpers/db.helpers";

const db = new Connection();

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const { recordset } = await db.executeProcedure("GetUsers");
    res.json({ users: recordset });
  } catch (error: any) {
    res.json(error.message);
  }
};
export const updateUser = async (req: Request, res: Response) => {
  try {
    // const {userID} = req.user!
    // const {}
  } catch (error: any) {
    res.json(error.message);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    // const {userID} = req.user!
  } catch (error: any) {
    res.json(error.message);
  }
};
