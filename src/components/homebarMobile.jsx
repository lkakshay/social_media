import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ChatIcon from "@mui/icons-material/Chat";
import Badge from "@mui/material/Badge";

export const HomeHeaderSmallScreen = () => {
  return (
    <div className="home-header-sm-md">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          color="black1"
          sx={{ boxShadow: "none", borderBottom: "1px solid black", mb: 24 }}
          position="fixed"
        >
          <Toolbar>
            <h2 style={{ fontWeight: 900, color: "white" }}>VOGUE</h2>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconButton
                edge="end"
                size="large"
                color="white"
                aria-label="open drawer"
              >
                <AddCircleOutlineRoundedIcon fontSize="large" />
              </IconButton>

              <IconButton
                edge="end"
                size="large"
                color="white"
                aria-label="open drawer"
              >
                <Badge badgeContent={17} color="success">
                  <ChatIcon fontSize="large" />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
