import React from "react";
import "./toast.css";
import { IonToast } from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { setToastData } from "../../redux/slice/toast.slice";
import SuccessIcon from "../../assets/svg/toast-success.svg";
import ErrorIcon from "../../assets/svg/toast-error.svg";
import InfoIcon from "../../assets/svg/toast-info.svg";
import { StateProps } from "../../utils/constant";

export const Toast = () => {
  const reduxDispatch = useDispatch();
  const { toast } = useSelector((state: StateProps) => state.toast);
  const { message, type, duration } = toast;
  const handleDismiss = () => {
    reduxDispatch(
      setToastData({
        ...toast,
        message: "",
        type: "",
      })
    );
  };

  return (
    <IonToast
      className={`zp-toast bg-toastBg border-borderGrey`}
      data-test-id="zp-toast"
      position="top"
      icon={
        type === "success"
          ? SuccessIcon
          : type === "error"
          ? ErrorIcon
          : type === "info"
          ? InfoIcon
          : ""
      }
      isOpen={!!message}
      onDidDismiss={handleDismiss}
      {...toast}
    />
  );
};
