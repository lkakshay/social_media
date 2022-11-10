import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomePostsAPI, getPostsAPI } from "../../api/apiCalls/postApis";

const getPostData = createAsyncThunk("api/post/explore", async () => {
  return getPostsAPI()
    .then((res) => {
      return res;
    })
    .catch(() => {});
});

const getHomePostData = createAsyncThunk("api/post/home", async (page) => {
  return getHomePostsAPI(page)
    .then((res) => {
      return { res, page };
    })
    .catch((res) => {});
}
);

// const createAuthData = createAsyncThunk("api/register", async (data) => {
//   return onSignUpAPI(data)
//     .then((res) => {
//       return { token: res.token, msg: "success" };
//     })
//     .catch((res) => {
//       console.log("res", res);
//       if (("err", res.status === 422)) {
//         if (res.data.error.msg === "user already exist")
//           return { msg: "user already exist" };

//         return { msg: `invalid ${res.data.error.param}` };
//       }
//       return;
//     });
// });

const postInfoSlice = createSlice({
  name: "post",
  initialState: {
    explore: [],
    isLoading: false,
    home:[],
    totalpages:0
  },

  extraReducers: {
    [getPostData.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.explore = payload;
    },
    [getPostData.rejected]: (state) => {
      state.isLoading = false;
    },


    [getHomePostData.pending]: (state) => {
      state.isLoading = true;
    },
    [getHomePostData.fulfilled]: (state, { payload }) => {
      if(payload.page>1){
        return {
          ...state,
          home: [...state.home, ...payload.res.posts],
          isLoading:false
        };
      }
      else{
        console.log('payload[0]',payload.res.posts[0]);
        state.isLoading=false
        state.posts=payload.res.posts
        state.totalpages=payload.res.totalPages
      }
    },
    [getHomePostData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export { getPostData,getHomePostData};
export default postInfoSlice.reducer;
