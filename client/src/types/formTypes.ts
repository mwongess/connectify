import * as yup from "yup";
import { signupSchema } from "../schemas/signupSchema";
import { signinSchema } from "../schemas/signinSchema";
// import { signinSchema } from "../schemas/signinSchema";
// import { signupSchema } from "../schemas/signupSchema";

export type SignupFormData = yup.InferType< typeof  signupSchema>
export type SigninFormData = yup.InferType< typeof  signinSchema>