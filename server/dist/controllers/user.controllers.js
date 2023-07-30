"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getAllUsers = exports.getOneUser = void 0;
const db_helpers_1 = require("../helpers/db.helpers");
const db = new db_helpers_1.Connection();
const getOneUser = async (req, res) => {
    try {
        const { userName } = req.user;
        const { recordset } = await db.executeProcedure("GetUser", { userName });
        res.json({ user: recordset });
    }
    catch (error) {
        console.error(error);
    }
};
exports.getOneUser = getOneUser;
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
        const { email, fullName } = req.body;
        const { userID } = req.user;
        db.executeQuery("UPDATE users SET email = @email, fullName = @fullName WHERE userID = @userID", { userID, email, fullName });
        // const {}
        res.json({ message: "Profile updated successfully!!" });
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
