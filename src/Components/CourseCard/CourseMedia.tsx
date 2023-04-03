import { useState } from "react";
import Video from "../Video";
import { Card } from "@mui/material";

interface CourseMediaProps {
  previewImageLink: any;
  courseVideoPreview: any;
}

const CourseMedia: React.FC<CourseMediaProps> = ({
  previewImageLink,
  courseVideoPreview,
}) => {
  console.log(courseVideoPreview, 12);

  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseOver = () => {
    setIsPlaying(true);
  };

  const handleMouseOut = () => {
    setIsPlaying(false);
  };

  return (
    <Card
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{
        paddingBottom: "64%",
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      {isPlaying ? (
        <Video
          video={courseVideoPreview}
          poster={`${previewImageLink}/cover.webp`}
          style={{ position: "absolute", inset: 0 }}
        />
      ) : (
        <img
          src={`${previewImageLink}/cover.webp`}
          alt="Preview"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: 0,
          }}
        />
      )}
    </Card>
  );
};

export default CourseMedia;