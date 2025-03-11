import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToastData, ToastDataProps } from "../redux/slice/toast.slice";
import { StateProps } from "./constant";

export const useToast = () => {
  const reduxDispatch = useDispatch();
  const { toast } = useSelector((state: StateProps) => state.toast);

  const infoToast = (message: string) => {
    reduxDispatch(
      setToastData({
        message,
        type: "info",
        duration: toast.duration,
      })
    );
  };

  const errorToast = (message: string) => {
    reduxDispatch(
      setToastData({
        message,
        type: "error",
        duration: toast.duration,
      })
    );
  };

  const successToast = (message: string) => {
    reduxDispatch(
      setToastData({
        message,
        type: "success",
        duration: toast.duration,
      })
    );
  };

  return {
    infoToast,
    errorToast,
    successToast,
  };
};
