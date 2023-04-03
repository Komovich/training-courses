import React from "react";
import { Typography } from "@mui/material";

interface Props {
  title: string;
}

const CourseTitle: React.FC<Props> = ({ title }) => {
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
};

export default CourseTitle;
