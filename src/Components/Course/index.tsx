import React, { useEffect, useState } from "react";
import { AppBar, Box } from "@mui/material";
import Api from "../../api";
import { useParams } from "react-router";
import Lesson from "../Lesson";
import CourseVideoPreview from "./CourseVideoPreview";
import CourseLessons from "./CourseLessons";
import CourseTitle from "./CourseTitle";
import CourseDescription from "./CourseDescription"
import CourseFooter from "./CourseFooter"
import CourseSkills from "./CourseSkills"

interface Course {
id: number;
title: string;
description: string;
previewImageLink: string;
meta: {
courseVideoPreview: string;
skills?: string[];
};
lessons: Lesson[];
}

interface Lesson {
id: number;
title: string;
description: string;
duration: number;
status: string;
previewImageLink: string;
order: number;
}

function Course(): JSX.Element | null {
const [course, setCourse] = useState<Course | null>(null);
let { id } = useParams<{ id: string }>();

async function getCourse(id: string): Promise<void> {
try {
const data = await Api.getCourse(id);
setCourse(data);
} catch (error) {
console.error(error);
}
}

useEffect(() => {
if (!id) return;
getCourse(id);
}, [id]);

if (!course) return null;

return (
<Box
className="wrapper"
sx={{
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
minHeight: "100vh",
}}
>
<AppBar
     className="header"
     position="static"
     color="primary"
     elevation={4}
   ></AppBar>
  <CourseVideoPreview video={course.meta.courseVideoPreview} poster={course.previewImageLink + "/cover.webp"}/>
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: "2rem",
    }}
  >
    <CourseTitle title={course.title} />
    <CourseSkills skills={course.meta.skills}/>
    <CourseDescription description={course.description}/>
  </Box>
   <CourseLessons lessons={course.lessons} />
   <CourseFooter />
  </Box>
  );
}
export default Course;
