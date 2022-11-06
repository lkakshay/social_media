import {  Box, Button, Container, Typography } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { TextField, IconButton } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileData } from "../Redux/reducers/profileReducer";
import { useParams } from "react-router-dom";
import { editProfileDataAPI } from "../api/apiCalls/profileApis";
import { getClientData } from "../Redux/reducers/userReducer";

export const Bio = () => {
  const Bio = useSelector((state) => state.profile.data);
  const client = useSelector((state) => state.user.data);

  const dispatch = useDispatch();

  const [editStatus, setEditStatus] = useState(false);

  const [edit, setEdit] = useState({});

  const { username } = useParams();

  const posteditBio=()=>{
   
    const formData = new FormData();
    if (edit.image!== undefined) formData.append("image", edit.image);

    if (edit.about.length > 0) formData.append("about", edit.about);

    editProfileDataAPI(formData)
    .then(()=>{
      setEditStatus(false)
      dispatch(getProfileData(username))
      dispatch(getClientData())
    })

  }

  useEffect(() => {
    dispatch(getProfileData(username));
  }, [username]);
  return (
    <Container maxWidth="xs" sx={{ border: ".1px solid black", py: 3 }}>
      {!editStatus ? (
        <Box>
          <Container disableGutters sx={{ width: "80%" }}>
            {Bio.imgUrl?
            <img
              style={{ width: "100%", aspectRatio: 1 / 1, borderRadius: "50%" }}
              src={Bio.imgUrl}
              alt='profile pic'
            />:<img  src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' 
            alt="no profile pic" style={{ width: "100%", aspectRatio: 1 / 1, borderRadius: "50%" }}/>}
          </Container>

          <Typography
            sx={{ mt: 1, fontSize: "20px" }}
            variant="body1"
            gutterBottom
            align="center"
          >
            {Bio.user_id?.username}
          </Typography>
          <Typography
            sx={{ mt: 1, fontSize: "15px" }}
            variant="body1"
            gutterBottom
            align="center"
          >
            {Bio?.about}
          </Typography>
          {client.username === username ? (
            <Stack>
              <Button
                sx={{
                  mt: 1,
                  textTransform: "none",
                  fontSize: "16px",
                }}
                color="success"
                variant="text"
                size="medium"
                onClick={() => {
                  setEditStatus(true)
                  setEdit({about:Bio.about})
                }}
              >
                <ModeEditOutlineOutlinedIcon fontSize="small" />
                edit
              </Button>
            </Stack>
          ) : (
            <></>
          )}
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
                    setEdit({ ...edit, image: e.target.files[0] });
                  }}
                />
                <AddAPhotoIcon fontSize="large" sx={{ color: "green" }} />
              </IconButton>
            </Stack>
            <TextField
              sx={{ width: "100%" }}
              value={edit.about}
              multiline
              size="small"
              variant="outlined"
              color="success"
              placeholder="Write something"
              margin="dense"
              onChange={(e) => {
                setEdit({ ...edit, about: e.target.value });
              }}
            >
              Write something
            </TextField>
          </Box>

          <Container sx={{ p: 2 }}>
            {edit.image ? (
              <img
                style={{
                  width: "100%",
                  aspectRatio: 1 / 1,
                  borderRadius: "50%",
                }}
                src={URL.createObjectURL(edit.image)}
              />
            ) : (
              <></>
            )}
          </Container>

          <Stack>
            <Button
              color="success"
              variant="contained"
              size="small"
              onClick={() => posteditBio()}
            >
              update
            </Button>
            <Button
              sx={{
                mt: 1,
                textTransform: "none",
              }}
              color="error"
              variant="text"
              size="small"
              onClick={() => {
                setEdit({});
                setEditStatus(false);
              }}
            >
              cancel
            </Button>
          </Stack>
        </Container>
      )}
    </Container>
  );
};
