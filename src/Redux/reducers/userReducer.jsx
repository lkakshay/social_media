import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getClientDataAPI } from "../../api/apiCalls/profileApis";

const getClientData = createAsyncThunk("api/profile/client", async () => {
  return getClientDataAPI()
    .then((res) => {
      return res
    })
    .catch((res) => {
      
    });
});

const userInfoSlice = createSlice({
  name: "user",
  initialState: {
    data: {},
  },

  extraReducers: {
    [getClientData.fulfilled]: (state, { payload }) => {
      state.data=payload
    },
  },
});

export { getClientData };
export default userInfoSlice.reducer;
