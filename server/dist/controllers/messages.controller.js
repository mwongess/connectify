"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserMessage = exports.getUserMessages = void 0;
const db_helpers_1 = require("../helpers/db.helpers");
const db = new db_helpers_1.Connection();
const getUserMessages = async (req, res) => {
    try {
        const { userID } = req.params;
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
const deleteUserMessage = async (req, res) => {
    try {
        const { messageID } = req.params;
        const { userID } = req.user;
        console.log(messageID, userID);
        db.executeProcedure("DeleteMessage", { messageID, userID });
        res.json({ message: "Message has been deleted" });
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.deleteUserMessage = deleteUserMessage;
