import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router-dom";
import { RoomRoutes } from "./route";
import RoomOverview from "../../pages/RoomOverview/roomOverview";
import TotalRooms from "../../pages/TotalRooms/totalRooms";
import RoomBlock from "../../pages/RoomBlock/roomBlock";

const RoomLayout = () => {
  return (
    <PageWrapper>
      <IonRouterOutlet>
        <Route path={RoomRoutes.overview}>
          <RoomOverview />
        </Route>
        <Route path={RoomRoutes.total}>
          <TotalRooms />
        </Route>
        <Route path={RoomRoutes.block}>
          <RoomBlock />
        </Route>
      </IonRouterOutlet>
    </PageWrapper>
  );
};

export default RoomLayout;
