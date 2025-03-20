import React from "react";
import { Redirect, Route } from "react-router";
import { IonRouterOutlet } from "@ionic/react";
import AuthLayout from "./AuthLayout/auth.layout";
import { AuthRoutes } from "./AuthLayout/routes";
import { DashboardRoutes } from "./DashboardLayout/routes";
import DashboardLayout from "./DashboardLayout/dashboard.layout";
import { RoomRoutes } from "./RoomLayout/route";
import RoomLayout from "./RoomLayout/room.layout";
import { MaintenanceRoutes } from "./MaintenanceLayout/route";
import MaintenanceLayout from "./MaintenanceLayout/maintenance.layout";
import { BillingRoutes } from "./BillingLayout/route";
import BillingLayout from "./BillingLayout/billing.layout";

const RootLayout = () => {
  return (
    <IonRouterOutlet>
      <Route path={AuthRoutes.root as string} component={AuthLayout} />
      <Route path={DashboardRoutes.root} component={DashboardLayout} />
      <Route path={RoomRoutes.root} component={RoomLayout} />
      <Route path={MaintenanceRoutes.root} component={MaintenanceLayout} />
      <Route path={BillingRoutes.root} component={BillingLayout} />
      <Redirect exact path="/" to={AuthRoutes.onboarding} />
    </IonRouterOutlet>
  );
};

export default RootLayout;
