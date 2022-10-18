import { Container } from "@mui/material";
import { PostCard } from "./postCard";
export const PostView = () => {
  let array = [1, 2, 3, 4];
  return (
    <Container disableGutters sx={{mt:2}}>
      {array.map(() => {
        return <PostCard />;
      })}
    </Container>
  );
};
