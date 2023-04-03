import React from "react";
import { CardActions, Badge, Rating } from "@mui/material";

interface CourseRatingProps {
  lessonsCount: number;
  rating: number;
}

function CourseRating({
  lessonsCount,
  rating,
}: CourseRatingProps): JSX.Element {
  return (
    <CardActions>
      <Badge color="primary" sx={{ fontSize: "20px", marginRight: "100px" }}>
        Lessons: {lessonsCount}
      </Badge>
      <Rating value={rating} readOnly sx={{ marginLeft: "auto" }} />
    </CardActions>
  );
}

export default CourseRating;
