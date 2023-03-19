import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

function Lesson({ lesson }) {
  return (
    <div>
      <img
        style={{ maxWidth: "100%" }}
        src={`${lesson.previewImageLink}/lesson-${lesson.order}.webp`}
      />
      <CardMedia // sx={{ height: "100%", width: "100%", marginBottom: "1rem" }}
        image={`${lesson.previewImageLink}/lesson-${lesson.order}.webp`}
        title={lesson.title}
      />
      <Typography variant="body2" color="text.secondary">
        {lesson.title}
      </Typography>
    </div>
  );
}
export default Lesson;
