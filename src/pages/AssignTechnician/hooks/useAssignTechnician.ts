import React, { useEffect, useState } from "react";
import { getSingleRequest } from "../../../service/request.service";
import { useIonRouter } from "@ionic/react";
import usePush from "../../../utils/usePush";
import { MaintenanceRoutes } from "../../../layout/MaintenanceLayout/route";
import { appendQueryParams } from "../../../utils/helper";

const useAssignTechnician = () => {
  const [request, setRequest] = useState<any>(null);
  const { push } = usePush();
  const { routeInfo } = useIonRouter();
  const id = routeInfo.search.split("=")[1];

  const fetchSingleRequest = async () => {
    try {
      const { data } = await getSingleRequest(id);
      setRequest(data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToAssignTechnician = () => {
    push(appendQueryParams(MaintenanceRoutes.technicianList, {id}));
  };

  useEffect(() => {
    fetchSingleRequest();
  }, []);

  return { request, navigateToAssignTechnician };
};

export default useAssignTechnician;
