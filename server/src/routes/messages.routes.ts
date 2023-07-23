import { Router } from "express";
import { getUserMessages } from "../controllers/messages.controller";

export const messageRouter = Router()

messageRouter.get("/:userID",getUserMessages)