import axios from "axios";
import { loginSuccess } from "../slices/userSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { ILoginPayload } from "../../types/userTypes";
import { api } from "../../utils/domain";

export const loginUser = async (dispatch:Dispatch<AnyAction>, user: ILoginPayload) => {
    // dispatch(loginStart());
    try {
      const { data } = await axios.post(`${api}/auth/login`, user);
      dispatch(loginSuccess(data));
    } catch (err) {
    //   dispatch(loginFailure());
    }
  };