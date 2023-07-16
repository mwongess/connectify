import { Request, Response } from "express";
import { LoginSchema } from "../schemas/auth.schemas";

export const login = async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body;
    // Validate req body
    const { value, error } = LoginSchema.validate(req.body);
    if (error) {
      return res.json(error);
    }
    // const {recordset} = conne
  } catch (error) {
    res.json(error);
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;
    // Validate req body
  } catch (error) {
    res.json(error);
  }
};
