import React from "react";
import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

function Lesson({ video }) {
  const { link } = video;
  const videoNode = useRef(null);
  const [player, setPlayer] = useState(null);

  const options = {
    fill: true,
    fluid: false,
    autoplay: false,
    controls: true,
    preload: "metadata",
    sources: [
      {
        src: link,
        type: "application/x-mpegURL",
      },
    ],
  };

  const videoStyle = {
    width: "100%",
    height: "auto",
    maxWidth: "800px", // максимальная ширина видео
    margin: "0 auto",
  };

  useEffect(() => {
    if (videoNode.current) {
      const _player = videojs(videoNode.current, options);
      setPlayer(_player);

      return () => {
        if (player !== null) {
          player.dispose();
        }
      };
    }
  }, []);

  
  return (
    <div data-vjs-player>
      <video ref={videoNode} className="video-js" style={videoStyle}  ></video>
    </div>
  );
}

export default Lesson;
