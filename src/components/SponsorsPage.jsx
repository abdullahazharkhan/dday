import React from "react";
import talonX from "../assets/talonX.png";
import spursol from "../assets/spursol.png";
import efu from "../assets/efu.png";
import eplanet from "../assets/eplanet.png";

function SponsorLogo({ src = talonX, w = "500px", url = "#" }) {
  return (
    <div style={{ width: w }} className="m-3">
      <a href={url}>
        <img className={`h-auto rounded-lg max-w-full`} src={src} alt="" />
      </a>
    </div>
  );
}

function SponsorsPage() {
  let mainSponsors = [talonX];
  let coSponsors = [talonX, eplanet, efu];
  let goldSponsors = [talonX, talonX, eplanet, talonX];
  let silverSponsors = [talonX, eplanet, talonX, talonX, eplanet, talonX];
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl sm:text-8xl font-bold text-[#23B6DF]">
          DevDay '24
        </h1>
        <h1 className="text-4xl sm:text-6xl font-bold text-white border-b-4 border-[#23B6DF]">
          SPONSORS
        </h1>
      </div>
      <hr className="my-2 border-[#1e3e4e]" />
      <div className="sponsors-list w-[90%] mx-auto flex flex-col gap-10">
        <div className="main-sponsor">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white">
              Main Sponsor
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {mainSponsors.map((sp, index) => (
              <div key={index}>
                <SponsorLogo src={sp} w="280px" />
              </div>
            ))}
          </div>
        </div>
        <div className="gold-sponsor">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white">
              Gold Sponsors
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {goldSponsors.map((sp, index) => (
              <div key={index}>
                <SponsorLogo src={sp} w="280px" />
              </div>
            ))}
          </div>
        </div>
        <div className="co-sponsor">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white">
              Co Sponsors
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {coSponsors.map((sp, index) => (
              <div key={index}>
                <SponsorLogo src={sp} w="250px" />
              </div>
            ))}
          </div>
        </div>
        <div className="silver-sponsor">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white">
              Silver Sponsors
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {silverSponsors.map((sp, index) => (
              <div key={index}>
                <SponsorLogo src={sp} w="250px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorsPage;
