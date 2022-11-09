import { postNoToken } from "../base_api";
import { get } from "../base_api";

export const onLoginAPI = async (data) => {
  return await postNoToken("login", data);
};

export const onSignUpAPI = async (data) => {
  return await postNoToken("register", data);
};

export const checkUserAPI = async () => {
  return await get("checkuser");
};
