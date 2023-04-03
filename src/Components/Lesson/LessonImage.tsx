import React from "react";

interface LessonImageProps {
    imageUrl: string;
    onClick: () => void;
  }
  
  function LessonImage({ imageUrl, onClick }: LessonImageProps) {
    return (
        <button type="button" onClick={onClick}>
          <img style={{ maxWidth: "100%" }} src={imageUrl} />
        </button>
    );
  }

  export default LessonImage;