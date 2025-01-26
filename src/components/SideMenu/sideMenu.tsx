import { IonContent, IonHeader, IonMenu, IonMenuToggle } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../../assets/svg/Close.svg?react";
import "./sideMenu.css";

const SideMenu = () => {
  return (
    <IonMenu contentId="main-content" className="admin-menu">
      <IonHeader className="bg-btnPrimary flex items-start justify-end px-4 pt-6">
        <IonMenuToggle>
          <CloseIcon className="text-white" />
        </IonMenuToggle>
      </IonHeader>
      <IonContent className="bg-btnPrimary flex items-center justify-center p-4">
        <div className="flex flex-col gap-y-5 p-4 items-center justify-center mt-28">
          <Link to="#" className="text-2xl text-white font-medium p-2">
            Home
          </Link>
          <Link to="#" className="text-2xl text-white font-medium p-2">
            Rooms
          </Link>
          <Link to="#" className="text-2xl text-white font-medium p-2">
            Maintenance Requests
          </Link>
          <Link to="#" className="text-2xl text-white font-medium p-2">
            Billings
          </Link>
          <button className="text-2xl text-white font-medium p-2">
            Logout
          </button>
        </div>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
