import React from "react";
import { Typography } from "@mui/material";

interface Props {
  title: string;
}

const CourseTitle: React.FC<Props> = ({ title }) => {
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
};

export default CourseTitle;