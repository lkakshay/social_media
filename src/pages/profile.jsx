import { Box } from "@mui/system";
import { CreatePost } from "../components/createPost";
import { PostView } from "../components/postView";
import { Bio } from "../components/bio";
import { Container } from "@mui/system";

export const Profile = () => {
  return (
    <Container disableGutters>
      <Container
        sx={{ display: {sm:"none", md: "none", lg: "none", xl: "none" }, mb: 10 }}
        disableGutters
      >
        <Bio />
      </Container>
      <Container
        sx={{
          display: {
            xs: "none",
            sm: "none",
            lg: "block",
            xl: "block",
          },
        }}
        disableGutters
      >
      <CreatePost />
      </Container>

      <PostView />
    </Container>
  );
};
