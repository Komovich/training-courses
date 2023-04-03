import React from "react";
import { Box, Grid, Typography } from "@mui/material";

interface CourseOrderProps {
  title: string;
  order: number;
}

const CourseOrder: React.FC<CourseOrderProps> = ({ title, order }) => {
  return (
    <Grid item xs={4}>
      <Box mb={2}>
        Lesson {order}{" "}
        <Typography component="div" variant="h4">
          {title}
        </Typography>
      </Box>
    </Grid>
  );
};

export default CourseOrder;
