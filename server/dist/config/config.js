"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { USER, PASSWORD, SERVER, DATABASE } = process.env;
exports.dbConfig = {
    user: USER,
    password: PASSWORD,
    server: SERVER,
    database: DATABASE,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};
