import { Container } from "@mui/system";
import {
  Avatar,
  Box,
  Button,
  Collapse,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useState } from "react";
const data = [
  { name: "Explore", item: <WhatshotIcon fontSize="large" /> },
  { name: "Chat", item: <ChatIcon fontSize="large" /> },
  { name: "Friends", item: <PeopleAltRoundedIcon fontSize="large" /> },
];

export const MenuList = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container disableGutters>
      <Stack
        direction="row"
        gap={1}
        sx={{ border: ".1px solid black", mb: 1, p: 1 }}
      >
        <Avatar />

        <Stack justifyContent="center">
          <Typography>Angela White</Typography>
        </Stack>
      </Stack>
      {data.map((el, i) => (
        <Stack
          key={i}
          direction="row"
          gap={2}
          sx={{ border: ".1px solid black", mb: 1, p: 1 }}
        >
          {el.item}

          <Stack justifyContent="center">
            <Typography>{el.name}</Typography>
          </Stack>
        </Stack>
      ))}
      <Container
        disableGutters
        sx={{ border: ".1px solid black", mb: 1, p: 1 }}
      >
        <Stack direction="row" gap={1} onClick={() => setOpen(!open)}>
          <LogoutOutlinedIcon fontSize="large" />

          <Stack justifyContent="center">
            <Typography>Account</Typography>
          </Stack>
          <Box direction="row" justifyContent="flex-end" sx={{ ml: "auto" }}>
            {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
          </Box>
        </Stack>
        <Collapse sx={{ width: "100%" }} in={open} timeout="auto" unmountOnExit>
          <Stack sx={{ pt: 2 }}>
            <Button sx={{ color: "red" }}>Logout</Button>
          </Stack>
        </Collapse>
      </Container>
    </Container>
  );
};
