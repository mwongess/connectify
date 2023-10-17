import { ILoginPayload, ISignupPayload } from "../types/userTypes";
import { api } from "./domain";
import { NavigateFunction } from "react-router-dom";
import axios from "axios";

export const loginUser = async (
  user: ILoginPayload,
  navigate: NavigateFunction
) => {
  try {
    const { data } = await axios.post(`${api}/auth/login`, user);
    if (data.token) {
      localStorage.setItem("user", JSON.stringify(data.token));
      navigate("/home");
    }
  } catch (err) {
    console.error(err)
  }
};

export const signupUser = async (
  user: ISignupPayload,
  // navigate: NavigateFunction
) => {
  try {
    const { data } = await axios.post(`${api}/auth/signup`, user);
    return data
  } catch (err) {
    console.error(err)
  }
};
