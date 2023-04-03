import React from "react";
import { Typography, AppBar, Toolbar } from "@mui/material";

const CoursesFooter = () => {
  return (
    <AppBar
      color="primary"
      sx={{ bottom: 0, top: "auto", position: "relative" }}
    >
      <Toolbar>
        <Typography component="div" variant="body1" color="inherit">
          © 2023 Gen.tech, Inc.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CoursesFooter;
