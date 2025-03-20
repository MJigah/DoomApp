import React, { FC } from "react";
import { Modal } from "../Modal";
import { IonText } from "@ionic/react";

export interface SelectBlockModalProps {
  closeModal: () => void;
  isOpen: boolean;
  blocks: any;
  onClickSelectBlock: (name: string, line: string) => void;
}

const SelectBlockModal:FC<SelectBlockModalProps> = ({
  closeModal,
  isOpen,
  blocks,
  onClickSelectBlock,
}) => {
  return (
    <Modal
      onDismiss={closeModal}
      isOpen={isOpen}
      onIonModalDidDismiss={closeModal}
      height="500px"
    >
      <div className="flex flex-col gap-y-3">
        <IonText className="text-lg font-semibold">Select block</IonText>
        {blocks.map((item: any) => (
          <button
            className=" text-left border border-solid border-lightGrey py-3 px-2 rounded text-sm cursor-pointer"
            onClick={() => onClickSelectBlock(item.name, item.blockLines)}
          >
            {`${item.name} (${item.blockLines})`}
          </button>
        ))}
      </div>
    </Modal>
  );
};

export default SelectBlockModal;
