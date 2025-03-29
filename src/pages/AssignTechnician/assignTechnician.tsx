import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonButton, IonIcon, IonInput, IonText } from "@ionic/react";
import Back from "../../assets/svg/BackArrow.svg?react";
import SearchIcon from "../../assets/svg/Search.svg";
import PageMenu from "../../components/PageMenu/pageMenu";
import "./assignTechnician.css";
import useAssignTechnician from "./hooks/useAssignTechnician";

const AssignTechnician = () => {
  const { request, navigateToAssignTechnician } = useAssignTechnician();

  const footerComponent = (
    <IonButton className="w-full" onClick={navigateToAssignTechnician}>
      Assign Technician
    </IonButton>
  );

  return (
    <>
      <PageMenu
        pageClassName="room-overview-page"
        menuComponent={
          <div className="flex flex-row gap-x-3">
            <Back className="text-black" />
            <IonText className="font-semibold text-lg">
              Maintenance Requests
            </IonText>
          </div>
        }
        footerComponent={footerComponent}
      >
        <div className="flex flex-col gap-y-7">
          <div className="flex flex-col gap-y-3 h-[calc(100vh-190px)] overflow-y-auto">
            <button className="py-[10px] px-4 flex flex-col gap-y-1 items-start border border-solid rounded border-lightGrey">
              <IonText className="text-sm text-lightGrey">
                {`${request?.room?.block?.name || ""} ${
                  request?.room?.line || ""
                }${request?.room?.roomId || ""}`}
              </IonText>
              <IonText className="text-sm text-lightGrey">
                {request?.fault || ""}
              </IonText>
            </button>
          </div>
        </div>
      </PageMenu>
    </>
  );
};

export default AssignTechnician;
