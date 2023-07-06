import axios from "axios";
import { loginSuccess } from "../slices/userSlice";
import { domain } from "../../utils/domain";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { ILoginPayload } from "../../types/userTypes";

export const loginUser = async (dispatch:Dispatch<AnyAction>, user: ILoginPayload) => {
    // dispatch(loginStart());
    try {
      const { data } = await axios.post(`${domain}/auth/login`, user);
      dispatch(loginSuccess(data));
    } catch (err) {
    //   dispatch(loginFailure());
    }
  };