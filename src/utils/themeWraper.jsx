import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#11cb5f",
    },
    white: {
      main: "#ffffff",
    },
    black1: {
      main: "#191919",
    },
    
  },
});

export const ThemeWrap = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
