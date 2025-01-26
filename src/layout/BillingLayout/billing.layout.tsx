import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router-dom";
import MaintenanceRequest from "../../pages/MaintenanceRequest/maintenanceRequest";
import BillingList from "../../pages/BillingList/billingList";
import { BillingRoutes } from "./route";
import BillingReceipt from "../../pages/BillingReceipt/billingReceipt";
import BillingSuccessful from "../../pages/BillingSuccessful/billingSuccessful";
import MakePayment from "../../pages/MakePayment/makePayment";

const BillingLayout = () => {
  return (
    <PageWrapper>
      <IonRouterOutlet>
        <Route path={BillingRoutes.billingLists}>
          <BillingList />
        </Route>
        <Route path={BillingRoutes.billingReceipt}>
          <BillingReceipt />
        </Route>
        <Route path={BillingRoutes.billingSuccess}>
          <BillingSuccessful />
        </Route>
        <Route path={BillingRoutes.makePayment}>
          <MakePayment />
        </Route>
      </IonRouterOutlet>
    </PageWrapper>
  );
};

export default BillingLayout;
