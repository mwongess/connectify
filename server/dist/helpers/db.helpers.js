"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const mssql_1 = __importDefault(require("mssql"));
const config_1 = require("../config/config");
class Connection {
    constructor() {
        this.pool = this.getConnection();
    }
    getConnection() {
        const pool = mssql_1.default.connect(config_1.dbConfig);
        return pool;
    }
    createRequest(request, params) {
        for (const key in params) {
            request.input(key, params[key]);
        }
        return request;
    }
    async executeProcedure(procedureName, params) {
        let pool = await this.pool;
        let request = pool.request();
        params ? (request = this.createRequest(request, params)) : request;
        return await request.execute(procedureName);
    }
    async executeQuery(query, params) {
        let request = (await this.pool).request();
        params ? (request = this.createRequest(request, params)) : request;
        return await request.query(query);
    }
}
exports.Connection = Connection;
