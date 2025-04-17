"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Brand1 from "@/assets/images/Home/brand-1.jpg";
import Brand2 from "@/assets/images/Home/brand-2.jpg";
import Brand3 from "@/assets/images/Home/brand-3.jpg";
import Brand4 from "@/assets/images/Home/brand-4.jpg";
import Brand5 from "@/assets/images/Home/brand-5.jpg";
import Brand6 from "@/assets/images/Home/brand-6.jpg";
import BrandLogo1 from "@/assets/images/Home/brand-logo-1.svg";
import BrandLogo2 from "@/assets/images/Home/brand-logo-2.svg";
import BrandLogo3 from "@/assets/images/Home/brand-logo-3.svg";
import BrandLogo4 from "@/assets/images/Home/brand-logo-4.svg";
import BrandLogo5 from "@/assets/images/Home/brand-logo-5.svg";
import BrandLogo6 from "@/assets/images/Home/brand-logo-6.svg";
import "swiper/css";

const brandsData = [
  { logo: BrandLogo1, img: Brand1 },
  { logo: BrandLogo2, img: Brand2 },
  { logo: BrandLogo3, img: Brand3 },
  { logo: BrandLogo4, img: Brand4 },
  { logo: BrandLogo5, img: Brand5 },
  { logo: BrandLogo6, img: Brand6 },
];

const Brands = () => {
  return (
    <Swiper
      spaceBetween={2}
      slidesPerView={2}
      breakpoints={{
        560: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 6,
        },
      }}
    >
      {brandsData.map((brand, index) => (
        <SwiperSlide key={index} className="relative group">
          <div className="relative">
            <Image src={brand.img} alt="brand-bg" />
            <div className="absolute inset-0 h-full w-full bg-black/60 pointer-events-none" />
          </div>
          <Image
            src={brand.logo}
            alt="brand-logo"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          />
          <div className="absolute inset-0 h-full w-full bg-gray-800 group-hover:scale-x-0 transition duration-500 origin-right group-hover:origin-left pointer-events-none" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
