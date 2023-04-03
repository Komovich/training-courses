import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import LessonModal from "../LessonModal";
import LessonImage from "./LessonImage";
import LessonStatus from "./LessonStatus";

interface LessonProps {
lesson: {
status: string;
previewImageLink: string;
order: number;
title: string;
};
}

function Lesson({ lesson }: LessonProps) {
const { status } = lesson;
const [open, setOpen] = useState(false);
if (!lesson) return null;

const isLocked = status === "locked";

  const handleOpen = () => {
    if (isLocked) return;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    };
    
    return (
    <>
    <Box>
    <Box position="relative">
    <LessonImage onClick={handleOpen} imageUrl={`${lesson.previewImageLink}/lesson-${lesson.order}.webp`}/>
    {isLocked && (
    <LessonStatus />
    )}
    </Box>
    <Typography mt={1} variant="body1" color="text.secondary">
    {lesson.title}
    </Typography>
    </Box>
    {open && <LessonModal lessonData={lesson} handleClose={handleClose} />}
    </>
    );
    }
    
    export default Lesson;
