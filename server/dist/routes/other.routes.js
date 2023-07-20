"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const express_1 = require("express");
const posts_controllers_1 = require("../controllers/posts.controllers");
exports.postsRouter = (0, express_1.Router)();
exports.postsRouter
    .post("/new", posts_controllers_1.savePost)
    .delete("/delete", posts_controllers_1.deletePost)
    .put("/update", posts_controllers_1.updatePost);
