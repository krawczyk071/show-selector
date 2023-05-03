import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="mx-auto px-8 max-w-5xl bg-black flex h-[250px] overflow-hidden my-8 cursor-pointer"
      onClick={() => navigate(data.url)}
    >
      <div className="flex-none w-2/5 self-center text-white p-4">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <h2 className="text-lg text-tlight">{data.text}</h2>
      </div>
      <div className="flex-none w-3/5 relative">
        <div
          className="absolute left-[-1px] top-0 w-[101%] h-full z-10"
          style={{
            background: `linear-gradient(
              90deg,
              #000 0%,
              rgba(0, 0, 0, 0) 30%,
              rgba(0, 0, 0, 0) 70%,
              #000 100%
            ),
            linear-gradient(
              0deg,
              #000 0%,
              rgba(0, 0, 0, 0) 20%,
              rgba(0, 0, 0, 0) 80%,
              #000 100%
            )`,
          }}
        ></div>
        <img
          className="w-full absolute top-[-150px] left-0"
          src={data.img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
