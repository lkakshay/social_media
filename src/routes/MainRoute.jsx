import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { LoginSignup } from "../pages/loginSignup";
import { AddPost } from "../pages/addPost";
import { Profile } from "../pages/profile";
import { Explore } from "../pages/explore";
import { ReqAuth } from "./protectedRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getClientData } from "../Redux/reducers/userReducer";

export const MainRoutes = () => {

  const authStatus=useSelector((state=>state.auth.authStatus))
  const dispatch=useDispatch()

  useEffect(()=>{
    if(authStatus){
      dispatch(getClientData())
    }
  },[authStatus])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReqAuth>
            <Home />
          </ReqAuth>
        }
      />
      <Route path="/loginsignup" element={<LoginSignup />} />
      <Route
        path="/addpost"
        element={
          <ReqAuth>
            <AddPost />
          </ReqAuth>
        }
      />
      <Route
        path="/explore"
        element={
          <ReqAuth>
            <Explore />
          </ReqAuth>
        }
      />
      <Route
        path="/profile/:username"
        element={
          <ReqAuth>
            <Profile />
          </ReqAuth>
        }
      />
    </Routes>
  );
};
