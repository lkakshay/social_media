import { Box, CircularProgress, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostView } from "../components/postView";
import { getPostData } from "../Redux/reducers/PostReducer";


export const Explore = () => {
  const dispatch = useDispatch();

  const { explore, isLoading } = useSelector((state) => state.post);


  useEffect(() => {
    dispatch(getPostData());
  }, []);

  const load = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    dispatch(getPostData());
  };

  return (
    <Container disableGutters>
      {isLoading ? (
        <Stack sx={{mt:"100px"}} direction="row" justifyContent="center" alignItems="center">
         <CircularProgress /> 
      </Stack>
      ) : (
        <PostView
          hasMore={true}
          loadtext="refresh"
          loading={false}
          load={load}
          posts={explore}
        />
      )}
      <Box sx={{ height: "40px" }} />
    </Container>
  );
};
