// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setToastData, ToastDataProps } from "../redux/slice/toast.slice";
// import { StateProps } from "../modules/shared/constants";

// export const useToast = () => {
//   const reduxDispatch = useDispatch();
//   const { toast } = useSelector((state: StateProps) => state.toast);

//   const setToast = ({ message, type, duration }: ToastDataProps) => {
//     reduxDispatch(
//       setToastData({
//         message,
//         type,
//         duration: duration || toast.duration,
//       })
//     );
//   };

//   return {
//     setToast,
//   };
// };
