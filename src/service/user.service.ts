import { apiMethod } from "../utils/constant";
import { request } from "./api";
import { API_URL } from "../env";

const enum url {
  root = `${API_URL}/user`,
  login = `${url.root}/login`,
  register = `${url.root}/register`,
  updateRole = `${url.root}/update-role`,
}

export interface LoginRequestProps {
  fullName: string;
  password: string;
}

export const login = (data: LoginRequestProps) => {
  return request(url.login, data, apiMethod.POST);
};

export const updateUserRole = (data: { role: string }) => {
  return request(url.updateRole, data, apiMethod.PATCH);
};
