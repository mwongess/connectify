"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendsRouter = void 0;
const express_1 = require("express");
const friends_controllers_1 = require("../controllers/friends.controllers");
const verifyToken_1 = require("../middlewares/verifyToken");
exports.friendsRouter = (0, express_1.Router)();
exports.friendsRouter
    .get("/", verifyToken_1.VerifyToken, friends_controllers_1.getYourFriends)
    .post("/new/:userID", verifyToken_1.VerifyToken, friends_controllers_1.SaveFriend);
