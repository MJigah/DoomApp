import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "./constant";
import { getUserData } from "../service/user.service";
import { setUser } from "./helper";
import { setUserData } from "../redux/slice/user.slice";

export const useUser = () => {
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

  useEffect(() => {
    console.log(user.email);
    if (!user.email) {
      handleGetUser();
    }
  }, []);

  return {
    user,
    handleGetUser,
    setReduxUser,
  };
};
