import ReactPlayer from "react-player";
import React, { useRef } from "react";

const VIDEO_PATH =
  "https://www.youtube.com/watch?time_continue=2&v=vd5g-drkfDw&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dtop%2B10%2Banime%2B2023%2Btrailer%26sca_esv%3D565398918%26ei%3DIkwDZbZH5ajFzw-DuLDwAQ%26ved%3D0ahUKEwi24MeD2aqBAxVlV&source_ve_path=MjM4NTE&feature=emb_title";

function Video() {
  const playerRef = useRef(null);
  return (
    <>
      <h1 className="title">WHAT'S NEXT</h1>
      <div className="video">
        <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
      </div>
    </>
  );
}
export default Video;
