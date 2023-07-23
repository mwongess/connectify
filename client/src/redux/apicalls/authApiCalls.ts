import { ILoginPayload } from "../../types/userTypes";
import { api } from "../../utils/domain";
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
      navigate("/");
    }
  } catch (err) {
    console.error(err)
  }
};
