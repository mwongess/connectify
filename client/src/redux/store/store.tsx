import { configureStore, combineReducers, Store } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userSlice from "../slices/userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { RootState } from "../../types/stateTypes";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers<RootState>({ user: userSlice });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
