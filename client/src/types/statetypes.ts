import { store } from "../redux/store/store";

export interface ILoggedInUser{
    userName: string,
    token: string
}
export interface IUserState {
  details: ILoggedInUser | null;
  error: false;
}
// ReturnType<typeof store.getState>;

export type RootState = any
export type AppDispatch = typeof store.dispatch;
