import { apiMethod } from "../utils/constant";
import { request } from "./api";
import { API_URL } from "../env";

const enum url {
  root = `${API_URL}/request`,
  createRequest = `${url.root}/create`,
}

export interface CreateRequestProps {
  room: number;
  roomLine: string;
  fault: string;
  blockName: string;
  blockLine: string;
}

export const createRequest = (data: CreateRequestProps) => {
  return request(url.createRequest, data, apiMethod.POST);
};
