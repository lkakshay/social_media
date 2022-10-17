import { Box } from "@mui/system";
import "./home.css";
import { Addpost } from "../components/addPost";
import { Feed } from "../components/PostView";
import { HomeHeaderSmallScreen } from "../components/HomebarMobile";
import { Layout } from "../components/Layout";
import { Container } from "@mui/material";
import { Navbar } from "../components/Navbar";

export const Home = () => {


  return (

    <Container>
      <Layout left={<div style={{width:'100%',height:'300px',border:'2px solid black'}} >left</div>} right={<div>right</div>} >
        
      </Layout>
    </Container>
    // <div className="home">
    //   <div className="home-inner-container">
    //     <Box className="home-feed">
    //       <HomeHeaderSmallScreen/>
    //       <Addpost />
    //       <Feed/>
    //     </Box>
    //     <Box className="home-find"></Box>
    //   </div>
    // </div>
  );
};
