import React from "react";
import WebLogo from "../assets/images/webp/WebLogo.webp";

const FooterSec = () => {
  return (
    <>
      <div className="bg-black md:pt-16 pt-10">
        <div className="max-w-[1140px] px-12 mx-auto">
          <div className="flex  flex-wrap flex-row">
            <div className="">
              <a href="">
                <img
                  src={WebLogo}
                  alt="WebLogo"
                  className="max-w-[210px] w-100"
                />
              </a>
              <p className="ff_inter text-base font-medium text-white opacity-[0.8] max-w-[369px]">
                En Exclusive Games somos un equipo apasionado de personas
                dedicadas al desarrollo de multiplataformas para juegos de azar
              </p>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSec;
