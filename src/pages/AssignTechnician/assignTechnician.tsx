import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonButton, IonIcon, IonInput, IonText } from "@ionic/react";
import Back from "../../assets/svg/BackArrow.svg?react";
import SearchIcon from "../../assets/svg/Search.svg";
import PageMenu from "../../components/PageMenu/pageMenu";
import "./assignTechnician.css";

const AssignTechnician = () => {
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
      >
        <div className="flex flex-col gap-y-7">
          <div className="flex flex-col gap-y-3 h-[calc(100vh-190px)] overflow-y-auto">
            <button className="py-[10px] px-4 flex flex-col gap-y-1 items-start border border-solid rounded border-lightGrey">
              <IonText className="text-sm text-lightGrey">
                Queen Amina F4
              </IonText>
              <IonText className="text-sm text-lightGrey">
                Kitchen Light Bulb developed fault...
              </IonText>
            </button>
          </div>
          <IonButton className="w-full">Assign Technician</IonButton>
        </div>
      </PageMenu>
    </>
  );
};

export default AssignTechnician;
