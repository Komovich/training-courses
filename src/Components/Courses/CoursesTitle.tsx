import React from "react";
import { Typography } from "@mui/material";

const CoursesTitle = () => {
  return (
    <Typography
          gutterBottom
          variant="h4"
          component="div"
          className="content__title"
          sx={{
            marginBottom: "30px",
          }}
        >
          Regular online courses
        </Typography>
  );
};

export default CoursesTitle;