import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "./constant";
import { getUserData } from "../service/user.service";
import { getUserRole, setUser } from "./helper";
import { setUserData } from "../redux/slice/user.slice";

export const useUser = () => {
  const [userRole, setUserRole] = useState();
  const { user: userData } = useSelector((state: StateProps) => state);
  const { user } = userData;
  const reduxDispatch = useDispatch();

  const setReduxUser = async (data: any) => {
    await setUser(data);
    reduxDispatch(setUserData(data));
  };

  const handleGetUser = async () => {
    const { data } = await getUserData();
    await setReduxUser(data);
  };

  const fetUserRole = async () => {
    const role = await getUserRole();
    setUserRole(user.role || role);
  };

  useEffect(() => {
    console.log(user.email);
    if (!user.email) {
      handleGetUser();
    }
    fetUserRole();
  }, []);

  return {
    user,
    handleGetUser,
    setReduxUser,
    userRole,
  };
};
