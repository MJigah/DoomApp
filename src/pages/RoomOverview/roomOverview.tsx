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
import useRoomOverview from "./hooks/useRoomOverview";

const RoomOverview = () => {
  const { roomCount, navigateToTotalRooms } = useRoomOverview();
  const footerComponent = (
    <IonButton className="w-full mt-16">Assign Rooms</IonButton>
  );
  return (
    <>
      <PageMenu
        pageClassName="room-overview-page"
        footerComponent={footerComponent}
      >
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
            <div className="flex flex-col gap-y-[130px] w-full items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full relative text-center flex items-center justify-center">
                <div
                  className="z-50 bg-white absolute top-[7px] flex flex-col items-center justify-center border border-solid border-[#0000001a] h-16 w-16 text-center rounded-full cursor-pointer"
                  onClick={navigateToTotalRooms}
                >
                  <IonText className="text-primary text-xs">
                    {roomCount.total}
                  </IonText>
                  <IonText className="text-primary text-[5px]">
                    total rooms
                  </IonText>
                </div>
              </div>
              <div className="w-4 h-4 bg-textGreen rounded-full relative text-center flex items-center justify-center">
                <div
                  className="z-50 bg-white absolute top-[7px] flex flex-col items-center justify-center border border-solid border-[#0000001a] h-16 w-16 text-center rounded-full cursor-pointer"
                  onClick={navigateToTotalRooms}
                >
                  <IonText className="text-textGreen text-xs">
                    {roomCount.filled}
                  </IonText>
                  <IonText className="text-textGreen text-[5px]">
                    occupied rooms
                  </IonText>
                </div>
              </div>
              <div className="w-4 h-4 bg-textRed rounded-full relative text-center flex items-center justify-center">
                <div
                  className="z-50 bg-white absolute top-[7px] flex flex-col items-center justify-center border border-solid border-[#0000001a] h-16 w-16 text-center rounded-full cursor-pointer"
                  onClick={navigateToTotalRooms}
                >
                  <IonText className="text-textRed text-xs">
                    {roomCount.vacant}
                  </IonText>
                  <IonText className="text-textRed text-[5px]">
                    Vacant rooms
                  </IonText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageMenu>
    </>
  );
};

export default RoomOverview;
