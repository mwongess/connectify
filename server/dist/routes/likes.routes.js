"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likesRouter = void 0;
const express_1 = require("express");
const likes_controllers_1 = require("../controllers/likes.controllers");
const verifyToken_1 = require("../middlewares/verifyToken");
exports.likesRouter = (0, express_1.Router)();
exports.likesRouter.get("/:postID", verifyToken_1.VerifyToken, likes_controllers_1.getLikesCount).post("/new/:postID", verifyToken_1.VerifyToken, likes_controllers_1.SaveLike);
