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

export interface RegisterRequestProps extends LoginRequestProps {
  email: string;
  role: string;
}

export const login = (data: LoginRequestProps) => {
  return request(url.login, data, apiMethod.POST);
};

export const register = (data: RegisterRequestProps) => {
  return request(url.register, data, apiMethod.POST);
};

export const updateUserRole = (data: { role: string }) => {
  return request(url.updateRole, data, apiMethod.PATCH);
};

export const getUserData = () => {
  return request(url.root, {}, apiMethod.GET);
};
