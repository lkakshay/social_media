import { Container } from "@mui/system"
import { PostCard } from "../components/postCard";
let array = [1, 2, 3, 4,5,6,7];

export const Explore=()=>{
    return(
        <Container disableGutters >
             {array.map((i) => {
        return <PostCard key={i} />;
      })}
        </Container>
    )
}