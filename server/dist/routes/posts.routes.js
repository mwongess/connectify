"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const express_1 = require("express");
const posts_controllers_1 = require("../controllers/posts.controllers");
const verifyToken_1 = require("../middlewares/verifyToken");
exports.postsRouter = (0, express_1.Router)();
exports.postsRouter
    .get("/", verifyToken_1.VerifyToken, posts_controllers_1.getConnectedUserPosts)
    .post("/new", verifyToken_1.VerifyToken, posts_controllers_1.savePost)
    .delete("/delete/:postID", verifyToken_1.VerifyToken, posts_controllers_1.deletePost)
    .put("/update/:postID", verifyToken_1.VerifyToken, posts_controllers_1.updatePost);
