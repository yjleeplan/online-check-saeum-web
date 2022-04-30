import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="video-player-wrapper">
      <ReactPlayer
        className="video-player"
        width="100%"
        height="100%"
        url="https://youtu.be/OFoOeh4K51M"
        controls
      />
    </div>
  );
};

export default VideoPlayer;
