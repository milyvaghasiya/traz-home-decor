"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className="relative min-h-[650px] flex justify-center items-center overflow-hidden">
      <video
        src="/banner.mp4"
        className="h-[650px] w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        ref={(video) => {
          if (video) {
            video.playbackRate = 0.3;
          }
        }}
      />
      <div className="absolute inset-0 h-full w-full bg-black/60 pointer-events-none" />
      <div className="max-w-[1000px] mx-auto md:px-5 px-4 pt-14 text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
        <Fade direction="up" duration={1500} triggerOnce>
          <h6 className="uppercase text-primary">Timeless Elegance</h6>
          <h3 className="text-white font-marcellus sm:mb-4 mb-3 md:text-[50px] sm:text-5xl text-[31px] max-[640px]:leading-10">
            Discover Furniture&apos;s For Living
          </h3>
          <p className="md:max-w-1/2 sm:max-w-[90%] sm:mb-11 mb-8 text-white mx-auto">
            Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et
            tortor consequat id. Fermentum egestas tellus. Nunc eu hendrerit
            turpis. Fusce non lectus sem. In pellentesque nunc non Donec pretium
            gravida neque et placerat.
          </p>
          <button className="py-3 pl-7.5 pr-16 rounded-full border border-primary transition duration-500 bg-primary hover:bg-white text-white hover:text-black font-semibold relative group shop-now-button cursor-pointer">
            Shop Now
            <div className="h-10 w-10 bg-white group-hover:bg-primary absolute right-[5px] top-1/2 -translate-y-1/2 rounded-full transition duration-500 flex items-center justify-center">
              <GoArrowRight
                size={24}
                className="text-black group-hover:text-white "
              />
            </div>
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
