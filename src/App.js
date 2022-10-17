import { MainRoutes } from "./routes/mainRoute";
import { ThemeWrap } from "./utils/themeWraper";
import { CssBaseline } from "@mui/material";
function App() {
  return (
    <ThemeWrap>
      <CssBaseline>
        <MainRoutes />
      </CssBaseline>
    </ThemeWrap>
  );
}

export default App;
