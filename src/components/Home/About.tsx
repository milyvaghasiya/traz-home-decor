import React from "react";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import About1 from "@/assets/images/Home/about1.jpg";
import About2 from "@/assets/images/Home/about2.jpg";

const About = () => {
  return (
    <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto sm:py-20 py-12.5 grid md:grid-cols-2 lg:gap-15 md:gap-8 gap-10 grid-cols-1">
      <div>
        <h6 className="uppercase text-primary mb-2.5">Home Decor Hub</h6>
        <h3 className="text-white font-marcellus md:mb-5 mb-4 xl:text-[50px] lg:text-5xl sm:text-[31px] text-2xl">
          Exceptional Furniture&apos;s For Indoor & Outdoor
        </h3>
        <p className="md:pb-20 pb-7.5">
          Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean
          vehicula sodales arcu non mattis. Integer dapibus ac dui pretium
          blandit. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </p>
        <Image src={About1} alt="about-img" className="rounded-lg" />
      </div>
      <div>
        <Image src={About2} alt="about-img" className="rounded-lg" />
        <h3 className="text-white font-marcellus md:mb-5 mb-4 md:pt-20 pt-7.5 sm:text-[28px] text-2xl">
          Discover Endless Designs
        </h3>
        <p className="pb-7">
          Integer dapibus ac dui pretium blandit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Ut
          eleifend mattis ligula, porta finibus urna gravida at. Aenean vehicula
          sodales arcu non mattis.
        </p>
        <div className="flex gap-3 pb-4">
          <GiCheckMark className="text-primary relative top-[6px]" />
          <p className="w-[calc(100%-36px)]">
            At eleifend mattis ligula, porta finibus urna gvida at.
          </p>
        </div>
        <div className="flex gap-3">
          <GiCheckMark className="text-primary relative top-[6px]" />
          <p className="w-[calc(100%-36px)]">
            Kenean vehicula sodales arcu non mattis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
