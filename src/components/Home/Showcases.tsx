import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import ShowcaseImg from "@/assets/images/Home/showcase.jpg";
import Showcase1 from "@/assets/images/Home/showcase1.svg";
import Showcase2 from "@/assets/images/Home/showcase2.svg";
import Showcase3 from "@/assets/images/Home/showcase3.svg";
import Showcase4 from "@/assets/images/Home/showcase4.svg";
import Showcase5 from "@/assets/images/Home/showcase5.svg";
import Showcase6 from "@/assets/images/Home/showcase6.svg";

const showcaseList = [
  { icon: Showcase1, title: "Garden Decor" },
  { icon: Showcase2, title: "Home Furniture" },
  { icon: Showcase3, title: "Celling Furniture" },
  { icon: Showcase4, title: "Tea Table" },
  { icon: Showcase5, title: "Storage Solutions" },
  { icon: Showcase6, title: "Decoration Solutions" },
];

const Showcases = () => {
  return (
    <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto sm:py-20 py-12.5">
      <div className="xl:mb-15 md:12.5 mb-10 grid lg:grid-cols-2 grid-cols-1 gap-y-5 items-center overflow-hidden">
        <Fade direction="up" duration={1500} triggerOnce>
          <div>
            <h6 className="uppercase text-primary mb-2.5">Sleek And Stylish</h6>
            <h3 className="text-white font-marcellus xl:text-[50px] lg:text-[43px] text-[31px]">
              Innovative Furniture&apos;s
            </h3>
          </div>
        </Fade>
        <Fade direction="up" duration={1500} triggerOnce>
          <p>
            Class aptent taciti. Ut eleifend mattis ligula, porta finibus urna
            gravida at. Aenean vehiculles arcu non mattis. Integer dapibus ac
            dui pretium blandit.
          </p>
        </Fade>
      </div>
      <Fade direction="up" duration={1500} triggerOnce>
        <Image
          src={ShowcaseImg}
          alt="showcase-img"
          className="rounded-xl lg:h-full sm:h-100 h-80 object-cover sm:object-center object-right sm:mb-20 mb-12.5"
        />
      </Fade>
      <div className="grid xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-8">
        {showcaseList.map((showcase, index) => (
          <Fade
            direction="up"
            duration={1500}
            triggerOnce
            key={index}
            delay={index * 100}
          >
            <div>
              <div className="group flex flex-col items-center w-fit mx-auto cursor-pointer">
                <div className="mb-5 p-1 relative before:absolute before:h-[90%] before:w-[90%] before:bg-primary/30 before:top-[5%] before:-left-[30%] before:rounded-full group-hover:before:scale-[1.4] group-hover:before:left-0 group-hover:before:w-full group-hover:before:h-full group-hover:before:-top-[5%] before:transition-all before:duration-500">
                  <Image
                    src={showcase.icon}
                    alt="showcase-icon"
                    className="size-17.5"
                  />
                </div>
                <h5 className="text-white text-xl font-marcellus group-hover:text-primary transition duration-500 sm:whitespace-nowrap">
                  {showcase.title}
                </h5>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Showcases;
