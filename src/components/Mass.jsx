import React from "react";
import Mass777 from "../assets/images/webp/mass777.webp";

const Mass = () => {
  return (
    <>
      <div className="max-w-[1140px] px-3 mx-auto lg:my-24 md:my-16 my-12">
        <div className="flex flex-row flex-wrap">
          <div className="w-1/2">
            <img
              src={Mass777}
              alt="Mass777"
              className="rounded-2xl max-w-[558px] w-full"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-center text-white lg:text-5xl md:text-4xl text-3xl font-normal ff_anton md:leading-[57.60px] mb-14">
              Más razones para elegirnos
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mass;
