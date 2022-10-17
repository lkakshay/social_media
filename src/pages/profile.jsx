import "./profile.css";
import { Box } from "@mui/system";
import { CreatePost } from "../components/CreatePost";
import { Feed } from "../components/PostView";
import { Bio } from "../components/bio";
import { HomeHeaderSmallScreen } from "../components/HomebarMobile";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-inner-container">
        <Box className="profile-feed">
          <div className="profile-mibile-bio">
            <HomeHeaderSmallScreen />
            <Bio />
          </div>

          <CreatePost />
          <Feed />
        </Box>
        <Box className="profile-find">
          <Bio />
        </Box>
      </div>
    </div>
  );
};
