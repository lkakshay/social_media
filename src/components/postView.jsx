import { Alert, Button, CircularProgress, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { Pagination } from "./pagination";
import { PostCard } from "./postCard";

export const PostView = ({ posts,scrollTop, loadtext,load, loading, hasMore }) => {

  return (
    <Container disableGutters sx={{ mt: 2 }}>
      {posts?.map((e) => {
        return <PostCard data={e} key={e.post._id} />;
      })}

      {!loading ? (
        <>
          {hasMore ? (
            <Pagination loadtext={loadtext} load={load} />
          ) : (
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
            <Alert sx={{color:'green'}} severity="success" variant="outlined">
             All posts have been viewed
            </Alert>
            <Button onClick={scrollTop} color='success' >back to top</Button>
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
