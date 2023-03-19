import React from "react";
import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

function Video({ video, poster }) {
  const { link } = video;
  const videoNode = useRef(null);
  const [player, setPlayer] = useState(null);

  const options = {
    fill: true,
    fluid: false,
    autoplay: true,
    muted: true,
    controls: false,
    playsInline: true,
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
    height: "100%", // максимальная ширина видео
    margin: "0 auto",
    position: "absolute",
    inset: 0,
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
    <video
      playsInline
      ref={videoNode}
      poster={poster}
      className="video-js"
      style={videoStyle}
    ></video>
  );
}

export default Video;
