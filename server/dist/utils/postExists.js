"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postExists = void 0;
const db_helpers_1 = require("../helpers/db.helpers");
const db = new db_helpers_1.Connection();
const postExists = async (PostID) => {
    const { recordset } = await db.executeProcedure("GetPost", { PostID });
    console.log(recordset);
    if (recordset[0]) {
        return true;
    }
    return false;
};
exports.postExists = postExists;
