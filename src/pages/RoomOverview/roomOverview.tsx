import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import {
  IonButton,
  IonIcon,
  IonInput,
  IonMenuToggle,
  IonText,
} from "@ionic/react";
import SideMenu from "../../components/SideMenu/sideMenu";
import MenuOpen from "../../assets/svg/menu.svg?react";
import SearchIcon from "../../assets/svg/Search.svg";
import PageMenu from "../../components/PageMenu/pageMenu";
import "./roomOverview.css";

const RoomOverview = () => {
  return (
    <>
      <PageMenu pageClassName="room-overview-page">
        <div className="flex flex-col gap-y-10">
          <IonInput className="text-sm" placeholder="Search">
            <IonIcon
              slot="start"
              icon={SearchIcon}
              aria-hidden="true"
            ></IonIcon>
          </IonInput>
          <div className="flex flex-col items-center justify-center gap-y-11">
            <IonText className="text-lg font-semibold">Room Overview</IonText>
            <div className="flex flex-col gap-y-20 w-full items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full relative text-center flex items-center justify-center">
                <div className="z-50 bg-white absolute top-[7px] flex flex-col items-center justify-center border border-solid border-[#0000001a] h-16 w-16 text-center rounded-full">
                  <IonText className="text-primary text-xs">52</IonText>
                  <IonText className="text-primary text-[5px]">
                    total rooms
                  </IonText>
                </div>
              </div>
              <div className="w-4 h-4 bg-textGreen rounded-full relative text-center flex items-center justify-center">
                <div className="z-50 bg-white absolute top-[7px] flex flex-col items-center justify-center border border-solid border-[#0000001a] h-16 w-16 text-center rounded-full">
                  <IonText className="text-textGreen text-xs">48</IonText>
                  <IonText className="text-textGreen text-[5px]">
                    occupied rooms
                  </IonText>
                </div>
              </div>
              <div className="w-4 h-4 bg-textRed rounded-full relative text-center flex items-center justify-center">
                <div className="z-50 bg-white absolute top-[7px] flex flex-col items-center justify-center border border-solid border-[#0000001a] h-16 w-16 text-center rounded-full">
                  <IonText className="text-textRed text-xs">4</IonText>
                  <IonText className="text-textRed text-[5px]">
                    total rooms
                  </IonText>
                </div>
              </div>
            </div>
            <IonButton className="w-full mt-16">Assign Rooms</IonButton>
          </div>
        </div>
      </PageMenu>
    </>
  );
};

export default RoomOverview;
