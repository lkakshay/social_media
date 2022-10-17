import "./App.css";
import React from "react";
import { MainRoutes } from "./routes/mainRoute";
import { BottomBar } from "./components/bottomNavigation";
import { Navbar } from "./components/navbar";
import { useSelector } from "react-redux";
import { ThemeWrap } from "./utils/themeWraper";
function App() {
  const authstatus = useSelector((state) => state.authReducer.authStatus);
  return (
    <React.Fragment>
      <ThemeWrap>
        {authstatus ? <Navbar /> : <></>}
        <MainRoutes />
        {authstatus ? <BottomBar /> : <></>}
      </ThemeWrap>
    </React.Fragment>
  );
}

export default App;
