import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Badge, Box, CardMedia, Container } from "@mui/material";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ReactMarkdown from "https://esm.sh/react-markdown@7?bundle";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";

export const PostCard = ({ data }) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const [height,setHeight]=useState(null)

  const handleExpandClick = () => {};

useEffect(()=>{
  if(data.imgUrl)
  setHeight('100px')

  else{
    setHeight('300px')
  }
},[data])

  return (
    <Container disableGutters maxWidth="100">
      <Card
        className="post-card"
        sx={{
          maxWidth: "100%",
          borderRadius: "0px",
           borderTop:'.1px solid black',
           borderLeft:'.1px solid black',
           borderRight:'.1px solid black',
          mb:2,
          boxShadow:'none'
          
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

        
        <CardContent sx={{maxHeight:height,overflow:'hidden',mb:1}}>
          <ReactMarkdown children={data?.content} remarkPlugins={[remarkGfm]} />
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
