import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { LoginSignup } from "../pages/loginSignup";
import { AddPost } from "../pages/addPost";
import { Profile } from "../pages/profile";
import { Explore } from "../pages/explore";
import { ReqAuth } from "./protectedRoutes";

export const MainRoutes = () => {
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
