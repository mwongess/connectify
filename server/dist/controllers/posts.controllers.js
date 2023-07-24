"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.savePost = exports.getConnectedUserPosts = void 0;
const db_helpers_1 = require("../helpers/db.helpers");
const postExists_1 = require("../utils/postExists");
const db = new db_helpers_1.Connection(); //connect to sql server db
// GET ALL POSTS FROM CONNECTED USERS
const getConnectedUserPosts = async (req, res) => {
    try {
        const { userID } = req.user;
        const { recordset } = await db.executeProcedure("GetConnectedUserPosts", { userID });
        if (!recordset[0]) {
            return res.json({ message: "No posts yet😎." });
        }
        res.json({ posts: recordset });
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.getConnectedUserPosts = getConnectedUserPosts;
// SAVE A POST
const savePost = async (req, res) => {
    try {
        const { content, imgUrl } = req.body;
        const { userID } = req.user;
        await db.executeProcedure("SavePost", { userID, content, imgUrl });
        res.json({ message: "Post created successfully" });
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.savePost = savePost;
// DELETE A POST
const deletePost = async (req, res) => {
    try {
        const { postID } = req.params;
        const { userID } = req.user; //logged in user from token
        if (!(await (0, postExists_1.postExists)(postID))) {
            return res.json({ error: "Post may have been deleted😁" });
        }
        await db.executeProcedure("DeletePost", { postID });
        res.json({ message: "Post deleted successfully✅." });
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.deletePost = deletePost;
// UPDATE A POST
const updatePost = async (req, res) => {
    try {
        const { postID } = req.params;
        const { userID } = req.user; //logged in user from token
        const { content, imgUrl } = req.body;
        if (!(await (0, postExists_1.postExists)(postID))) {
            res.json({ error: "Post may have been deleted😁" });
        }
        db.executeProcedure("UpdatePost", { postID, content, imgUrl, userID });
        res.json({ message: "Post has been updated successfully✅." });
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.updatePost = updatePost;
