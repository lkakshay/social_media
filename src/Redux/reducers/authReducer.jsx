import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../api/config";

const postAuthData = createAsyncThunk("api/login", async (data) => {
  return API.post("login", data)
    .then((res) => {
      res.data.status = 200;
      return res.data;
    })
    .catch(() => {
      const payload = { status: 401 };
      return payload;
    });
});

const createAuthData = createAsyncThunk("api/register", async (data) => {
  return API.post("register", data)
    .then(() => {
      return "success";
    })
    .catch((err) => {
      if (("err", err.response.status === 422)) {
        if (err.response.data.error.msg === "user already exist")
          return "user already exist";

        return `invalid ${err.response.data.error.param}`;
      }
      return;
    });
});

const authInfoSlice = createSlice({
  name: "auth",
  initialState: {
    authStatus: true,
    userData: {},
    isLoading: false,
    isError: false,
  },

  extraReducers: {
    [createAuthData.pending]: (state) => {
      state.isLoading = true;
    },
    [createAuthData.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createAuthData.rejected]: (state) => {
      state.isLoading = false;
    },
    [postAuthData.pending]: (state) => {
      state.isLoading = true;
    },
    [postAuthData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      if (payload.status === 200) {
        state.authStatus = true;
        state.userData.username = payload.name;
        state.userData.token = payload.token;
        
      }
    },
    [postAuthData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export { postAuthData, createAuthData };
export default authInfoSlice.reducer;


