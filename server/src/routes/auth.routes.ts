import { Router } from "express";
import { login, signup } from "../controllers/auth.controllers";

export const authRouter = Router();

authRouter.post("/login", login).post("/signup", signup);
