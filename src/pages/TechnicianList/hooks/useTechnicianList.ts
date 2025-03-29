import React, { useEffect, useState } from "react";
import {
  assignTechnician,
  fetchTechnicians,
} from "../../../service/request.service";
import { useIonRouter } from "@ionic/react";
import { useToast } from "../../../utils/useToast";

const useTechnicianList = () => {
  const [technicians, setTechnicians] = useState([]);
  const { routeInfo } = useIonRouter();
  const id = routeInfo.search.split("=")[1];
  const { errorToast, successToast } = useToast();

  const fetAllTechnicians = async () => {
    try {
      const { data } = await fetchTechnicians();
      setTechnicians(data);
    } catch (error) {
      console.log(error);
    }
  };

  const assignTechnicianToRequest = async (technicianId: string) => {
    try {
      const { message } = await assignTechnician({
        requestId: id,
        technicianId,
      });
      successToast(message);
    } catch (error: any) {
      console.log(error);
      errorToast(error.message);
    }
  };

  useEffect(() => {
    fetAllTechnicians();
  }, []);

  return { technicians, assignTechnicianToRequest };
};

export default useTechnicianList;
