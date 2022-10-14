import { Box } from "@mui/system";
import "./home.css";
import { Addpost } from "../components/addPost";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-inner-container">
       <Box className='home-feed' >
        <Addpost/>
       </Box >
       <Box className='home-find' >
        
       </Box>
      </div>
    </div>
  );
};
