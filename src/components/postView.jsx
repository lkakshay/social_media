import { Alert, CircularProgress, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { Pagination } from "./pagination";
import { PostCard } from "./postCard";

export const PostView = ({ posts, load, loading, hasMore }) => {
  return (
    <Container disableGutters sx={{ mt: 2 }}>
      {posts?.map((e) => {
        return <PostCard data={e} key={e._id} />;
      })}

      {!loading ? (
        <>
          {hasMore ? (
            <Pagination load={load} />
          ) : (
            <Stack direction="row" justifyContent="center" alignItems="center">
            <Alert sx={{color:'green'}} severity="success" variant="outlined">
             All posts have been viewed
            </Alert>
            </Stack>
          )}
        </>
      ) : (
        <></>
      )}

      <Stack direction="row" justifyContent="center" alignItems="center">
        {loading ? <CircularProgress /> : <></>}
      </Stack>

      <div style={{ height: "40px" }}></div>
    </Container>
  );
};
