import { Router } from "express";
import { SaveFriend, getYourFriends } from "../controllers/friends.controllers";
import { VerifyToken } from "../middlewares/verifyToken";

export const friendsRouter = Router();

friendsRouter
  .get("/", VerifyToken, getYourFriends)
  .post("/new/:userID", VerifyToken, SaveFriend);
