import { postNoToken } from "../base_api";

export const onLoginAPI = async (data) => {
  return await postNoToken("login", data);
};


export const onSignUpAPI = async (data) => {
    return await postNoToken("register", data);
  };
  