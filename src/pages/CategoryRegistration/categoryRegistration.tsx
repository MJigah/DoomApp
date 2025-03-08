import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonInput, IonText } from "@ionic/react";
import "./categoryRegistration.css";
import usePush from "../../utils/usePush";
import { DashboardRoutes } from "../../layout/DashboardLayout/routes";

const CategoryRegistration = () => {
  const { push } = usePush();

  const navigateToDashboard = () => {
    push(DashboardRoutes.admin);
  };
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
        <div className="flex flex-col gap-y-3">
          <button
            className="py-4 px-5 text-left text-sm border border-solid border-lightGrey text-lightGrey rounded"
            onClick={navigateToDashboard}
          >
            Admin
          </button>
          <button
            className="py-4 px-5 text-left text-sm border border-solid border-lightGrey text-lightGrey rounded"
            onClick={navigateToDashboard}
          >
            Staff
          </button>
          <button
            className="py-4 px-5 text-left text-sm border border-solid border-lightGrey text-lightGrey rounded"
            onClick={navigateToDashboard}
          >
            Student
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CategoryRegistration;
