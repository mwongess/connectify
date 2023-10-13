import * as yup from "yup";

export const signupSchema = yup
  .object({
    name: yup.string().required("Your name is required!"),
    email: yup
      .string()
      .email("Email must contain @ !")
      .required("Email is required!"),
    password: yup.string().required("Password is required!"),
  })
  .required();
