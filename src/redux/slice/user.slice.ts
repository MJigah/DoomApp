import { createSlice } from "@reduxjs/toolkit";

import { PersistConfig, persistReducer } from "redux-persist";
// import { ionicStorage } from "../../utils/ionicStorage";
import storage from "redux-persist/es/storage";

export interface User {
  fullName: string;
  email: string;
  phone_no: string;
  role: string;
  avatarUrl: string;
  faculty: string;
  department: string;
  level: string;
}
export interface UserStateProps {
  user: User;
}

const initialState: UserStateProps = {
  user: {
    fullName: "",
    email: "",
    phone_no: "",
    role: "",
    avatarUrl: "",
    faculty: "",
    department: "",
    level: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;

const persistConfig: PersistConfig<UserStateProps> = {
  key: "user",
  storage,
  whitelist: ["user"],
};

export const userReducer = persistReducer(persistConfig, userSlice.reducer);
