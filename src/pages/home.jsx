
import "./home.css";
import { Feed } from "../components/PostView";
import { HomeHeaderSmallScreen } from "../components/HomebarMobile";
import { Layout } from "../components/Layout";
import { Container } from "@mui/material";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <Container maxWidth="lg">
      <Layout left={
        <div>left</div>
      } right={<div>right</div>}></Layout>
    </Container>
  );
};
