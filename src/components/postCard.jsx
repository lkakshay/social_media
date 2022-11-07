
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Badge, Box, Container } from "@mui/material";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

export const PostCard = ({data}) => {
  TimeAgo.addLocale(en)
  const timeAgo = new TimeAgo('en-US')

  const handleExpandClick = () => {};

const date=data.updatedAt
console.log(new Date(date))

//  console.log(new Date());

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
           avatar={data?.profilePic?<Avatar sx={{mt:1}} src={data.profilePic} />:<Avatar sx={{mt:1}} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={data?.username}
           subheader={timeAgo.format(new Date(data?.updatedAt))}
         />

        {data?.imgUrl?
            <img
            style={{ width: "100%", padding: "0 2%" }}
              src={data?.imgUrl}
              alt='post pic'
            />:<></>}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data?.content}
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
