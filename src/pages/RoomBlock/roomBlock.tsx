import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonButton, IonIcon, IonInput, IonText } from "@ionic/react";
import Back from "../../assets/svg/BackArrow.svg?react";
import SearchIcon from "../../assets/svg/Search.svg";
import PageMenu from "../../components/PageMenu/pageMenu";
import "./roomBlock.css";

const RoomBlock = () => {
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
            <div className="w-full flex flex-col gap-y-6 items-start justify-center">
              <IonText>Queen Amina Block</IonText>
              <div className="w-full flex flex-row">
                {["", "", ""].map((item: any, index: number) => (
                  <div className="flex-1">
                    <IonText className="text-sm text-lightGrey">
                      A/B Line
                    </IonText>
                    <div className="text-sm text-textGreen">
                      {["", "", ""].map((val, index) => (
                        <div className="flex flex-row gap-x-1">
                          <IonText>A{index + 1}</IonText>
                          <IonText>Occupied</IonText>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageMenu>
    </>
  );
};

export default RoomBlock;
