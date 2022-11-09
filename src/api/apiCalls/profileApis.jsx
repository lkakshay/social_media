import { get, post, del, patch } from "../base_api";

export const getClientDataAPI = async () => {
  return await get("profile/client");
};
export const getProfileDataAPI = async (name) => {
  return await get("profile/bio/"+name);
};
export const editProfileDataAPI = async (data) => {
  return await patch("profile/bio",data);
};
export const followUserAPI = async (userId) => {
  return await post("profile/follow/"+userId);
};
export const unFollowUserAPI = async (userId) => {
  return await del("profile/follow/"+userId);
};