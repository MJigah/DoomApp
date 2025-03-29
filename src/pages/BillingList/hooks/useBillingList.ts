import React, { useEffect, useState } from "react";
import { useUser } from "../../../utils/useUser";
import { myRequest } from "../../../service/request.service";

const useBillingList = () => {
  const { userRole } = useUser();
  const [allRequests, setAllRequests] = useState([]);

  const adminHeader = ["Room", "Occupant", "Status", "Date"];
  const studentHeader = ["Session", "Level", "Amount", "Status", "Date"];

  const header =
    userRole === "Admin"
      ? adminHeader
      : userRole === "Student"
      ? studentHeader
      : [];

  const fetchStudentRequest = async () => {
    try {
      const { data } = await myRequest();
      console.log(data);
      setAllRequests(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userRole === "Student") fetchStudentRequest();
  }, [userRole]);

  return {
    header,
    userRole,
    allRequests,
  };
};

export default useBillingList;
