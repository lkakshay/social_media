import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";
import profileReducer from "../reducers/profileReducer";
const key = process.env.REACT_APP_LOCALSTORAGE_KEY;

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem(key, JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem(key) !== null) {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user:userReducer,
    profile:profileReducer
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
