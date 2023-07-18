import { Request } from "express";

export interface ILoginRequest extends Request {
  body: {
    userName: string;
    email: string;
    password: string;
  };
}

export interface ISignupRequest extends Request {
  body: {
    userName: string;
    email: string;
    password: string;
  };
}
export interface IUserInfo {
  userID: string
  userName: string;
  email: string;
  iat: number;
  exp: number;
}
