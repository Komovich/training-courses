import React from "react";
import {Box, Grid } from "@mui/material";
import Video from "../Video/index"; // замените `Video` на свой компонент видео

interface LessonVideoProps {
  lessonData: {
    previewImageLink: string;
    order: number;
  };
  link: string;
  videoStyle?: React.CSSProperties;
}

const LessonVideo: React.FC<LessonVideoProps> = ({
  lessonData,
  link,
  videoStyle,
}) => {
  return (
    <Grid item xs={8}>
    <Box sx={{ position: "relative", paddingBottom: "54%" }}>
      <Video
        video={{ link }}
        poster={`${lessonData.previewImageLink}/lesson-${lessonData.order}.webp`}
        context="lesson"
        style={videoStyle}
      />
    </Box>
    </Grid>
  );
};

export default LessonVideo;