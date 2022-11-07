import { PostView } from "../components/postView";
import { Bio } from "../components/bio";
import { Container } from "@mui/system";
import { CreatePostInitialize } from "../components/addPostshow";
import {  useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProfilePosts } from "../Redux/reducers/profileReducer";

export const Profile = () => {

  const client = useSelector((state) => state.user.data);
  const { username } = useParams();
  const dispatch=useDispatch()
  const data=useSelector((state) => state.profile.posts)
  useEffect(()=>{
   dispatch(getProfilePosts(username)) 
  },[username])
  return (
    <Container disableGutters>
      <Container
        sx={{
          display: { sm: "none", md: "none", lg: "none", xl: "none" },
          mb: 10,
        }}
        disableGutters
      >
        <Bio />
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
      {client.username===username? <CreatePostInitialize />:<></>}
      </Container>

      <PostView posts={data} />
    </Container>
  );
};
