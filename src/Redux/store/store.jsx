import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["authReducer"]
};

const userPersistConfig = {
  key: "user",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
 
  authReducer: persistReducer(userPersistConfig, authReducer),

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
