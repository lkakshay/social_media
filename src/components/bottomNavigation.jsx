
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const BottomBar = () => {
  const [value, setValue] = useState("/");
  const navigate=useNavigate()
  const user=useSelector((state)=>state.user.data)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue)
  };

  return (
    <div className="bottom-bar">
      <BottomNavigation
        sx={{ width: "100%", position: "fixed", bottom: 0, left: 0, right: 0 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          value="/"
          icon={<FeedOutlinedIcon fontSize="large" />}
        />
        <BottomNavigationAction
          value="/explore"
          icon={<WhatshotIcon fontSize="large" />}
        />
        <BottomNavigationAction
          value="/search"
          icon={<TravelExploreIcon fontSize="large" />}
        />
        
        <BottomNavigationAction
          value={/profile/+user?.username}
          icon={<AccountCircleRoundedIcon fontSize="large" />}
        />
      </BottomNavigation>
    </div>
  );
};
