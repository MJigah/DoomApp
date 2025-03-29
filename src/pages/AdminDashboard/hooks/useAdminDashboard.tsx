import React from "react";
import { useUser } from "../../../utils/useUser";
import usePush from "../../../utils/usePush";
import { RoomRoutes } from "../../../layout/RoomLayout/route";
import { MaintenanceRoutes } from "../../../layout/MaintenanceLayout/route";
import { BillingRoutes } from "../../../layout/BillingLayout/route";
import { IonButton } from "@ionic/react";

const useAdminDashboard = () => {
  const { user } = useUser();
  const { push } = usePush();
  let headerClass;
  let navLinks;
  let containerSpacing;

  const navigateToRoomOverview = () => {
    push(RoomRoutes.overview);
  };

  const navigateToRequests = () => {
    push(MaintenanceRoutes.requests);
  };

  const navigateToMakeRequest = () => {
    push(MaintenanceRoutes.makeRequest);
  };

  const navigateToBillingLists = () => {
    push(BillingRoutes.billingLists);
  };

  const userRole = user.role;

  // Switch statement
  switch (userRole) {
    case "Admin":
      headerClass = "text-left";
      containerSpacing = "gap-y-[100px]";
      navLinks = (
        <>
          <button
            className="w-full text-lightBlack text-xs border border-solid border-lightGrey py-5 px-4 text-left rounded-sm"
            onClick={navigateToRoomOverview}
          >
            Room Overview
          </button>
          <button
            className="w-full text-lightBlack text-xs border border-solid border-lightGrey py-5 px-4 text-left rounded-sm"
            onClick={navigateToRequests}
          >
            Maintain Requests
          </button>
          <button
            className="w-full text-lightBlack text-xs border border-solid border-lightGrey py-5 px-4 text-left rounded-sm"
            onClick={navigateToBillingLists}
          >
            Billing
          </button>
        </>
      );
      break;
    case "Student":
      headerClass = "text-center";
      containerSpacing = "gap-y-[30px]";
      navLinks = (
        <>
          <button
            className="w-full text-lightBlack text-xs border border-solid border-lightGrey py-5 px-4 text-left rounded-sm"
            onClick={navigateToMakeRequest}
          >
            Make Maintenance Requests
          </button>
          <button
            className="w-full text-lightBlack text-xs border border-solid border-lightGrey py-5 px-4 text-left rounded-sm"
            onClick={navigateToBillingLists}
          >
            Payments & Billings
          </button>
          <button
            className="w-full text-lightBlack text-xs border border-solid border-lightGrey py-5 px-4 text-left rounded-sm"
            onClick={navigateToRoomOverview}
          >
            Communication Forum
          </button>
          <button
            className="w-full text-lightBlack text-xs border border-solid border-lightGrey py-5 px-4 text-left rounded-sm"
            onClick={navigateToBillingLists}
          >
            Emergency Contact
          </button>
        </>
      );
      break;
    case "Staff":
      headerClass = "text-center";
      containerSpacing = "gap-y-[20px]";

      break;
    default:
    // Code to execute if no cases match
  }

  const staffFooterComponent = (
    <div className="flex-1 flex px-3 py-3">
      <IonButton
        className="default-bottom-btn flex-1"
        onClick={navigateToRequests}
      >
        Maintain Requests
      </IonButton>
    </div>
  );

  return {
    userRole,
    headerClass,
    navLinks,
    containerSpacing,
    staffFooterComponent,
  };
};

export default useAdminDashboard;
