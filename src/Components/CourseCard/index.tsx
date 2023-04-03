import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import CourseMedia from "./CourseMedia"
import CourseDescription from "./CourseDescription"
import CourseSkills from "./CourseSkills"
import CourseTitle from "./CourseTitle"
import CourseRating from "./CourseRating"
import { Link } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  description: string;
  lessonsCount: number;
  rating: number;
  previewImageLink: string;
  meta: {
    courseVideoPreview: string;
    skills: string[];
  };
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  
  return (
    <Link to={`/lesson/${course.id}`}>
      <Card
        sx={{
          maxWidth: "345px",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "space-between",
          padding: "1rem",
          border: "1px solid #ccc",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CourseTitle title={course.title}/>
          <CourseMedia previewImageLink={course.previewImageLink} courseVideoPreview={course.meta.courseVideoPreview} />
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
        <CourseDescription description={course.description}/>
        <CourseSkills skills={course.meta.skills}/>
        </CardContent>

        <CourseRating lessonsCount={course.lessonsCount} rating={course.rating}/>
      </Card>
    </Link>
  );
};

export default CourseCard;
