import { IonContent, IonHeader, IonMenu, IonMenuToggle } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../../assets/svg/Close.svg?react";
import "./sideMenu.css";
import usePush from "../../utils/usePush";
import { AuthRoutes } from "../../layout/AuthLayout/routes";
import { DashboardRoutes } from "../../layout/DashboardLayout/routes";
import { RoomRoutes } from "../../layout/RoomLayout/route";
import { MaintenanceRoutes } from "../../layout/MaintenanceLayout/route";
import { BillingRoutes } from "../../layout/BillingLayout/route";

const SideMenu = () => {
  const { push } = usePush();
  const handleLogout = () => {
    push(AuthRoutes.login);
  };
  return (
    <IonMenu contentId="main-content" className="admin-menu">
      <IonHeader className="shadow-none border-none bg-btnPrimary flex items-start justify-end px-4 pt-6">
        <IonMenuToggle>
          <CloseIcon className="text-white" />
        </IonMenuToggle>
      </IonHeader>
      <IonContent className="bg-btnPrimary flex items-center justify-center p-4">
        <div className="flex flex-col gap-y-5 p-4 items-center justify-center mt-28">
          <Link
            to={DashboardRoutes.admin}
            className="text-2xl text-white font-medium p-2"
          >
            Home
          </Link>
          <Link
            to={RoomRoutes.overview}
            className="text-2xl text-white font-medium p-2"
          >
            Rooms
          </Link>
          <Link
            to={MaintenanceRoutes.requests}
            className="text-2xl text-white font-medium p-2"
          >
            Maintenance Requests
          </Link>
          <Link
            to={BillingRoutes.billingLists}
            className="text-2xl text-white font-medium p-2"
          >
            Billings
          </Link>
          <button
            className="text-2xl text-white font-medium p-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
