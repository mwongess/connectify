"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLikesCount = exports.SaveLike = void 0;
const db_helpers_1 = require("../helpers/db.helpers");
const postExists_1 = require("../utils/postExists");
const db = new db_helpers_1.Connection();
const SaveLike = async (req, res) => {
    try {
        const { postID } = req.params;
        const { userID } = req.user;
        if (!(await (0, postExists_1.postExists)(postID))) {
            return res.json({ error: "Post may have been deleted!!" });
        }
        await db.executeProcedure("SaveLike", { userID, postID });
        res.json({ message: "Like posted successfully" });
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.SaveLike = SaveLike;
const getLikesCount = async (req, res) => {
    try {
        const { postID } = req.params;
        if (!(await (0, postExists_1.postExists)(postID))) {
            return res.json({ error: "Post may have been deleted!!" });
        }
        const { recordset } = await db.executeProcedure("GetLikesCount", {
            postID,
        });
        res.json({ count: recordset[0] });
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.getLikesCount = getLikesCount;
