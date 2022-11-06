import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import { MenuList } from "./menuList";

export const LeftBar = () => {

  const authStatus=useSelector((state=>state.auth.authStatus))
  return (
    <Container disableGutters sx={{ position: "fixed" }}>
      <Grid container sx={{ pr: 10 }}>
        <Grid item lg={2.5} xl={2.5}>
          {authStatus?<MenuList />:<></>}
          
        </Grid>
      </Grid>
    </Container>
  );
};
