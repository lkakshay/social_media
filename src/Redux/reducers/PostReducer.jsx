import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onSignUpAPI, onLoginAPI } from "../../api/apiCalls/authApis";

const postAuthData = createAsyncThunk("api/login", async (data) => {
  return onLoginAPI(data)
    .then((res) => {
      res.status = 200;
      return res;
    })
    .catch(() => {
      const payload = { status: 401 };
      return payload;
    });
});

const createAuthData = createAsyncThunk("api/register", async (data) => {
  return onSignUpAPI(data)
    .then((res) => {
      return { token: res.token, msg: "success" };
    })
    .catch((res) => {
      console.log("res", res);
      if (("err", res.status === 422)) {
        if (res.data.error.msg === "user already exist")
          return { msg: "user already exist" };

        return { msg: `invalid ${res.data.error.param}` };
      }
      return;
    });
});

const authInfoSlice = createSlice({
  name: "post",
  initialState: {
    authStatus: false,
    isLoading: false,
    isError: false,
    token: null,
  },
  reducers: {
    logout: (state) => {
      state.authStatus = false;
      state.token = null;
    },
  },

  extraReducers: {
    [createAuthData.pending]: (state) => {
      state.isLoading = true;
    },
    [createAuthData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.authStatus = true;
      state.token = payload.token;
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
        state.token = payload.token;
      }
    },
    [postAuthData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { logout } = authInfoSlice.actions;
export { postAuthData, createAuthData };
export default authInfoSlice.reducer;
