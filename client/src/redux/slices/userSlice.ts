import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ILoggedInUser, IUserState } from "../../types/statetypes";

const initialState: IUserState = {
  details: {
    userName: "",
    token: ""
  },
  error: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<ILoggedInUser>) => {
      state.details = action.payload;
    },
    logOut: (state) => {
      state.details = null;
    },
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
