"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentExists = void 0;
const db_helpers_1 = require("../helpers/db.helpers");
const db = new db_helpers_1.Connection();
const commentExists = async (CommentID) => {
    const { recordset } = await db.executeProcedure("GetComment", { CommentID });
    console.log(recordset);
    if (recordset[0]) {
        return true;
    }
    return false;
};
exports.commentExists = commentExists;
