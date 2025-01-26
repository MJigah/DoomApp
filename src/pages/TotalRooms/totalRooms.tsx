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

const TotalRooms = () => {
  return (
    <>
      <PageMenu
        pageClassName="room-overview-page"
        menuComponent={<Back className="text-black" />}
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
                {["", "", "", ""].map((item: any, index: number) => (
                  <button
                    key={index}
                    className="w-full flex flex-row items-center justify-between py-6 px-5 border border-solid border-primary"
                  >
                    <IonText className="text-sm text-lightGrey">
                      Queen Amina Block
                    </IonText>
                    <IonText className="text-sm text-lightGrey">14</IonText>
                  </button>
                ))}
              </div>
            </div>
            <IonButton className="w-full mt-16">Assign Rooms</IonButton>
          </div>
        </div>
      </PageMenu>
    </>
  );
};

export default TotalRooms;
