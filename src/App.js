import { ThemeWrap } from "./utils/themeWraper";
import { CssBaseline } from "@mui/material";
import { Layout } from "./components/layout";
import { getPostsByUserAPI } from "./api/apiCalls/postApis";


function App() {
  // getPostsByUserAPI('test@gmail.com').then((res)=>console.log('res',res))
  return (
    <ThemeWrap>
      <CssBaseline>
        <Layout />
      </CssBaseline>
    </ThemeWrap>
  );
}

export default App;
