import { Grid } from "@mui/material";
import { Navbar } from "./navbar";
import { BottomBar } from "./bottomNavigation";
import { MainRoutes } from "../routes/MainRoute";
import { Container } from "@mui/system";
import { LeftBar } from "./leftBar";
import { RightBar } from "./RightBar";

export const Layout = () => {
  return (
    <Container disableGutters maxWidth='lg' >
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
          mb:2
        }}
      >
       <Navbar/>
      </Grid>
      <Grid
        item
        lg={2.5}
        xl={2.5}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
          },pr:2,
          
        }}
      >
    
        <LeftBar/>
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={6} xl={6}>
        <MainRoutes/>
      </Grid>
      <Grid
        item
        md={4}
        lg={3.5}
        xl={3.5}
        sm={5}
        sx={{
          display: {
            xs: "none",
            sm: "block",
            md: "block",
            lg: "block",
          },pl:2,
        }}
      >
      <RightBar/>
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
    </Container>
  );
};
