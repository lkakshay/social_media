import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Badge, Box, Container } from "@mui/material";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

export const PostCard = () => {
  const handleExpandClick = () => {};

  return (
    <Container disableGutters maxWidth="100">
      <Card
        className="post-card"
        sx={{
          maxWidth: "100%",
          borderRadius: "0px",
          mb:2
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              aria-label="recipe"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <img
          style={{ width: "100%", aspectRatio: 16 / 9, padding: "0 2%" }}
          src="https://images.pexels.com/photos/343238/pexels-photo-343238.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
          </Typography>
        </CardContent>
        <CardActions>
          <Badge sx={{ mr: 2 }} size="small">
            <WhatshotRoundedIcon sx={{ color: "#cccccc" }} fontSize="large" />
          </Badge>
          <Badge>
            <ForumRoundedIcon fontSize="large" />
          </Badge>
          <Box sx={{ marginLeft: "auto", mr: 1 }} onClick={handleExpandClick}>
            <Badge>
              <ShareRoundedIcon fontSize="large" />
            </Badge>
          </Box>
        </CardActions>
      </Card>
    </Container>
  );
};
