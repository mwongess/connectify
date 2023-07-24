"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveMessage = void 0;
const db_helpers_1 = require("../helpers/db.helpers");
const db = new db_helpers_1.Connection();
const saveMessage = async (senderID, recipientID, messageContent) => {
    try {
        db.executeProcedure("SaveMessage", {
            senderID,
            recipientID,
            messageContent,
        });
    }
    catch (error) {
        throw new Error("Failed to save message to the database." + error);
    }
};
exports.saveMessage = saveMessage;
