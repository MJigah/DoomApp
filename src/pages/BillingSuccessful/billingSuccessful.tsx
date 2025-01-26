import React from "react";
import PageMenu from "../../components/PageMenu/pageMenu";
import Back from "../../assets/svg/BackArrow.svg?react";
import Close from "../../assets/svg/Close.svg?react";
import SuccessImage from "../../assets/image/pana.png";
import { IonText } from "@ionic/react";

const BillingSuccessful = () => {
  return (
    <>
      <PageMenu
        pageClassName="room-overview-page"
        menuComponent={<Back className="text-black" />}
      >
        <div className="flex flex-col gap-y-2 items-center justify-center h-[50%]">
          <div className="w-full flex items-start justify-end">
            <Close />
          </div>
          <img src={SuccessImage} className="mt-[50px] w-[200px] h-auto object-cover" />
          <IonText className="font-semibold text-2xl">Successful!</IonText>
        </div>
      </PageMenu>
    </>
  );
};

export default BillingSuccessful;
