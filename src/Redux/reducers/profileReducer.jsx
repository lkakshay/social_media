import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProfileDataAPI } from "../../api/apiCalls/profileApis";
import { getPostsByUserAPI } from "../../api/apiCalls/postApis";

const getProfileData = createAsyncThunk("api/profile/bio", async (name) => {
  console.log('name')
  return getProfileDataAPI(name)
    .then((res) => {
      return res;
    })
    .catch((res) => {});
});
const getProfilePosts = createAsyncThunk("api/profile/posts", async (name) => {
  return getPostsByUserAPI(name)
    .then((res) => {
      return res;
    })
    .catch((res) => {});
});

const profileInfoSlice = createSlice({
  name: "profile",
  initialState: {
    data: {},
    posts: [],
  },

  extraReducers: {
    [getProfileData.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
    [getProfilePosts.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
  },
});
export { getProfileData, getProfilePosts };
export default profileInfoSlice.reducer;
