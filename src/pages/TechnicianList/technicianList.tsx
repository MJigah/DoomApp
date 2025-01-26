import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonButton, IonIcon, IonInput, IonText } from "@ionic/react";
import Back from "../../assets/svg/BackArrow.svg?react";
import MessageIcon from "../../assets/svg/message.svg?react";
import PageMenu from "../../components/PageMenu/pageMenu";
import "./technicianList.css";

const TechnicianList = () => {
  return (
    <>
      <PageMenu
        pageClassName="room-overview-page"
        menuComponent={
          <div className="flex flex-row gap-x-3">
            <Back className="text-black" />
            <IonText className="font-semibold text-lg">Technicians</IonText>
          </div>
        }
      >
        <div className="flex flex-col gap-y-7">
          <div className="flex flex-col gap-y-3 h-[calc(100vh-190px)] overflow-y-auto">
            {["", "", ""].map((item) => (
              <button className="py-5 px-4 flex flex-row gap-y-1 items-start justify-between border border-solid rounded border-lightGrey">
                <IonText className="text-sm text-lightGrey">
                  Plumber
                </IonText>
                <MessageIcon />
              </button>
            ))}
          </div>
        </div>
      </PageMenu>
    </>
  );
};

export default TechnicianList;
