import { get, post, del, patch } from "../base_api";

export const addPostAPI = async (data) => {
  return await post("post/create", data);
};
export const getPostsByUserAPI = async (username,page) => {
  return await get("post/"+username+'/'+page);
};
