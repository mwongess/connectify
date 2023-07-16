import { Request, Response } from "express";
import { LoginSchema, SignupSchema } from "../schemas/auth.schemas";
import { Connection } from "../helpers/db.helpers";
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

const db = new Connection();

export const signup = async (req: ISignupRequest, res: Response) => {
  try {
    const user_id = uuid();
    let { userName, email, password } = req.body;
    const { error, value } = SignupSchema.validate(req.body);
    if (error) {
      return res.status(500).json({ error: error.details[0].message });
    }
    const { recordset } = await db.executeProcedure("GetUser", { email });
    if (recordset.length > 0) {
      return res.json({ error: "Account already exists,use another email!" });
    }
    password = bcrypt.hashSync(password, 10);
    await db.executeProcedure("NewUser", {
      user_id,
      userName,
      email,
      password,
    });
    res.json({ message: "Account created successfully" });
  } catch (error: any) {
    res.json({ error: error.message });
  }
};

export const login = async (req: ILoginRequest, res: Response) => {
  try {
    let { email, password } = req.body;
    const { error, value } = LoginSchema.validate(req.body);
    if (error) {
      return res.status(500).json({ error: error.details[0].message });
    }
    const user: IUser[] = (await db.executeProcedure("GetUser", { email }))
      .recordset;
    if (!user[0]) {
      return res.json({ error: "Account doesnt exist!" });
    }
    const validpassword = bcrypt.compareSync(password, user[0].password);
    if (!validpassword) {
      return res.json({ error: "Try again with another password!" });
    }
    const payload = user.map((item) => {
      const { password, ...rest } = item;
      return rest;
    });
    const token = jwt.sign(payload[0], process.env.JWT_KEY as string, {
      expiresIn: "2h",
    });
    res.status(200).json({
      message: "Logged in successfully",
      token,
    });
  } catch (error: any) {
    res.json({ error: error.message });
  }
};
