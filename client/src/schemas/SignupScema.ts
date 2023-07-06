import * as yup from "yup";

export const SignUpschema = yup.object({
    userName: yup.string().required("Username is required!"),
    email: yup.string().email("Email must contain @ !").required("Email is required!"),
    password: yup.string().required("Password is required!"),
}).required();

