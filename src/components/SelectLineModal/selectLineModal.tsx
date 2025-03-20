import { IonText } from "@ionic/react";
import React, { FC } from "react";
import { Modal } from "../Modal";

export interface SelectLineModalProps {
  closeModal: () => void;
  isOpen: boolean;
  onClickSelectLine: (name: string) => void;
}

const SelectLineModal: FC<SelectLineModalProps> = ({
  closeModal,
  isOpen,
  onClickSelectLine,
}) => {
  return (
    <Modal
      onDismiss={closeModal}
      isOpen={isOpen}
      onIonModalDidDismiss={closeModal}
      height="300px"
    >
      <div className="flex flex-col gap-y-3">
        <IonText className="text-lg font-semibold">Select Room Line</IonText>
        {["A", "B", "C", "D", "E", "F"].map((item: any) => (
          <button
            className=" text-left py-3 px-2 rounded text-sm cursor-pointer"
            onClick={() => onClickSelectLine(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </Modal>
  );
};

export default SelectLineModal;
