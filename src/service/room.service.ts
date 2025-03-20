import { apiMethod } from "../utils/constant";
import { request } from "./api";
import { API_URL } from "../env";

const enum url {
  root = `${API_URL}/rooms`,
  block = `${API_URL}/block`,
  singleBlock = `${url.block}/single`,
  allRooms = `${url.root}/all`,
}

export const fetchRoomOverview = () => {
  return request(url.root, {}, apiMethod.GET);
};

export const fetchBlocks = () => {
  return request(url.block, {}, apiMethod.GET);
};

export const singleBlock = (data: { blockId: string }) => {
  return request(url.singleBlock, data, apiMethod.GET);
};

export const fetchAllRooms = () => {
  return request(url.allRooms, {}, apiMethod.GET);
};
