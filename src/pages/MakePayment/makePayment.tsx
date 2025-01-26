import React from "react";
import PageMenu from "../../components/PageMenu/pageMenu";
import Back from "../../assets/svg/BackArrow.svg?react";
import { IonButton, IonInput, IonText } from "@ionic/react";

const MakePayment = () => {
  return (
    <>
      <PageMenu
        pageClassName="room-overview-page"
        menuComponent={
          <div className="flex flex-row gap-x-3">
            <Back className="text-black" />
            <IonText className="font-semibold text-lg">Make Payment</IonText>
          </div>
        }
        footerClassName="pb-4"
        footerComponent={
          <IonButton className="w-full mt-16">Make Payment</IonButton>
        }
      >
        <div className="py-14">
          <form className="flex flex-col gap-y-11">
            <IonInput className="text-sm" placeholder="Enter your full name" />
            <IonInput
              className="text-sm"
              placeholder="Enter your room number"
            />
            <IonInput className="text-sm" placeholder="Enter Amount" />
            <IonInput className="text-sm" placeholder="Enter your password" />
          </form>
        </div>
      </PageMenu>
    </>
  );
};

export default MakePayment;
