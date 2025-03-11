import React, { useState } from "react";
import usePush from "../../../utils/usePush";
import { DashboardRoutes } from "../../../layout/DashboardLayout/routes";
import { updateUserRole } from "../../../service/user.service";
import { setUserRole } from "../../../utils/helper";

const useCategoryRegistration = () => {
  const [loading, setLoading] = useState(false);
  const { push } = usePush();

  const navigateToDashboard = () => {
    push(DashboardRoutes.admin);
  };

  const handleUpdateRole = async (role: string) => {
    setLoading(true);
    try {
      await updateUserRole({ role });
      setUserRole(role);
      navigateToDashboard();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return {
    handleUpdateRole,
  };
};

export default useCategoryRegistration;
