import { Box } from "@mui/system";
import "./home.css";
import { Addpost } from "../components/addPost";
import { Feed } from "../components/feee";
import { HomeHeaderSmallScreen } from "../components/homebarMobile";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-inner-container">
        <Box className="home-feed">
          <HomeHeaderSmallScreen/>
          <Addpost />
          <Feed/>
        </Box>
        <Box className="home-find"></Box>
      </div>
    </div>
  );
};
