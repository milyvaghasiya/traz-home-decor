"use client";
import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { GiRoundStar } from "react-icons/gi";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Client1 from "@/assets/images/Home/testimonial-1.jpg";
import Client2 from "@/assets/images/Home/testimonial-2.jpg";
import Client3 from "@/assets/images/Home/testimonial-3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const clientsData = [
  {
    img: Client1,
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident irure dolor in reprehende.",
    name: "Andria Gora",
    country: "America",
  },
  {
    img: Client2,
    desc: "Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Malesuada fames ac turpis egestas sed tempus urna et. Nunc consequat interdum varius sit amet consectetur. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.",
    name: "Simon Segar",
    country: "Germany",
  },
  {
    img: Client3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat eiusmod tempor incididunt ut.",
    name: "Sara Helmand",
    country: "France",
  },
];

const Testimonial = () => {
  return (
    <div className="gray-bg">
      <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto sm:py-20 py-12.5 overflow-hidden">
        <Fade direction="up" duration={1500} triggerOnce>
          <h6 className="uppercase text-primary mb-2.5 text-center">
            Testimonial Time
          </h6>
          <h3 className="text-white font-marcellus xl:text-[50px] lg:text-5xl text-[31px] text-center xl:mb-15 md:12.5 mb-10">
            Our Customers Speak
          </h3>
          <div className="relative">
            <Swiper
              modules={[Navigation, EffectFade]}
              spaceBetween={30}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
              speed={600}
              loop
            >
              {[...clientsData, ...clientsData].map((client, index) => (
                <SwiperSlide key={index} className="text-center">
                  <div className="flex justify-center items-center gap-2 mb-5">
                    {[...Array(5)].map((_, index) => (
                      <GiRoundStar
                        key={index}
                        className="text-primary last:text-primary/50 text-lg"
                      />
                    ))}
                  </div>
                  <p className="lg:mb-10 md:mb-8 mb-6 md:text-2xl md:leading-10 sm:text-[22px] sm:leading-8 text-lg font-marcellus text-white lg:max-w-212.5 md:max-w-137.5 mx-auto">
                    {client.desc}
                  </p>
                  <Image
                    src={client.img}
                    alt="client"
                    className="rounded-full size-25 mb-5 mx-auto"
                  />
                  <h5 className="md:text-[22px] sm:text-xl text-lg font-marcellus text-white hover:text-primary transition duration-500 mb-1">
                    {client.name}
                  </h5>
                  <p>{client.country}</p>
                </SwiperSlide>
              ))}
            </Swiper>
            <GoChevronLeft
              size={60}
              className="prev-btn absolute z-10 cursor-pointer top-1/2 left-0 text-white hover:text-primary -translate-y-1/2 transition duration-500 md:block hidden"
            />
            <GoChevronRight
              size={60}
              className="next-btn absolute z-10 cursor-pointer top-1/2 right-0 text-white hover:text-primary -translate-y-1/2 transition duration-500 md:block hidden"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Testimonial;
