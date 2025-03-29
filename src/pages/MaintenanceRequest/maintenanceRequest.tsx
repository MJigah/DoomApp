import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonButton, IonIcon, IonInput, IonText } from "@ionic/react";
import Back from "../../assets/svg/BackArrow.svg?react";
import SearchIcon from "../../assets/svg/Search.svg";
import PageMenu from "../../components/PageMenu/pageMenu";
import "./maintenanceRequest.css";
import { useUser } from "../../utils/useUser";
import { getRequests } from "../../service/request.service";
import usePush from "../../utils/usePush";
import { MaintenanceRoutes } from "../../layout/MaintenanceLayout/route";
import { appendQueryParams } from "../../utils/helper";

const MaintenanceRequest = () => {
  const { push } = usePush();
  const { userRole } = useUser();
  const [allRequests, setAllRequests] = useState([]);

  const fetchRequest = async () => {
    try {
      // fetch maintenance request
      const { data } = await getRequests();
      console.log(data);
      setAllRequests(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const navigateToAssignTechnician = (id: string) => {
    push(appendQueryParams(MaintenanceRoutes.technician, { id }));
  };

  return (
    <>
      <PageMenu
        pageClassName="room-overview-page"
        menuComponent={
          <div className="flex flex-row gap-x-3">
            <Back className="text-black" />
            <IonText className="font-semibold text-lg">
              {userRole === "Staff"
                ? "Track Request Status"
                : "Maintenance Requests"}
            </IonText>
          </div>
        }
      >
        <div className="flex flex-col gap-y-7">
          <div className="flex flex-col gap-y-3 h-[calc(100vh-190px)] overflow-y-auto">
            {allRequests.map((item: any) => (
              <button
                onClick={() => navigateToAssignTechnician(item._id)}
                className={`py-[10px] px-4 flex flex-row items-center justify-between border border-solid rounded ${
                  item.status === "pending" ? "text-textRed" : "text-textGreen"
                }`}
              >
                <div className="flex flex-col gap-y-1 items-start">
                  <IonText
                    className={`text-sm ${
                      item.status === "pending"
                        ? "text-textRed"
                        : "text-textGreen"
                    }`}
                  >
                    {`${item.room.block.name} ${item.room.line}${item.room.roomId}`}
                  </IonText>
                  <IonText
                    className={`text-sm ${
                      item.status === "pending"
                        ? "text-textRed"
                        : "text-textGreen"
                    }`}
                  >
                    {item.fault}
                  </IonText>
                </div>
                <IonText
                  className={`text-sm ${
                    item.status === "pending"
                      ? "border-textRed"
                      : "border-textGreen"
                  }`}
                >
                  {item.status === "pending" ? "Pending" : "Completed"}
                </IonText>
              </button>
            ))}
          </div>
          {userRole !== "Staff" && (
            <IonButton className="w-full">Track Requests</IonButton>
          )}
        </div>
      </PageMenu>
    </>
  );
};

export default MaintenanceRequest;
