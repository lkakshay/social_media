import { Box, Button, Container, Typography } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { TextField, IconButton } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/system";

export const Bio = () => {
  const [editStatus, setEditStatus] = useState(false);
  const [edit, setEdit] = useState({});
  return (
    <Container maxWidth='xs' sx={{ border: ".1px solid black", py: 3 }}>
      {!editStatus ? (
        <Box>
          <Container disableGutters sx={{ width: "80%" }}>
            <img
              style={{ width: "100%", aspectRatio: 1 / 1, borderRadius: "50%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphqmpunOcktIYDIfRzoWH76GnevhjUbgkw-KYFu2mT0uIavZDs4V_Ekyl_c8UTE95wX4&usqp=CAU"
            />
          </Container>

          <Typography
            sx={{ mt: 1, fontSize: "20px" }}
            variant="body1"
            gutterBottom
            align="center"
          >
            Angela White
          </Typography>
          <Typography
            sx={{ mt: 1, fontSize: "15px" }}
            variant="body1"
            gutterBottom
            align="center"
          >
            I am currently a first-year student at King's College London
            studying for a Masters in Computer Science. I have previously worked
            as a Junior Software Developer for Cervus Defence
          </Typography>
          <Typography
            sx={{
              mt: 1,
              fontSize: "19px",
              fontStyle: "italic",
              color: "green",
            }}
            variant="body1"
            gutterBottom
            align="center"
            onClick={() => setEditStatus(true)}
          >
            <ModeEditOutlineOutlinedIcon fontSize="small" /> edit bio
          </Typography>
        </Box>
      ) : (
        <Container>
          <Box>
            <Stack>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    setEdit({ ...edit, profilePic: e.target.files[0] });
                  }}
                />
                <AddAPhotoIcon fontSize="large" sx={{ color: "green" }} />
              </IconButton>
            </Stack>
            <TextField
              sx={{ width: "100%" }}
              value={edit.bio}
              multiline
              size="small"
              variant="outlined"
              color="success"
              placeholder="Write something"
              margin="dense"
              onChange={(e) => {
                setEdit({ ...edit, bio: e.target.value });
              }}
            >
              Write something
            </TextField>
          </Box>

         
            <Container sx={{p:2}} >
              {edit.profilePic ? (
                <img 
                style={{ width: "100%", aspectRatio: 1 / 1, borderRadius: "50%" }}
                src={URL.createObjectURL(edit.profilePic)} />
              ) : (
                <></>
              )}
            </Container>
          

          <Stack>
            <Button color="success" variant="contained" size="small">
              update
            </Button>
          </Stack>

          <Typography
            sx={{
              mt: 1,
              fontSize: "15px",
              color: "red",
            }}
            variant="body1"
            gutterBottom
            align="center"
            onClick={() => setEditStatus(false)}
          >
            cancel
          </Typography>
        </Container>
      )}
    </Container>
  );
};
