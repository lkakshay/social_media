import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ChatIcon from "@mui/icons-material/Chat";
import WhatshotIcon from '@mui/icons-material/Whatshot';
export const BottomBar = () => {
  const [value, setValue] = React.useState("Home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bottom-bar">
      <BottomNavigation
        sx={{ width: "100%", position: "fixed", bottom: 0, left: 0, right: 0 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          value="Home"
          icon={<FeedOutlinedIcon fontSize="large" />}
        />
        <BottomNavigationAction
          value="TravelExploreIcon"
          icon={<TravelExploreIcon fontSize="large" />}
        />
        <BottomNavigationAction
          value="folder"
          icon={<WhatshotIcon fontSize="large" />}
        />
        <BottomNavigationAction
          value="ChatIcon"
          icon={<ChatIcon fontSize="large" />}
        />
      </BottomNavigation>
    </div>
  );
};
