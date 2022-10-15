import { Button, Typography } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { TextField, IconButton } from "@mui/material";
import { useState } from "react";

export const Bio = () => {
  const [editStatus, setEditStatus] = useState(true);
  const [edit, setEdit] = useState({});
  return (
    <div className="bio">
      {!editStatus ? (
        <div className="bio-inner">
          <div className="bio-image-div">
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphqmpunOcktIYDIfRzoWH76GnevhjUbgkw-KYFu2mT0uIavZDs4V_Ekyl_c8UTE95wX4&usqp=CAU"></img>
            </div>
          </div>
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
            className="bio-edit-text"
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
        </div>
      ) : (
        <div className="bio-edit">
          <div className="bio-edit-inner">
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
          </div>

          <div className="bio-edit-show">
            <div>
              {edit.profilePic ? (
                <img src={URL.createObjectURL(edit.profilePic)} />
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="bio-edit-actions">
            <div>
              <div>
                <Button color="success" variant="contained" size="small">
                  update
                </Button>
              </div>
              <div>
              <Typography
            className="bio-edit-text"
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
