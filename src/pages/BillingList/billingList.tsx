import React from "react";
import PageMenu from "../../components/PageMenu/pageMenu";
import Back from "../../assets/svg/BackArrow.svg?react";
import { IonText } from "@ionic/react";
import { useUser } from "../../utils/useUser";
import useBillingList from "./hooks/useBillingList";

const BillingList = () => {
  const { header, userRole, allRequests } = useBillingList();
  return (
    <>
      <PageMenu
        pageClassName="room-overview-page"
        menuComponent={
          <div className="flex flex-row gap-x-3">
            <Back className="text-black" />
            <IonText className="font-semibold text-lg">
              Billing {userRole === "Student" && "Summary"}
            </IonText>
          </div>
        }
      >
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-row items-center gap-x-10">
            {header.map((item) => (
              <IonText>{item}</IonText>
            ))}
          </div>
          <div className="flex flex-col gap-y-3">
            {allRequests.map((item: any) => (
              <button className="flex flex-row items-center gap-x-10 py-3 px-2 border border-solid border-textGreen">
                <IonText className="text-sm text-textGreen">{`${
                  item?.room?.line || ""
                }${item?.room?.roomId || ""}`}</IonText>
                <IonText className="text-sm text-textGreen">
                  {item?.user?.level || ""}
                </IonText>
                <IonText className="text-sm text-textGreen">Paid</IonText>
                <IonText className="text-sm text-textGreen">
                  {item.status === "pending" ? "Pending" : "Paid"}
                </IonText>
                {userRole === "Student" && (
                  <IonText className="text-sm text-textGreen">28/12/24</IonText>
                )}
              </button>
            ))}
          </div>
        </div>
      </PageMenu>
    </>
  );
};

export default BillingList;
