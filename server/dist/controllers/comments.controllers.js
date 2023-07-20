"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.SaveComment = exports.getComments = void 0;
const db_helpers_1 = require("../helpers/db.helpers");
const postExists_1 = require("../utils/postExists");
const commentExists_1 = require("../utils/commentExists");
const db = new db_helpers_1.Connection();
// get comments
const getComments = async (req, res) => {
    try {
        const { postID } = req.params;
        const { userID } = req.user;
        if (!(await (0, postExists_1.postExists)(postID))) {
            return res.json({ error: "Post may have been deleted!!" });
        }
        const { recordset } = await db.executeProcedure("GetPostComments", {
            postID,
        });
        if (!recordset[0]) {
            return res.json({ message: "No comments yet" });
        }
        res.json({ comments: recordset });
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.getComments = getComments;
// comment
const SaveComment = async (req, res) => {
    try {
        const { commentText } = req.body;
        const { postID } = req.params;
        const { userID } = req.user;
        if (!(await (0, postExists_1.postExists)(postID))) {
            return res.json({ error: "Post may have been deleted😁" });
        }
        db.executeProcedure("SaveComment", { userID, postID, commentText });
        res.json({ message: "Comment has been saved" });
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.SaveComment = SaveComment;
// delete comment
const deleteComment = async (req, res) => {
    try {
        const { commentID } = req.params;
        // const { userID } = req.user!;
        if (!(await (0, commentExists_1.commentExists)(commentID))) {
            return res.json({ error: "Comment is already deleted!!" });
        }
        db.executeProcedure("DeleteComment", { commentID });
        res.json({ message: "Comment has been deleted" });
    }
    catch (error) {
        res.json(error);
    }
};
exports.deleteComment = deleteComment;
// Update a comment
