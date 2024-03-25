import React from "react";
import croppedImagee from "../assets/croppedImagee.png";

const CoreTeamCard = ({
  title = "Director Core Team",
  name = "Syed Mehdi Raza",
  pictureUrl,
}) => {
  return (
    <div
      className={`w-[350px] border-2 border-black flex flex-col justify-center items-center bg-gradient-to-t from-[#003149] to-[#0075AF] pb-5`}
    >
      <div className="w-[330px] relative top-[-50px]">
        <img
          className="rounded-full border-4 border-black"
          src={croppedImagee}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-3xl text-white font-semibold">{name}</h3>
        <h3 className="text-xl text-white font-medium">{title}</h3>
      </div>
    </div>
  );
};

export default CoreTeamCard;
