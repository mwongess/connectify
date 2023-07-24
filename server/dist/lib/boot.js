"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT;
const startServer = (app) => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is up and listening on port ${PORT}`);
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.startServer = startServer;
