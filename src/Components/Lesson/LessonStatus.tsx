import React from "react";
import { Typography, Box } from "@mui/material";
  
  function LessonStatus() {
    
    return (
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
    );
  }

  export default LessonStatus;