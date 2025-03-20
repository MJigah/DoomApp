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
import Back from "../../assets/svg/BackArrow.svg?react";
import SearchIcon from "../../assets/svg/Search.svg";
import PageMenu from "../../components/PageMenu/pageMenu";
import "./totalRooms.css";
import useTotalRooms from "./hooks/useTotalRooms";

const TotalRooms = () => {
  const { blocks, navigateToRoomsList } = useTotalRooms();
  const footerComponent = (
    <IonButton className="w-full mt-16">Assign Rooms</IonButton>
  );
  return (
    <>
      <PageMenu
        pageClassName="room-overview-page"
        menuComponent={<Back className="text-black" />}
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
            <div className="w-full flex flex-col gap-y-7 items-start justify-center">
              <IonText>Total Rooms</IonText>
              <div className="w-full flex flex-col gap-y-3">
                {blocks.map((item: any, index: number) => (
                  <button
                    key={index}
                    className="w-full flex flex-row items-center justify-between py-6 px-5 border border-solid border-primary"
                    onClick={() => navigateToRoomsList(item.blockId)}
                  >
                    <IonText className="text-sm text-lightGrey">
                      {`${item.name} (${item.blockLines})`}
                    </IonText>
                    <IonText className="text-sm text-lightGrey">
                      {item.rooms}
                    </IonText>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageMenu>
    </>
  );
};

export default TotalRooms;
