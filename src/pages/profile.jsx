import "./profile.css";
import { Box } from "@mui/system";
import { Addpost } from "../components/addPost";
import { Feed } from "../components/feee";
import { Bio } from "../components/bio";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-inner-container">
        <Box className="profile-feed">
          <Addpost />
          <Feed />
        </Box>
        <Box className="profile-find">
          <Bio />
        </Box>
      </div>
    </div>
  );
};
