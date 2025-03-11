import { Storage } from "@ionic/storage";

const store = new Storage();
const storage = await store.create();

export interface StorageUserDataProps {
  fullName: string;
  email: string;
  role: string;
}

export const setUserLogin = async () => {
  await storage.set("isUserLoggedIn", String(true));
};

export const setUserLogOut = async () => {
  await storage.remove("isUserLoggedIn");
};

export const getUserLogin = async () => {
  const isUserLoggedIn = (await storage.get("isUserLoggedIn")) === "true";

  if (isUserLoggedIn) return isUserLoggedIn;
  else return null;
};

export async function getToken() {
  const token = await storage.get("userToken");

  if (token) return token;
  else return null;
}

export async function getUser() {
  const userStr = await storage.get("zippyUser");
  const parsedUserData: StorageUserDataProps = JSON.parse(userStr as string);
  if (userStr) return parsedUserData;
  else return null;
}

export async function getLoginTime() {
  const loginTime = await storage.get("loginTime");

  if (loginTime) return loginTime;
  else return null;
}

export const setToken = (token: string) => {
  storage.remove("userToken");
  storage.set("userToken", token);
};

export const setUserSession = async (token: string, user: any) => {
  await storage.set("userToken", token);
  await storage.set("zippyUser", JSON.stringify(user));
};

export const setUser = (user: StorageUserDataProps) => {
  storage.remove("zippyUser");
  storage.set("zippyUser", JSON.stringify(user));
};

export const removeUserSession = () => {
  storage.remove("userToken");
  storage.remove("zippyUser");
};

export const setDontShowIntro = async (data: any) => {
  await storage.set("dontShowzippyIntro", data);
};

export const dontShowIntro = async () => {
  const result = await storage.get("dontShowzippyIntro");

  if (result) return result;
  else return null;
};

export const convertBlobToBase64 = (blob: Blob) => {
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export const splitHyphens = (str: string) => {
  return str.split("-").join(" ");
};

export const capitalizeFirstLetters = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const truncateAddress = (address: string) => {
  if (address.length <= 10) {
    return address;
  }
  const firstPart = address.substring(0, 4);
  const lastPart = address.substring(address.length - 4);
  const middlePart = "...";
  return firstPart + middlePart + lastPart;
};

export const setDeviceTheme = async (data: "light" | "dark") => {
  await storage.set("deviceTheme", data);
};

export const getDeviceTheme = async () => {
  const deviceTheme: "light" | "dark" = await storage.get("deviceTheme");
  return deviceTheme;
};

export const removeDeviceTheme = async () => {
  await storage.remove("deviceTheme");
};

export const appendQueryParams = (
  url: string,
  params: Record<string, any>
): string => {
  const queryString = Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&");

  return queryString ? `${url}?${queryString}` : url;
};

export const containsCapitalOrNumber = (str: string) => {
  // Check if the string contains at least one capital letter or a number
  const regex = /[A-Z0-9]/;
  return regex.test(str);
};

export const setUserRole = (role: string) => {
  storage.remove("userRole");
  storage.set("userRole", role);
};

export const removeUserRole = async () => {
  await storage.remove("userRole");
};

export async function getUserRole() {
  const userRole = await storage.get("userRole");
  if (userRole) return userRole;
  else return null;
}
