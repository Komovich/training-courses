import { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Video from "../Video";
import { Box } from "@mui/material";

interface CourseMediaProps {
  previewImageLink: any;
  courseVideoPreview: any;
}

const CourseMedia: React.FC<CourseMediaProps> = ({
  previewImageLink,
  courseVideoPreview,
}) => {
  {console.log(courseVideoPreview, 12)}
  
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseOver = () => {
    setIsPlaying(true);
  };

  const handleMouseOut = () => {
    setIsPlaying(false);
  };

  return (
    <Box
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{ paddingBottom: "64%", position: "relative" }}
    >
      {isPlaying ? (
        <Box sx={{ position: "absolute", inset: 0 }}>
          <Video
            video={courseVideoPreview}
            poster={`${previewImageLink}/cover.webp`}
          />
        </Box>
      ) : (
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: 0,
          }}
        >
          <CardMedia
            sx={{ height: "100%", width: "100%", marginBottom: "1rem" }}
            image={`${previewImageLink}/cover.webp`}
          />
        </Box>
      )}
    </Box>
  );
};

export default CourseMedia;
