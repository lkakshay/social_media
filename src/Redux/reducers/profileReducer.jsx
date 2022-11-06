import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProfileDataAPI } from "../../api/apiCalls/profileApis";

const getProfileData = createAsyncThunk("api/profile/bio", async (name) => {
  return getProfileDataAPI(name)
    .then((res) => {
      return res
    })
    .catch((res) => {
      
    });
});

const profileInfoSlice = createSlice({
  name: "profile",
  initialState: {
    data: {},
  },

  extraReducers: {
    [getProfileData.fulfilled]: (state, { payload }) => {
      state.data=payload
    },
  },
});
export { getProfileData };
export default profileInfoSlice.reducer;
