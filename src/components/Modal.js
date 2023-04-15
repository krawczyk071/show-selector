import React from "react";
import YouTube from "react-youtube";

const Modal = ({ modal: { open, ytid }, toggleModal }) => {
  const opts = {
    height: "720",
    width: "1280",
    playerVars: {
      controls: 1,
      autoplay: 1,
    },
  };
  return open ? (
    <div className="modal" onClick={() => toggleModal("")}>
      <YouTube videoId={ytid} opts={opts} onEnd={() => toggleModal("")} />
    </div>
  ) : (
    ""
  );
};

export default Modal;
