import React from "react";
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import MenuOpen from "../../assets/svg/menu.svg?react";
import "./adminDAshbord.css";
import { Link } from "react-router-dom";
import SideMenu from "../../components/SideMenu/sideMenu";

const AdminDashboard = () => {
  return (
    <>
      <SideMenu />
      <PageWrapper className="py-14" id="main-content">
        <div className="flex flex-col gap-y-[100px]">
          <div className="flex flex-col gap-y-9">
            <IonMenuToggle>
              <MenuOpen className="text-darkBlue" />
            </IonMenuToggle>
            <IonText className="text-lg font-semibold">Hello Admin!</IonText>
            <div className="w-full flex items-center justify-center">
              <div className="bg-darkGrey rounded-full mt-6 h-[200px] w-[200px] text-center" />
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <IonText className="mt-4 text-lg font-semibold">
              What do you want to do?
            </IonText>
            <button className="w-full text-lightBlack text-xs border border-solid border-lightGrey py-5 px-4 text-left rounded-sm">
              Room Overview
            </button>
            <button className="w-full text-lightBlack text-xs border border-solid border-lightGrey py-5 px-4 text-left rounded-sm">
              Maintain Requests
            </button>
            <button className="w-full text-lightBlack text-xs border border-solid border-lightGrey py-5 px-4 text-left rounded-sm">
              Billing
            </button>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default AdminDashboard;
