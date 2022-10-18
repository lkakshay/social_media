import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { MenuList } from "./menuList";

export const LeftBar = () => {
  return (
    <Container disableGutters sx={{ position: "fixed" }}>
      <Grid container gap={2} sx={{ pr: 10 }}>
        <Grid item lg={2.5} xl={2.5}>
          <MenuList />
        </Grid>
      </Grid>
    </Container>
  );
};
