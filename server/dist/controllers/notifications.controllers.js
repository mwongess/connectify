"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotifications = exports.saveNotification = void 0;
const db_helpers_1 = require("../helpers/db.helpers");
const db = new db_helpers_1.Connection();
const saveNotification = async (req, res) => {
    try {
        const { notificationType, targetID } = req.body;
        const { userID } = req.user;
        db.executeProcedure("SaveNotification", {
            userID,
            notificationType,
            targetID,
        });
        res.json({ message: "Notification saved" });
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.saveNotification = saveNotification;
const getNotifications = async (req, res) => {
    try {
        const { userID } = req.user;
        const { recordset } = await db.executeProcedure("GetNotifications", {
            userID,
        });
        if (!recordset[0]) {
            res.json({ message: "There are no notifications yet!" });
        }
        res.json({ notifications: recordset });
    }
    catch (error) {
        res.json(error.message);
    }
};
exports.getNotifications = getNotifications;
