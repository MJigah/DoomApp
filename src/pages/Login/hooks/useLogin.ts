import React, { useState } from "react";
import { login } from "../../../service/user.service";
import usePush from "../../../utils/usePush";
import {
  setToken,
  setUser,
  setUserRole,
  setUserSession,
} from "../../../utils/helper";
import { useToast } from "../../../utils/useToast";
import { DashboardRoutes } from "../../../layout/DashboardLayout/routes";
import { useUser } from "../../../utils/useUser";

const useLogin = () => {
  const { push } = usePush();
  const { successToast, errorToast } = useToast();
  const { setReduxUser } = useUser();

  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNavigateToCategoryPage = () => {
    push(DashboardRoutes.admin);
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const { data, status, message } = await login({ fullName, password });
      if (status !== 200) {
        errorToast(message);
      }
      const { token, ...rest } = data;
      setToken(token);
      setUserSession(token, rest);
      setReduxUser(rest);
      setUserRole(rest.role);
      successToast("Login successful");
      setFullName("");
      setPassword("");
      handleNavigateToCategoryPage();
    } catch (error: any) {
      console.log(error);
      errorToast(error.message);
    }
    setLoading(false);
  };
  return { handleLogin, fullName, setFullName, password, setPassword, loading };
};

export default useLogin;
