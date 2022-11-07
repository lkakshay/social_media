import { Avatar, Container, TextField } from "@mui/material";

import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const CreatePostInitialize = () => {
  const navigate = useNavigate();

  const userData=useSelector((state)=>state.user.data)
  return (
    <Container disableGutters sx={{ border: ".1px solid black", p: 2 }}>
      <Stack justifyContent="space-between" gap={2} direction="row">
      {userData.profilePic?<Avatar sx={{mt:1}} src={userData.profilePic} />:<Avatar sx={{mt:1}} />}
        <TextField
          fullWidth
          multiline
          size="small"
          variant="outlined"
          color="success"
          placeholder="Write something"
          margin="dense"
          onClick={() => navigate("/addpost")}
        >
          Write something
        </TextField>
      </Stack>
    </Container>
  );
};
