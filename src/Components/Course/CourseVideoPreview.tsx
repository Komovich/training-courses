import React from "react";
import Video from "../Video/index";
import { Box } from "@mui/material";

interface CourseVideoPreviewProps {
  video: string;
  poster: string;
}

function CourseVideoPreview({
  video,
  poster,
}: CourseVideoPreviewProps): JSX.Element {
  return (
    <Box sx={{ width: "50%", margin: "0 auto" }}>
      <Box
        sx={{
          position: "relative",
          justifyContent: "center",
          paddingBottom: "56%",
        }}
      >
        <Video video={video} poster={poster + "/cover.webp"} />
      </Box>
    </Box>
  );
}

export default CourseVideoPreview;
