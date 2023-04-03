import React from "react";
import { Typography } from "@mui/material";

interface Props {
  description: string;
}

const CourseDescription: React.FC<Props> = ({ description }) => {
  return (
    <Typography
      component="div"
      variant="body2"
      color="text.secondary"
      className="content__description"
      sx={{
        fontSize: "20px",
        paddingBottom: "25px",
        borderBottom: "1px solid #000",
        maxWidth: "100vw",
        marginBottom: "1rem",
        textAlign: "center",
      }}
    >
      {description}
    </Typography>
  );
};

export default CourseDescription;
