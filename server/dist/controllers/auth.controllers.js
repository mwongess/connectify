"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const auth_schemas_1 = require("../schemas/auth.schemas");
const db_helpers_1 = require("../helpers/db.helpers");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = new db_helpers_1.Connection();
const signup = async (req, res) => {
    try {
        // const user_id = uuid();
        let { fullName, userName, email, password } = req.body;
        const { error, value } = auth_schemas_1.SignupSchema.validate(req.body);
        if (error) {
            return res.status(500).json({ error: error.details[0].message });
        }
        const { recordset } = await db.executeProcedure("GetUser", { userName });
        if (recordset.length > 0) {
            return res.json({ error: "Account already exists,use another email!" });
        }
        password = bcrypt_1.default.hashSync(password, 10);
        await db.executeProcedure("SaveUser", {
            fullName,
            userName,
            email,
            password,
        });
        res.json({ message: "Account created successfully" });
    }
    catch (error) {
        res.json({ error: error.message });
    }
};
exports.signup = signup;
const login = async (req, res) => {
    try {
        let { userName, password } = req.body;
        const { error, value } = auth_schemas_1.LoginSchema.validate(req.body);
        if (error) {
            return res.status(500).json({ error: error.details[0].message });
        }
        const user = (await db.executeProcedure("GetUser", { userName })).recordset;
        if (!user[0]) {
            return res.json({ error: "Account doesnt exist!" });
        }
        const validpassword = bcrypt_1.default.compareSync(password, user[0].password);
        if (!validpassword) {
            return res.json({ error: "Try again with another password!" });
        }
        const payload = user.map((item) => {
            const { password, ...rest } = item;
            return rest;
        });
        const token = jsonwebtoken_1.default.sign(payload[0], process.env.JWT_SECRET, {
            expiresIn: "2h",
        });
        res.status(200).json({
            message: "Logged in successfully",
            token,
        });
    }
    catch (error) {
        res.json({ error: error.message });
    }
};
exports.login = login;
