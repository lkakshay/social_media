
import { ThemeWrap } from "./utils/themeWraper";
import { CssBaseline } from "@mui/material";
import { Layout } from "./components/layout";

function App() {
  return (
    <ThemeWrap>
      <CssBaseline>
        <Layout/>
      </CssBaseline>
    </ThemeWrap>

 

  );
}

export default App;
