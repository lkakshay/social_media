import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
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
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
