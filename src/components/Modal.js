import React from "react";
import YouTube from "react-youtube";

// https://www.w3schools.com/howto/howto_css_responsive_iframes.asp
const Modal = ({ modal: { open, ytid }, toggleModal }) => {
  const opts = {
    // height: "720",
    // width: "1280",
    playerVars: {
      controls: 1,
      autoplay: 1,
    },
  };
  return open ? (
    <div
      className="bg-black/50 flex items-center justify-center h-screen w-screen fixed z-10 left-0 top-0"
      onClick={() => toggleModal("")}
    >
      <YouTube
        videoId={ytid}
        opts={opts}
        className="h-0 w-3/4 relative pb-[44%] "
        iframeClassName="absolute top-0 left-0 w-full h-full"
        onEnd={() => toggleModal("")}
      />
    </div>
  ) : (
    ""
  );
};

export default Modal;
