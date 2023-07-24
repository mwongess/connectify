import { Router } from "express";
import {
  deleteUserMessage,
  getUserMessages,
} from "../controllers/messages.controller";
import { VerifyToken } from "../middlewares/verifyToken";

export const messageRouter = Router();

messageRouter
  .get("/:userID",VerifyToken, getUserMessages)
  .delete("/:messageID", VerifyToken, deleteUserMessage);
