import { PostView } from "../components/postView";
import { HomeHeaderSmallScreen } from "../components/homebarMobile";
import { Container } from "@mui/material";
import { CreatePost } from "../components/createPost";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useNavigate } from "react-router-dom";
import {IconButton} from "@mui/material";


export const Home = () => {

  const navigate=useNavigate()
  return (
    <Container disableGutters>
      <Container
        sx={{ display: { md: "none", lg: "none", xl: "none" }, mb: 10 }}
        disableGutters
      >
        <HomeHeaderSmallScreen 
        extra={
          <IconButton
                edge="end"
                size="large"
                color="white"
                aria-label="open drawer"
                onClick={()=>navigate('/addpost')}
              >
                <AddCircleOutlineRoundedIcon fontSize="large" />
              </IconButton>
        }/>
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
