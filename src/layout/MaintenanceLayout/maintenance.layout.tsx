import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router-dom";
import { MaintenanceRoutes } from "./route";
import MaintenanceRequest from "../../pages/MaintenanceRequest/maintenanceRequest";
import AssignTechnician from "../../pages/AssignTechnician/assignTechnician";
import TechnicianList from "../../pages/TechnicianList/technicianList";
import TrackRequest from "../../pages/TrackRequest/trackRequest";
import MakeRequest from "../../pages/MakeRequest/makeRequest";
import RequestSuccess from "../../pages/RequestSuccess/requestSuccess";

const MaintenanceLayout = () => {
  return (
    <PageWrapper>
      <IonRouterOutlet>
        <Route path={MaintenanceRoutes.requests}>
          <MaintenanceRequest />
        </Route>
        <Route path={MaintenanceRoutes.technician}>
          <AssignTechnician />
        </Route>
        <Route path={MaintenanceRoutes.technicianList}>
          <TechnicianList />
        </Route>
        <Route path={MaintenanceRoutes.trackRequest}>
          <TrackRequest />
        </Route>
        <Route path={MaintenanceRoutes.makeRequest}>
          <MakeRequest />
        </Route>
        <Route path={MaintenanceRoutes.successRequest}>
          <RequestSuccess />
        </Route>
      </IonRouterOutlet>
    </PageWrapper>
  );
};

export default MaintenanceLayout;
