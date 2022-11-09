import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Badge, Box, CardMedia, Checkbox, Container } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ReactMarkdown from "https://esm.sh/react-markdown@7?bundle";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { likePostAPI, unLikePostAPI } from "../api/apiCalls/postApis";

export const PostCard = ({ data }) => {

  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const [height, setHeight] = useState(null);
  const [liked,setLiked]=useState(false)

  const handleExpandClick = () => {};


  const handleLike=(bool)=>{
    if(bool){
      likePostAPI(data._id)
      .then(()=>setLiked(true))
      
    }
    else{
      unLikePostAPI(data._id)
      .then(()=>setLiked(false))
    }
  }

  useEffect(() => {
    if (data.imgUrl) setHeight("100px");
    else {
      setHeight("300px");
    }

    console.log('data',data);
     setLiked(data.liked)

  }, [data]);

  return (
    <Container disableGutters maxWidth="100">
      <Card
        className="post-card"
        sx={{
          maxWidth: "100%",
          borderRadius: "0px",
          borderTop: ".1px solid black",
          borderLeft: ".1px solid black",
          borderRight: ".1px solid black",
          mb: 2,
          boxShadow: "none",
        }}
      >
        <CardHeader
          avatar={
            data?.profilePic ? (
              <Avatar sx={{ mt: 1 }} src={data?.profilePic} />
            ) : (
              <Avatar sx={{ mt: 1 }} />
            )
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={data?.username}
          subheader={timeAgo.format(new Date(data?.updatedAt))}
        />

        {data?.imgUrl ? (
          <CardMedia
            sx={{ width: "100%", padding: "0% 2%" }}
            component="img"
            image={data?.imgUrl}
            alt="post pic"
          />
        ) : (
          <></>
        )}

        <CardContent sx={{ maxHeight: height, overflow: "hidden", mb: 1 }}>
          <ReactMarkdown children={data?.content} remarkPlugins={[remarkGfm]} />
        </CardContent>
        <CardActions>
          <Checkbox
            checked={liked}
            icon={<FavoriteBorderIcon fontSize="large" />}
            checkedIcon={
              <FavoriteIcon sx={{ color: "green" }} fontSize="large" />
            }

            onChange={(e)=>handleLike(e.target.checked)}
          />
          <ForumOutlinedIcon sx={{ ml: 1 }} fontSize="large" />
          <Box sx={{ marginLeft: "auto", mr: 1 }} onClick={handleExpandClick}>
            <BookmarkBorderOutlinedIcon fontSize="large" />
          </Box>
        </CardActions>
      </Card>
    </Container>
  );
};
