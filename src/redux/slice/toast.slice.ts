import { createSlice } from "@reduxjs/toolkit";

export interface ToastDataProps {
  message: string;
  type: "success" | "error" | "info" | "";
  duration?: number;
}

export interface ToastProps {
  toast: ToastDataProps;
}

const initialState: ToastProps = {
  toast: { message: "", type: "", duration: 3000 },
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToastData(state, action) {
      state.toast = action.payload;
    },
  },
});

export const { setToastData } = toastSlice.actions;
export default toastSlice.reducer;
