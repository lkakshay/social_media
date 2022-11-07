import { Container } from "@mui/material";
import { PostCard } from "./postCard";
export const PostView = ({posts}) => {


  return (
    <Container disableGutters sx={{mt:2}}>
      {posts?.map((e) => {
        return <PostCard data={e} key={e._id} />;
      })}
    </Container>
  );
};
