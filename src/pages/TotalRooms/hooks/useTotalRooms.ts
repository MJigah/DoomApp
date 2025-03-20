import React, { useEffect, useState } from "react";
import { fetchBlocks } from "../../../service/room.service";
import usePush from "../../../utils/usePush";
import { RoomRoutes } from "../../../layout/RoomLayout/route";
import { appendQueryParams } from "../../../utils/helper";

const useTotalRooms = () => {
  const [blocks, setBlocks] = useState([]);
  const { push } = usePush();
  const getBlocks = async () => {
    const { data } = await fetchBlocks();
    console.log(data);
    setBlocks(data);
  };

  const navigateToRoomsList = (id: string) => {
    push(appendQueryParams(RoomRoutes.block, { blockId: id }));
  };

  useEffect(() => {
    getBlocks();
  }, []);
  return { blocks, navigateToRoomsList };
};

export default useTotalRooms;
