import React from "react";

const Detail = () => {
  return (
    <>
      <div
        className="poster"
        // style={{background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0)),
        // url('https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg')}}
      >
        <div className="layout-lg">
          <h1 className="poster__title">Avatar: The Way of Water</h1>
          <p className="poster__text">
            Set more than a decade after the events of the first film, learn the
            story of the Sully family (Jake, Neytiri, and their kids), the
            trouble that follows them, the lengths they go to keep each other
            safe, the battles they fight to stay alive, and the tragedies they
            endure.
          </p>
        </div>
      </div>
      <div className="detail layout-lg">
        <div className="detail__text">
          Set more than a decade after the events of the first film, learn the
          story of the Sully family (Jake, Neytiri, and their kids), the trouble
          that follows them, the lengths they go to keep each other safe, the
          battles they fight to stay alive, and the tragedies they endure.
        </div>
      </div>
    </>
  );
};

export default Detail;
