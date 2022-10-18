import { PostView } from "../components/postView";
import { Bio } from "../components/bio";
import { Container } from "@mui/system";
import { CreatePostInitialize } from "../components/addPostshow";

export const Profile = () => {
  return (
    <Container disableGutters>
      <Container
        sx={{
          display: { sm: "none", md: "none", lg: "none", xl: "none" },
          mb: 10,
        }}
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
        <CreatePostInitialize />
      </Container>

      <PostView />
    </Container>
  );
};
