import React from "react";
import PageMenu from "../../components/PageMenu/pageMenu";
import Back from "../../assets/svg/BackArrow.svg?react";
import { IonButton, IonText } from "@ionic/react";

const BillingReceipt = () => {
  return (
    <>
      <PageMenu
        pageClassName="room-overview-page"
        menuComponent={
          <div className="flex flex-row gap-x-3">
            <Back className="text-black" />
            <IonText className="font-semibold text-lg">Billing</IonText>
          </div>
        }
        footerClassName="pb-4"
        footerComponent={
          <IonButton className="w-full mt-16">Send Receipts</IonButton>
        }
      >
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-row items-center gap-x-10">
            <IonText>Room</IonText>
            <IonText>Occupant</IonText>
            <IonText>Status</IonText>
            <IonText>Date</IonText>
          </div>
          <button className="flex flex-row items-center gap-x-10 py-3 px-2 border border-solid border-textGreen">
            <IonText className="text-sm text-textGreen">QA FA</IonText>
            <IonText className="text-sm text-textGreen">Occupant 1</IonText>
            <IonText className="text-sm text-textGreen">Paid</IonText>
            <IonText className="text-sm text-textGreen">28/12/24</IonText>
          </button>
        </div>
      </PageMenu>
    </>
  );
};

export default BillingReceipt;
