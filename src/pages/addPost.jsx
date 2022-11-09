import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { CreatePost } from "../components/createPost";
import { HomeHeaderSmallScreen } from "../components/homebarMobile";

export const AddPost = () => {
  return (
    <Container disableGutters>
      <Container
        sx={{ display: { md: "none", lg: "none", xl: "none" }, mb: 10 }}
        disableGutters
      >
        <HomeHeaderSmallScreen extra={<></>} />
      </Container>
      <CreatePost />
      < Box sx={{height:'60px'}}/>
    </Container>
  );
};
