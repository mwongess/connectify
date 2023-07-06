import { store } from "../redux/store/store";

export interface ILoggedInUser{
    userName: string,
    token: string
}
export interface IUserState {
  details: ILoggedInUser | null;
  error: false;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
