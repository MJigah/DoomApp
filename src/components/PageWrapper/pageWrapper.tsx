import { IonFooter, IonHeader, IonPage } from "@ionic/react";
import classNames from "classnames";
import React, { FC, ReactNode } from "react";

export interface PageWrapperProps
  extends Omit<React.HTMLAttributes<unknown>, "style" | "placeholder"> {
  headerComponent?: ReactNode;
  children: ReactNode;
  footerComponent?: ReactNode;
  headerClassName?: string;
  footerClassName?: string;
  className?: string;
}

const PageWrapper: FC<PageWrapperProps> = ({
  headerComponent,
  children,
  footerComponent,
  headerClassName,
  footerClassName,
  className,
  ...props
}) => {
  return (
    <IonPage className={classNames("px-3", className)} {...props}>
      {headerComponent && (
        <IonHeader className={headerClassName}>{headerComponent}</IonHeader>
      )}
      {children}
      {footerComponent && (
        <IonFooter className={classNames("flex", footerClassName)}>
          {footerComponent}
        </IonFooter>
      )}
    </IonPage>
  );
};

export default PageWrapper;
