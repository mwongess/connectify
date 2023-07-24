"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controllers_1 = require("../controllers/auth.controllers");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post("/login", auth_controllers_1.login).post("/signup", auth_controllers_1.signup);
