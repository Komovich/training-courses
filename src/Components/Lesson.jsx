import React from "react";
import { AppBar, Toolbar, Typography, Box, Chip } from "@mui/material";

function Lesson({course}) {
console.log(course, 12);
  return (
    <div>
     {course.lessons.map((item) => (
        <Box>
         {item.title}
        </Box>
     ))}
     
    </div>
  )

}
export default Lesson;
