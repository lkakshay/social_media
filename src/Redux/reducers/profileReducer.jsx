import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProfileDataAPI } from "../../api/apiCalls/profileApis";
import { getPostsByUserAPI } from "../../api/apiCalls/postApis";
import { CollectionsOutlined } from "@mui/icons-material";

const getProfileData = createAsyncThunk("api/profile/bio", async (name) => {
  return getProfileDataAPI(name)
    .then((res) => {
      
      return res;
    })
    .catch((res) => {});
});
const getProfilePosts = createAsyncThunk(
  "api/profile/posts",
  async ({ username, page }) => {
    return getPostsByUserAPI(username, page)
      .then((res) => {
        return { res, page };
      })
      .catch((res) => {});
  }
);

const profileInfoSlice = createSlice({
  name: "profile",
  initialState: {
    data: {},
    posts: [],
    loading: false,
    totalpages:0
  },

  extraReducers: {
    [getProfileData.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },

    [getProfilePosts.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getProfilePosts.fulfilled]: (state, { payload }) => {
      if(payload.page>1){
        return {
          ...state,
          posts: [...state.posts, ...payload.res.posts],
          loading:false
        };
      }

      else{

        state.loading=false
        state.posts=payload.res.posts
        state.totalpages=payload.res.totalpages
      }
      
    },
    [getProfilePosts.rejected]: (state) => {
      // state.loading = false;
    },
  },
});
export { getProfileData, getProfilePosts };
export default profileInfoSlice.reducer;
