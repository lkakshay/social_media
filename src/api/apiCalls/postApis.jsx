import { get, post, del, patch } from "../base_api";

export const addPostAPI = async (data) => {
  return await post("post/create", data);
};
export const getPostsByUserAPI = async (username,page) => {
  return await get("post/"+username+'/'+page);
};
export const getPostsAPI = async () => {
  return await get("post/explore");
};
export const getHomePostsAPI = async (page) => {
  return await get("post/home/"+page);
};

export const likePostAPI = async (post_id) => {
  return await post("post/like/"+post_id);
};
export const unLikePostAPI = async (post_id) => {
  return await del("post/like/"+post_id);
};

