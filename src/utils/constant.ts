import { ToastProps } from "../redux/slice/toast.slice";
import { UserStateProps } from "../redux/slice/user.slice";

export enum apiMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export interface StateProps {
  user: UserStateProps;
  toast: ToastProps;
}