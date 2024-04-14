import React from "react";
import hand from "../assets/hand.svg";
import talonX from "../assets/talonX.png";
import spursol from "../assets/spursol.png";
import efu from "../assets/efu.png";
import eplanet from "../assets/eplanet.png";

function Sponsor({ src, w, url = "#" }) {
  return (
    <div style={{ width: w }}>
      <a href={url}>
        <img className="h-auto max-w-full rounded-lg" src={src} alt="" />
      </a>
    </div>
  );
}

function SponsorsSection() {
  // dividing sponsors in columns
  let firstCol = [talonX, efu, talonX, efu];
  let secondCol = [efu, spursol, eplanet];
  let thirdCol = [talonX, talonX, efu];
  let fourthCol = [efu, eplanet, spursol, talonX];

  return (
    <div className="flex flex-col p-2">
      <div className="flex sm:flex-row flex-col justify-around items-center">
        <div>
          <h1 className="sm:text-7xl text-4xl font-semibold text-white">
            BROUGHT TO
          </h1>
          <h1 className="sm:text-6xl text-4xl font-semibold text-[#23B6DF]">
            YOU BY
          </h1>
        </div>
        <div>
          <img src={hand} className="hand" width={300} alt="hand" />
        </div>
      </div>
      <hr className="my-10 border-[#1e3e4e]" />
      <div className="sponsor-gallery px-10 w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="grid gap-4">
            {firstCol.map((sp, ind) => (
              <div key={ind}>
                <Sponsor src={sp} w={"300px"} />
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            {secondCol.map((sp, ind) => (
              <div key={ind}>
                <Sponsor src={sp} w={"300px"} />
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            {thirdCol.map((sp, ind) => (
              <div key={ind}>
                <Sponsor src={sp} w={"300px"} />
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            <div className="grid gap-4">
              {fourthCol.map((sp, ind) => (
                <div key={ind}>
                  <Sponsor src={sp} w={"300px"} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorsSection;
