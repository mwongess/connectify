import joi from "joi";

export const SignupSchema = joi.object({
  userName: joi.string().min(3).max(20).required(),
  email: joi.string().email().required(),
  password: joi.string().min(4).required(),
});

export const LoginSchema = joi.object({
  userName: joi.string().min(3).max(20).required(),
  password: joi.string().min(4).required(),
});
