import { FC, ReactNode } from "react";

import { createAnimation, IonModal } from "@ionic/react";

import classNames from "classnames";

import "./modal.css";
import { IonicReactProps } from "@ionic/react/dist/types/components/IonicReactProps";
import type { JSX } from "@ionic/core/components";

export type IonModalProps = JSX.IonModal &
  Omit<React.HTMLAttributes<HTMLIonModalElement>, "style" | "placeholder"> &
  IonicReactProps &
  React.RefAttributes<HTMLIonModalElement>;

export interface ModalProps extends IonModalProps {
  children?: ReactNode;
  className?: string;
  onDismiss?: () => void;
  id?: string;
  height?: number | string;
  anchorPosition?: "top" | "bottom";
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  canDismiss = true,
  height = "30vh",
  anchorPosition = "bottom",
  onDismiss,
  ...props
}) => {
  const contentPosition = {
    top: "items-start",
    bottom: "items-end",
  };

  const enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot || document.createElement("div");

    const backdropAnimation = createAnimation()
      .addElement(root.querySelector("ion-backdrop")!)
      .fromTo("opacity", "0.01", "var(--backdrop-opacity)");

    const wrapperAnimation = createAnimation()
      .addElement(root.querySelector(".modal-wrapper")!)
      .keyframes([
        {
          offset: 0,
          opacity: "0",
          transform: `translateY(${
            anchorPosition === "top" ? "-100%" : "100%"
          })`,
        },
        { offset: 1, opacity: "0.99", transform: "translateY(0) " },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing("ease-out")
      .duration(200)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: HTMLElement) => {
    return enterAnimation(baseEl).direction("reverse");
  };

  return (
    <IonModal
      className={classNames(
        "flex ",
        contentPosition[anchorPosition],
        className
      )}
      style={{ "--max-height": height }}
      canDismiss={canDismiss}
      enterAnimation={enterAnimation}
      leaveAnimation={leaveAnimation}
      onIonModalDidDismiss={onDismiss}
      {...props}
    >
      <div className="ion-padding modal-content h-full overflow-y-auto">
        {children}
      </div>
    </IonModal>
  );
};
