import { apiMethod } from "../utils/constant";
import { request } from "./api";
import { API_URL } from "../env";

const enum url {
  root = `${API_URL}/request`,
  createRequest = `${url.root}/create`,
  singleRequest = `${url.root}/single`,
  technician = `${url.root}/technician`,
  assignTechnician = `${url.root}/assign-technician`,
  myRequest = `${url.root}/my-request`,
}

export interface CreateRequestProps {
  room: number;
  roomLine: string;
  fault: string;
  blockName: string;
  blockLine: string;
}

export interface AssignTechnicianProps {
  requestId: string;
  technicianId: string;
}

export const createRequest = (data: CreateRequestProps) => {
  return request(url.createRequest, data, apiMethod.POST);
};

export const getRequests = () => {
  return request(url.root, {}, apiMethod.GET);
};

export const getSingleRequest = (id: string) => {
  return request(url.singleRequest, { id }, apiMethod.GET);
};

export const fetchTechnicians = () => {
  return request(url.technician, {}, apiMethod.GET);
};

export const assignTechnician = (data: AssignTechnicianProps) => {
  return request(url.assignTechnician, data, apiMethod.POST);
};

export const myRequest = () => {
  return request(url.myRequest, {}, apiMethod.GET);
};