import * as yup from "yup";
import { signinSchema } from "../schemas/signinSchema";
import { signupSchema } from "../schemas/signupSchema";

export type SignupFormData = yup.InferType< typeof  signupSchema>
export type SigninFormData = yup.InferType< typeof  signinSchema>