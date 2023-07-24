"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = exports.SignupSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.SignupSchema = joi_1.default.object({
    userName: joi_1.default.string().min(3).max(20).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(4).required(),
});
exports.LoginSchema = joi_1.default.object({
    userName: joi_1.default.string().min(3).max(20).required(),
    password: joi_1.default.string().min(4).required(),
});
