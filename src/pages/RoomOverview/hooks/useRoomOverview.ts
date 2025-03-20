import React, { useEffect, useState } from "react";
import { fetchRoomOverview } from "../../../service/room.service";
import { RoomRoutes } from "../../../layout/RoomLayout/route";
import usePush from "../../../utils/usePush";

const useRoomOverview = () => {
  const { push } = usePush();
  const [roomCount, setRoomCount] = useState({
    vacant: 0,
    filled: 0,
    total: 0,
  });

  const navigateToTotalRooms = () => {
    push(RoomRoutes.total);
  };
  const getRoomOverview = async () => {
    try {
      const { data } = await fetchRoomOverview();
      const { vacantRooms, filledRooms } = data;
      setRoomCount({
        vacant: vacantRooms,
        filled: filledRooms,
        total: vacantRooms + filledRooms,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoomOverview();
  }, []);

  return { roomCount, navigateToTotalRooms };
};

export default useRoomOverview;
