import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";
import profileReducer from "../reducers/profileReducer";
const key = process.env.REACT_APP_LOCALSTORAGE_KEY;

const localStorageMiddleware = () => 
(next) => (action) => {
    if (action.payload?.token)
    localStorage.setItem(key, JSON.stringify(action.payload.token));
    return next(action)
  };


  const reHydrateStore = () => {

    try {
      const data = localStorage.getItem(key);
      if (data === null) {
        return {};
      }
       const token=JSON.parse(data);
       return{ auth:{authStatus:true,token:token}}
    } catch (err) {
      return {}
    }
  };

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    profile: profileReducer,
  },
  preloadedState:reHydrateStore(),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
