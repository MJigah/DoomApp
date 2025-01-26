import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonButton, IonIcon, IonInput, IonText } from "@ionic/react";
import Back from "../../assets/svg/BackArrow.svg?react";
import MessageIcon from "../../assets/svg/message.svg?react";
import PageMenu from "../../components/PageMenu/pageMenu";
import "./trackRequest.css";

const TrackRequest = () => {
  return (
    <>
      <PageMenu
        pageClassName="room-overview-page"
        menuComponent={
          <div className="flex flex-row gap-x-3">
            <Back className="text-black" />
            <IonText className="font-semibold text-lg">
              Track Request Status
            </IonText>
          </div>
        }
      >
        <div className="flex flex-col gap-y-7">
          <div className="flex flex-col gap-y-3 h-[calc(100vh-190px)] overflow-y-auto">
            {["", "", ""].map((item) => (
              <button className="py-[10px] px-4 flex text-textGreen flex-row items-center justify-between border border-solid rounded border-textGreen">
                <div className="flex flex-col gap-y-1 items-start">
                  <IonText className="text-sm text-textGreen">
                    Queen Amina F4
                  </IonText>
                  <IonText className="text-sm text-textGreen">
                    Kitchen Light Bulb developed fault...
                  </IonText>
                </div>
                <IonText className="text-sm text-textGreen">Completed</IonText>
              </button>
            ))}
          </div>
        </div>
      </PageMenu>
    </>
  );
};

export default TrackRequest;
