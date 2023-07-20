import { Router } from "express";
import {
  SaveFriend,
  deleteFriendShip,
  getYourFriends,
} from "../controllers/friends.controllers";
import { VerifyToken } from "../middlewares/verifyToken";

export const friendsRouter = Router();

friendsRouter
  .get("/", VerifyToken, getYourFriends)
  .post("/new/:userID", VerifyToken, SaveFriend)
  .delete("/delete/:userID", VerifyToken, deleteFriendShip);
