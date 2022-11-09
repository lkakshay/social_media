import { ThemeWrap } from "./utils/themeWraper";
import { CssBaseline } from "@mui/material";
import { Layout } from "./components/layout";
import { useEffect } from "react";
import { checkUser } from "./Redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";


function App() {

 const a= useSelector((s)=>s.auth.authStatus)

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(checkUser())
  },[])
  return (
    <ThemeWrap>
      <CssBaseline>
        <Layout />
      </CssBaseline>
    </ThemeWrap>
  );
}

export default App;
