import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import Success from "../../assets/svg/RequestSuccess.svg?react";
import BackIcon from "../../assets/svg/BackArrow.svg?react";
import { IonHeader, IonText } from "@ionic/react";
import SideMenu from "../../components/SideMenu/sideMenu";
import usePush from "../../utils/usePush";
import { DashboardRoutes } from "../../layout/DashboardLayout/routes";

const RequestSuccess = () => {
  const { push } = usePush();

  const navigateToDashboard = () => {
    push(DashboardRoutes.admin);
  };
  const headerComponent = (
    <IonHeader>
      <BackIcon onClick={navigateToDashboard} />
    </IonHeader>
  );
  return (
    <>
      <PageWrapper headerComponent={headerComponent} headerClassName="pt-4">
        <div className="h-full flex flex-col items-center justify-center">
          <Success />
          <IonText className="font-semibold text-2xl">Successful!</IonText>
        </div>
      </PageWrapper>
    </>
  );
};

export default RequestSuccess;
