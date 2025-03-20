import React, { useState } from "react";
import { useToast } from "../../../utils/useToast";
import { register } from "../../../service/user.service";
import { setToken, setUserRole, setUserSession } from "../../../utils/helper";
import { useUser } from "../../../utils/useUser";
import usePush from "../../../utils/usePush";
import { DashboardRoutes } from "../../../layout/DashboardLayout/routes";

const useRegister = () => {
  const { errorToast, successToast } = useToast();
  const { setReduxUser } = useUser();
  const { push } = usePush();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNavigateToDashboard = () => {
    push(DashboardRoutes.admin);
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      return errorToast("Passwords don't match");
    }

    if (email === "" || password === "" || email === "") {
      return errorToast("Fill in missing details!");
    }

    setLoading(true);
    try {
      const { data } = await register({
        fullName,
        email,
        role,
        password,
      });
      console.log(data);
      const { token, ...rest } = data;
      setToken(token);
      setUserSession(token, rest);
      setReduxUser(rest);
      setUserRole(rest.role);
      successToast("Registration successful");
      setFullName("");
      setPassword("");
      setEmail("");
      setRole("");
      handleNavigateToDashboard();
    } catch (error: any) {
      console.log(error);
      errorToast(error.message);
    }
    setLoading(false);
  };
  return {
    fullName,
    setFullName,
    email,
    setEmail,
    role,
    setRole,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    handleRegister,
  };
};

export default useRegister;
