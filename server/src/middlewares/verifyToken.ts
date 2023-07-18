import { Request, Response, NextFunction } from "express";
import { IUserInfo } from "../types/auth.types";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { JWT_SECRET } = process.env;

interface Extended extends Request {
  user?: IUserInfo;
}

export const VerifyToken = (
  req: Extended,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["token"] as string;
  try {
    if (!token) {
      return res.status(401).json({ message: "Forbidden" });
    }
    const decoded = jwt.verify(token, JWT_SECRET!) as IUserInfo;
    req.user = decoded;
  } catch (error: any) {
    return res.json({ error: error.message });
  }
  next();
};
