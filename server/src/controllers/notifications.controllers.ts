import { Request, Response } from "express";
import { INotificationRequest } from "../types/other.types";
import { Connection } from "../helpers/db.helpers";

const db = new Connection();

export const saveNotification = async (
    req: INotificationRequest,
    res: Response
) => {
    try {
        const { notificationType, targetID } = req.body;
        const { userID } = req.user!;
        db.executeProcedure("SaveNotification", {
            userID,
            notificationType,
            targetID,
        });
        res.json({ message: "Notification saved" });
    } catch (error: any) {
        res.json(error.message);
    }
};

export const getNotifications = async (
    req: INotificationRequest,
    res: Response
) => {
    try {
        const { userID } = req.user!;
        const { recordset } = await db.executeProcedure("GetNotifications", {
            userID,
        });
        if (!recordset[0]) {
            res.json({ message: "There are no notifications yet!" });
        }
        res.json({ notifications: recordset });
    } catch (error: any) {
        res.json(error.message);
    }
};
