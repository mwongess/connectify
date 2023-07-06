import * as yup from "yup";
import { Signinschema } from "../schemas/signinSchema";

export type FormData = yup.InferType<typeof Signinschema>