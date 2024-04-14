import React from "react";
import imagee from "../assets/imagee.png";

const ExcomCard = ({ title = "President", name = "Hammad", pictureUrl }) => {
  return (
      <div className={`w-[350px] border-black`}>
        <img className="w-full" src={imagee} alt="" />
        <div className="relative top-[-120px] left-[-20px] bg-gradient-to-r from-[#003149] to-[#0075AF] w-[350px] h-[80px] p-4">
          <h3 className="text-white font-light text-md">{title}</h3>
          <h3 className="text-white font-medium text-xl">{name}</h3>
        </div>
      </div>
  );
};
export default ExcomCard;
