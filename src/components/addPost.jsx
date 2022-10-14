import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { CropImage } from "./cropImage";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export const Addpost = () => {
  const [data, setData] = useState({ content: "", image: null });
  const [img, setImg] = useState();
  const [cropState, setCropState] = useState(false);
  const [postStatus, setPostStatus] = useState(true);
  const [preview, setPreview] = useState(false);
  const [prevImg, setPrevImg] = useState(null);

  const handlePost = () => {};

  const validate = () => {
    if (data.content.length > 0) 
    return setPostStatus(true);
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
    <div className="addpost">
      <div className="addpost-show">
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
              setImg(e.target.files[0]);
              setCropState(true);
            }}
          />
          <AddAPhotoIcon sx={{ mx: "10px", color: "green" }} />
        </IconButton>
      </div>

      {postStatus ? (
        <div className="addpost-preview">
          <div className="post-image">
            {preview ? <img src={prevImg} alt="null" /> : <></>}
          </div>
          <div className="addpost-actions">
            <Stack direction="row" sx={{ mt: 6, mr: 2 }} spacing={2}>
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
          </div>
        </div>
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
    </div>
  );
};
