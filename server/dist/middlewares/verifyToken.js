"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { JWT_SECRET } = process.env;
const VerifyToken = (req, res, next) => {
    const token = req.headers["token"];
    try {
        if (!token) {
            return res.status(401).json({ message: "Forbidden" });
        }
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = decoded;
    }
    catch (error) {
        return res.json({ error: error.message });
    }
    next();
};
exports.VerifyToken = VerifyToken;
