"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRouter = void 0;
const express_1 = require("express");
const comments_controllers_1 = require("../controllers/comments.controllers");
const verifyToken_1 = require("../middlewares/verifyToken");
exports.commentsRouter = (0, express_1.Router)();
exports.commentsRouter
    .get("/:postID", verifyToken_1.VerifyToken, comments_controllers_1.getComments)
    .post("/:postID/new", verifyToken_1.VerifyToken, comments_controllers_1.SaveComment)
    .delete("/delete/:commentID", verifyToken_1.VerifyToken, comments_controllers_1.deleteComment);
