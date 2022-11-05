import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Avatar, Container, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { CropImage } from "./cropImage";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { addPostAPI } from "../api/apiCalls/postApis";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const [data, setData] = useState({ content: "", image: null });
  const [img, setImg] = useState();
  const [cropState, setCropState] = useState(false);
  const [postStatus, setPostStatus] = useState(true);
  const [preview, setPreview] = useState(false);
  const [prevImg, setPrevImg] = useState(null);
  const navigate = useNavigate();

  const handlePost = () => {
    const formData = new FormData();
    if (data.image !== null) formData.append("image", data.image);

    if (data.content.length > 0) formData.append("content", data.content);

    addPostAPI(formData)
      .then(() => navigate("/profile/lk"))
      .catch((error) => console.log("error", error));
  };

  const validate = () => {
    if (data.content.length > 0) return setPostStatus(true);
    if (data.image !== null) {
      setPreview(true);
      setPostStatus(true);
      return;
    }
    setPostStatus(false);
  };

  useEffect(() => {
    validate();
  }, [data]);

  useEffect(() => {
    if (data.image !== null) {
      const link = URL.createObjectURL(data.image);
      setPrevImg(link);
      setPreview(true);
    } else setPreview(false);
  }, [data.image]);

  useEffect(() => {
    if (cropState) setPostStatus(false);
  }, [cropState]);

  return (
    <Container
      maxWidth="md"
      disableGutters
      sx={{ border: ".1px solid black", p: 2 }}
    >
      <Stack justifyContent="space-between" direction="row">
        <Avatar sx={{ mt: 1 }} />
        <IconButton component="label">
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => {
              setImg(e.target.files[0]);
              setCropState(true);
            }}
          />
          <AddAPhotoIcon fontSize="large" sx={{ color: "green" }} />
        </IconButton>
      </Stack>
      <TextField
        value={data.content}
        fullWidth
        multiline
        size="small"
        variant="outlined"
        color="success"
        placeholder="Write something"
        margin="dense"
        onChange={(e) => {
          setData({ ...data, content: e.target.value });
        }}
      >
        Write something
      </TextField>

      {postStatus ? (
        <Container disableGutters maxWidth="xs">
          {preview ? (
            <img
              style={{ width: "100%", aspectRatio: 16 / 9, marginTop: "15px" }}
              src={prevImg}
              alt="null"
            />
          ) : (
            <></>
          )}

          <Stack
            direction="row"
            sx={{ mt: 2, mr: 2 }}
            justifyContent="center"
            spacing={2}
          >
            <Button
              variant="contained"
              color="error"
              startIcon={<CancelIcon />}
              onClick={() => {
                setData({ content: "", image: null });
                setImg(null);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                handlePost();
              }}
              endIcon={<SendIcon />}
            >
              Post
            </Button>
          </Stack>
        </Container>
      ) : (
        <></>
      )}

      {cropState ? (
        <CropImage
          img={img}
          data={data}
          setData={setData}
          setCropState={setCropState}
          setImg={setImg}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};
