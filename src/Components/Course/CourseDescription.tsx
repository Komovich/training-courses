import React from "react";
import { Typography } from "@mui/material";

interface CourseDescriptionProps {
  description: string;
}

function CourseDescription({
  description,
}: CourseDescriptionProps): JSX.Element {
  return (
    <Typography
      component="div"
      gutterBottom
      variant="h6"
      className="content__title"
      sx={{ marginBottom: "1rem" }}
    >
      {description}
    </Typography>
  );
}

export default CourseDescription;
