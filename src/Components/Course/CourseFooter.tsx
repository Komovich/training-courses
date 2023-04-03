import { AppBar, Toolbar, Typography } from "@mui/material";

const CourseFooter = () => {
  return (
    <AppBar
      color="primary"
      sx={{ top: "auto", bottom: 0, position: "fixed", width: "100%" }}
    >
      <Toolbar>
        <Typography component="div" variant="body1" color="inherit">
          © 2023 Gen.tech, Inc.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CourseFooter;
