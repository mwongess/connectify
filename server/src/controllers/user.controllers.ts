import { Request, Response } from "express";
import { Connection } from "../helpers/db.helpers";

const db = new Connection();

export const getOneUser =async (req: Request, res:Response) => {
  try {
    const {userName} =req.user!
    const {recordset} = await db.executeProcedure("GetUser", {userName})
    res.json({user: recordset})
  } catch (error) {
    console.error(error)
  }
}
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
    const {email, fullName}= req.body
    const {userID} = req.user!
    db.executeQuery("UPDATE users SET email = @email, fullName = @fullName WHERE userID = @userID",{userID,email,fullName})
    // const {}
    res.json({message: "Profile updated successfully!!"})
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
