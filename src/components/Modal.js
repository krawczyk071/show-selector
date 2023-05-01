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
    <div className="modal" onClick={() => toggleModal("")}>
      <YouTube
        videoId={ytid}
        opts={opts}
        className="YT1"
        iframeClassName="YT2"
        onEnd={() => toggleModal("")}
      />
    </div>
  ) : (
    ""
  );
};

export default Modal;
