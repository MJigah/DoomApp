import React, { useEffect, useState } from "react";
import { fetchBlocks } from "../../../service/room.service";
import { createRequest } from "../../../service/request.service";
import { useToast } from "../../../utils/useToast";
import usePush from "../../../utils/usePush";
import { MaintenanceRoutes } from "../../../layout/MaintenanceLayout/route";

const useMakeRequest = () => {
  const { errorToast, successToast } = useToast();
  const { push } = usePush();

  const [isOpen, setIsOpen] = useState(false);
  const [isRoomOpen, setIsRoomOpen] = useState(false);
  const [isLineOpen, setIsLineOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState({ name: "", line: "" });
  const [selectedLine, setSelectedLine] = useState("A");
  const [selectedRoom, setSelectedRoom] = useState(1);
  const [roomNumber, setRoomNumber] = useState("");
  const [description, setDescription] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const openRoomModal = () => {
    setIsRoomOpen(true);
  };
  const closeRoomModal = () => {
    setIsRoomOpen(false);
  };

  const openLineModal = () => {
    setIsLineOpen(true);
  };
  const closeLineModal = () => {
    setIsLineOpen(false);
  };

  const handleFetchBlocks = async () => {
    try {
      const { data } = await fetchBlocks();
      setBlocks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSelectBlock = (name: string, line: string) => {
    setSelectedBlock({ name, line });
    setIsOpen(false);
  };

  const onClickSelectRoom = (room: number) => {
    setSelectedRoom(room);
    setIsRoomOpen(false);
  };

  const onClickSelectLine = (line: string) => {
    setSelectedLine(line);
    setIsLineOpen(false);
  };

  useEffect(() => {
    handleFetchBlocks();
  }, []);

  const handleCreateNewRequest = async () => {
    setIsLoading(true);
    try {
      const reqData = {
        room: selectedRoom,
        roomLine: selectedLine,
        fault: description,
        blockName: selectedBlock.name,
        blockLine: selectedBlock.line,
      };
      await createRequest(reqData);
      push(MaintenanceRoutes.successRequest);
      successToast("Request successful!!");
    } catch (error: any) {
      console.log(error);
      errorToast(error.message);
    }
    setIsLoading(false);
  };

  return {
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
  };
};

export default useMakeRequest;
