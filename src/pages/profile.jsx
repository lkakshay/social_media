import { PostView } from "../components/postView";
import { Bio } from "../components/bio";
import { Container } from "@mui/system";
import { CreatePostInitialize } from "../components/addPostshow";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfilePosts } from "../Redux/reducers/profileReducer";
import { Box } from "@mui/material";

export const Profile = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loading = useSelector((state) => state.profile.loading);
  

  const load = () => {
    setPage(page + 1);
  };

  const client = useSelector((state) => state.user.data);
  const { username } = useParams();
  const dispatch = useDispatch();
  const {posts,totalpages} = useSelector((state) => state.profile);
  // console.log('toatalpages',posts);


  useEffect(() => {
    dispatch(getProfilePosts({ username, page }));
  }, [username, page]);


  useEffect(() => {
    if(page===totalpages)
    setHasMore(false)
  }, [totalpages,page]);
 
 
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
        {client?.username === username ? <CreatePostInitialize /> : <></>}
      </Container>
      <PostView hasMore={hasMore}  loading={loading} load={load} posts={posts} />
      <Box sx={{height:'40px'}}/>
    </Container>
  );
};
