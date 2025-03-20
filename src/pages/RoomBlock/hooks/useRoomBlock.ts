import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { singleBlock } from "../../../service/room.service";

const useRoomBlock = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const blockId = queryParams.get("blockId") || "";
  const [rooms, setRooms] = useState<any>([]);

  const fetchBlockRooms = async () => {
    try {
      const { data } = await singleBlock({ blockId });
      console.log(data);
      setRooms(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlockRooms();
  }, []);
  return { rooms };
};

export default useRoomBlock;
