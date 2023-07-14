import * as yup from "yup";

export const signinSchema = yup.object({
    userName: yup.string().required("Username is required!"),
    password: yup.string().required("Password is required!"),
}).required();

