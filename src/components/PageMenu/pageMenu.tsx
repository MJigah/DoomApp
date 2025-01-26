import React, { ReactNode } from "react";
import SideMenu from "../SideMenu/sideMenu";
import { IonContent, IonFooter, IonHeader, IonMenuToggle } from "@ionic/react";
import MenuOpen from "../../assets/svg/menu.svg?react";
import PageWrapper from "../PageWrapper/pageWrapper";

const PageMenu = ({
  children,
  pageClassName,
  footerClassName,
  menuComponent,
  footerComponent,
}: {
  children?: ReactNode;
  pageClassName?: string;
  footerClassName?: string;
  menuComponent?: ReactNode;
  footerComponent?: ReactNode;
}) => {
  return (
    <>
      <SideMenu />
      <PageWrapper id="main-content" className={pageClassName}>
        <IonHeader className="py-5">
          <IonMenuToggle>
            {menuComponent || <MenuOpen className="text-darkBlue" />}
          </IonMenuToggle>
        </IonHeader>
        <IonContent>{children}</IonContent>
        {!!footerComponent && (
          <IonFooter className={footerClassName}>{footerComponent}</IonFooter>
        )}
      </PageWrapper>
    </>
  );
};

export default PageMenu;
