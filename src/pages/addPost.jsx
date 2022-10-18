import { Container } from "@mui/system";
import { Link } from "react-router-dom";
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
      <Link style={{ color: "green" ,padding:'20px'}} to={"/"}>
        {"<< back"}
      </Link>
    </Container>
  );
};
