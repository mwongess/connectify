import { Request } from "express";
import { IUserInfo } from "./auth.types";

export interface IPostRequest extends Request {
  user?: IUserInfo;
}
export interface IFriendRequest extends Request {
  user?: IUserInfo;
}
export interface ICommentRequest extends Request {
  user?: IUserInfo;
}
export interface ILikeRequest extends Request {
  user?: IUserInfo;
}
export interface IMessageRequest extends Request {
  user?: IUserInfo;
}
