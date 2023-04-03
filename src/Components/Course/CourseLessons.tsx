import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Lesson from "../Lesson";

interface CourseLessonProps {
  lessons: any;
}

function CourseLessons({ lessons }: CourseLessonProps): JSX.Element {
  return (
    <div className="container">
      <Box mb={2}>
        <Typography variant="body2" color="text.secondary">
          All lessons:
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {lessons.map((lesson) => (
          <Grid item xs={6} md={4} key={lesson.id}>
            <Lesson lesson={lesson} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CourseLessons;