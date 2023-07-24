"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getAllUsers = void 0;
const db_helpers_1 = require("../helpers/db.helpers");
const db = new db_helpers_1.Connection();
const getAllUsers = async (req, res) => {
    try {
        const { recordset } = await db.executeProcedure("GetUsers");
        res.json({ users: recordset });
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.getAllUsers = getAllUsers;
const updateUser = async (req, res) => {
    try {
        // const {userID} = req.user!
        // const {}
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        // const {userID} = req.user!
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.deleteUser = deleteUser;
