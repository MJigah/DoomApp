import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonRouterOutlet } from "@ionic/react";
import { DashboardRoutes } from "./routes";
import AdminDashboard from "../../pages/AdminDashboard/adminDashboard";
import { Route } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <PageWrapper>
      <IonRouterOutlet>
        <Route path={DashboardRoutes.admin}>
          <AdminDashboard />
        </Route>
      </IonRouterOutlet>
    </PageWrapper>
  );
};

export default DashboardLayout;
