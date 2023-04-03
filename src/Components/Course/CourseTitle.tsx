import React from "react";
import { Typography } from "@mui/material";

interface CourseTitleProps {
  title: string;
}

function CourseTitle({ title }: CourseTitleProps): JSX.Element {
  return (
    <Typography
      component="div"
      gutterBottom
      variant="h6"
      className="content__title"
      sx={{ marginBottom: "1rem" }}
    >
      {title}
    </Typography>
  );
}

export default CourseTitle;
