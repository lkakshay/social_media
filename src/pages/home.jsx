import { PostView } from "../components/postView";
import { HomeHeaderSmallScreen } from "../components/homebarMobile";
import { Box, CircularProgress, Container, Stack } from "@mui/material";
import { CreatePost } from "../components/createPost";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useNavigate } from "react-router-dom";
import {IconButton} from "@mui/material";
import { CreatePostInitialize } from "../components/addPostshow";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHomePostData } from "../Redux/reducers/PostReducer";


export const Home = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { home, totalPages,isLoading } = useSelector((state) => state.post);


  const load = () => {
    setPage(page + 1);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };


  useEffect(() => {
    dispatch(getHomePostData(page));
    
  }, [page]);
  useEffect(() => {
    if (page === totalPages) setHasMore(false);
  }, [totalPages, page]);
  return (
    <Container disableGutters >
      <Container
        sx={{ display: { md: "none", lg: "none", xl: "none" }, mb: 10 }}
        disableGutters
      >
        <HomeHeaderSmallScreen 
        extra={
          <IconButton
                edge="end"
                size="large"
                color="white"
                aria-label="open drawer"
                onClick={()=>navigate('/addpost')}
              >
                <AddCircleOutlineRoundedIcon fontSize="large" />
              </IconButton>
        }/>
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
        <CreatePostInitialize />
      </Container>


        <PostView
          hasMore={hasMore}
          loadtext="load more"
          loading={isLoading}
          load={load}
          posts={home}
          scrollTop={scrollTop}
        />

    <Box sx={{ height: "40px" }} />
    </Container>
  );
};
