import { Grid } from "@mui/material";
import { Navbar } from "./Navbar";
import { BottomBar } from "./BottomNavigation";

export const Layout = ({ left, right }) => {
  return (
    <Grid container spacing={0}>
      <Grid
        item
        lg={12}
        md={12}
        xl={12}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <Navbar />
      </Grid>

      <Grid item xs={12} sm={12} md={8} lg={8}>
        {left}
      </Grid>
      <Grid
        item
        md={4}
        lg={4}
        xl={4}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
          },
        }}
      >
        right
        {right}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        sx={{
          display: {
            lg: "none",
            md: "none",
            xl: "none",
          },
        }}
      >
        <BottomBar />
      </Grid>
    </Grid>
  );
};
