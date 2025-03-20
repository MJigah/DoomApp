import React from "react";
import PageMenu from "../../components/PageMenu/pageMenu";
import Back from "../../assets/svg/BackArrow.svg?react";
import {
  IonButton,
  IonIcon,
  IonInput,
  IonText,
  IonTextarea,
} from "@ionic/react";
import ChevronDown from "../../assets/svg/chevronDown.svg?react";
import ChevronUp from "../../assets/svg/chevronUp.svg?react";
import useMakeRequest from "./hooks/useMakeRequest";
import { Modal } from "../../components/Modal";
import SelectBlockModal from "../../components/SelectBlockModal/selectBlockModal";
import SelectRoomModal from "../../components/SelectRoomModal/selectRoomModal";
import SelectLineModal from "../../components/SelectLineModal/selectLineModal";
import Loader from "../../components/Loader/loader";

const MakeRequest = () => {
  const {
    isOpen,
    openModal,
    closeModal,
    blocks,
    onClickSelectBlock,
    selectedBlock,
    roomNumber,
    description,
    setRoomNumber,
    setDescription,
    onClickSelectRoom,
    onClickSelectLine,
    isRoomOpen,
    isLineOpen,
    selectedLine,
    selectedRoom,
    openRoomModal,
    closeRoomModal,
    openLineModal,
    closeLineModal,
    handleCreateNewRequest,
    isLoading,
  } = useMakeRequest();

  return (
    <>
      <PageMenu
        pageClassName="room-overview-page"
        menuComponent={
          <div className="flex flex-row gap-x-3">
            <Back className="text-black" />
            <IonText className="font-semibold text-lg">
              Maintenance Request
            </IonText>
          </div>
        }
        footerClassName="pb-4"
        footerComponent={
          <IonButton className="w-full mt-16" onClick={handleCreateNewRequest}>
            <Loader displayText="Send" loading={isLoading} />
          </IonButton>
        }
      >
        <div className="py-1">
          <div className="flex flex-col gap-y-4">
            <button
              className="border border-solid border-lightBlack py-3  px-2 rounded text-left flex flex-row items-center justify-between"
              onClick={openModal}
            >
              {selectedBlock.name
                ? `${selectedBlock.name}(${selectedBlock.line})`
                : "Select Block"}
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="flex flex-row gap-x-3">
              <button
                className="flex-1 border border-solid border-lightBlack py-3  px-2 rounded text-left flex flex-row items-center justify-between"
                onClick={openRoomModal}
              >
                {selectedRoom ? selectedRoom : "Enter room number"}
                <ChevronDown className="h-4 w-4" />
              </button>
              <button
                className="flex-1 border border-solid border-lightBlack py-3  px-2 rounded text-left flex flex-row items-center justify-between"
                onClick={openLineModal}
              >
                {selectedLine ? selectedLine : "Enter room line"}
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <IonInput
              placeholder="Enter description"
              value={description}
              onIonChange={(e: any) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </PageMenu>
      <SelectBlockModal
        closeModal={closeModal}
        isOpen={isOpen}
        blocks={blocks}
        onClickSelectBlock={onClickSelectBlock}
      />
      <SelectRoomModal
        closeModal={closeRoomModal}
        isOpen={isRoomOpen}
        onClickSelectRoom={onClickSelectRoom}
      />
      <SelectLineModal
        closeModal={closeLineModal}
        isOpen={isLineOpen}
        onClickSelectLine={onClickSelectLine}
      />
    </>
  );
};

export default MakeRequest;
