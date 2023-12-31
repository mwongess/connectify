"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouter = void 0;
const express_1 = require("express");
const messages_controller_1 = require("../controllers/messages.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
exports.messageRouter = (0, express_1.Router)();
exports.messageRouter
    .get("/:userID", verifyToken_1.VerifyToken, messages_controller_1.getUserMessages)
    .delete("/:messageID", verifyToken_1.VerifyToken, messages_controller_1.deleteUserMessage);
