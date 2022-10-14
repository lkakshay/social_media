import "./App.css";
import React from "react";
import { MainRoutes } from "./routes/mainRoute";
import { BottomBar } from "./components/bottomNavigation";
import { Navbar } from "./components/navbar";
import { useSelector } from "react-redux";

function App() {


  const authstatus = useSelector((state) => state.authReducer.authStatus);
  console.log(authstatus)
  return (
    <React.Fragment>
      {authstatus?<Navbar/>:<></>}
      <MainRoutes />
      {authstatus? <BottomBar />:<></>}
     
    </React.Fragment>
  );
}

export default App;
