import { IonText } from "@ionic/react";
import React, { FC } from "react";
import { Modal } from "../Modal";

export interface SelectRoomModalProps {
  closeModal: () => void;
  isOpen: boolean;
  onClickSelectRoom: (name: number) => void;
}

const SelectRoomModal: FC<SelectRoomModalProps> = ({
  closeModal,
  isOpen,
  onClickSelectRoom,
}) => {
  const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <Modal
      onDismiss={closeModal}
      isOpen={isOpen}
      onIonModalDidDismiss={closeModal}
      height="500px"
    >
      <div className="flex flex-col gap-y-3">
        <IonText className="text-lg font-semibold">Select Room</IonText>
        {rooms.map((item: any) => (
          <button
            className=" text-left border border-solid border-lightGrey py-3 px-2 pl-4 rounded text-sm cursor-pointer"
            onClick={() => onClickSelectRoom(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </Modal>
  );
};

export default SelectRoomModal;
