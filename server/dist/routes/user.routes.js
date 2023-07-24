"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const verifyToken_1 = require("../middlewares/verifyToken");
const user_controllers_1 = require("../controllers/user.controllers");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("", verifyToken_1.VerifyToken, user_controllers_1.getAllUsers);
