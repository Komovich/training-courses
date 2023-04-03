import React from "react";
import { Typography } from "@mui/material";

interface CourseTitleProps {
  title: string;
}

function CourseTitle({ title }: CourseTitleProps): JSX.Element {
  return (
    <Typography
        gutterBottom
        variant="h6"
        component="div"
        className="content__title"
        sx={{ marginBottom: "1rem" }}
      >
        {title}
      </Typography>
  );
}

export default CourseTitle;







