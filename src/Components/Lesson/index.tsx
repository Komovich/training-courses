import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import LessonModal from "../LessonModal";

function Lesson({ lesson }) {
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
                    <button type="button" onClick={handleOpen}>
                        <img
                            style={{ maxWidth: "100%" }}
                            src={`${lesson.previewImageLink}/lesson-${lesson.order}.webp`}
                        />
                    </button>
                    {isLocked && (
                        <Box
                            position="absolute"
                            sx={{
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "#000000",
                                opacity: 0.8,
                            }}
                        >
                            <Typography color="#fff" fontWeight="bold" fontSize={18}>
                                Locked
                            </Typography>
                        </Box>
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
