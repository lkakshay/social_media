import {  get, post, del, patch } from "../base_api";

export const addPostAPI = async (data) => {
    return await post("post/create",data);
  };