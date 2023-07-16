import mssql from "mssql";
import { dbConfig } from "../config/config";

export class Connection {
  private pool: Promise<mssql.ConnectionPool>;
  constructor() {
    this.pool = this.getConnection();
  }

  getConnection(): Promise<mssql.ConnectionPool> {
    const pool = mssql.connect(dbConfig);
    return pool;
  }

  createRequest(request: mssql.Request, params: { [x: string]: string }) {
    for (const key in params) {
      request.input(key, params[key]);
    }
    return request;
  }

  async executeProcedure(
    procedureName: string,
    params?: { [x: string]: string }
  ) {
    let pool = await this.pool;
    let request = pool.request();
    params ? (request = this.createRequest(request, params)) : request;
    return await request.execute(procedureName);
  }

  async executeQuery(query: string, params: { [x: string]: string }) {
    let request = (await this.pool).request();
    params ? (request = this.createRequest(request, params)) : request;
    return await request.query(query);
  }
}
