import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonInput, IonText } from "@ionic/react";
import "./categoryRegistration.css";

const CategoryRegistration = () => {
  return (
    <PageWrapper className="category-register-page">
      <div className="flex flex-col gap-y-[80px] py-[120px]">
        <div className="flex flex-col gap-y-5 items-center justify-center">
          <IonText className="font-black text-3xl text-primary text-center">
            DormApp
          </IonText>
          <IonText className="text-lg font-semibold mt-1">
            Which user category do you belong to?
          </IonText>
        </div>
        <form className="flex flex-col gap-y-3">
          <IonInput className="text-sm" placeholder="Admin" />
          <IonInput className="text-sm" placeholder="Staff" />
          <IonInput className="text-sm" placeholder="Student" />
        </form>
      </div>
    </PageWrapper>
  );
};

export default CategoryRegistration;
