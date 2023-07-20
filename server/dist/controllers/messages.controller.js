"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserMessages = exports.getUserMessages = void 0;
const db_helpers_1 = require("../helpers/db.helpers");
const db = new db_helpers_1.Connection();
const getUserMessages = async (req, res) => {
    try {
        const { userID } = req.user;
        const { recordset } = await db.executeProcedure("GetUserMessages", {
            userID,
        });
        if (!recordset[0]) {
            return res.json({ message: "No messages yet" });
        }
        res.json({ messages: recordset });
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.getUserMessages = getUserMessages;
const deleteUserMessages = async (req, res) => {
    try {
        const { messageID } = req.body;
        const { userID } = req.user;
        db.executeProcedure("DeleteMessage", { messageID, userID });
        res.json({ message: "Message has been deleted" });
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.deleteUserMessages = deleteUserMessages;
