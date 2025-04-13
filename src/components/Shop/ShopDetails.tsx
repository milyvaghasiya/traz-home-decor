"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper/types";
import { BsCart2 } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaMinus,
  FaPlus,
  FaRegClock,
  FaYoutube,
} from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { GiRoundStar } from "react-icons/gi";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import ShopPayment from "@/assets/images/Shop/shop-payment.png";
import Art1 from "@/assets/images/Home/Collection/collection6.jpg";
import Art2 from "@/assets/images/Home/Collection/collection5.jpg";
import Art3 from "@/assets/images/Home/Collection/collection28.jpg";
import Art4 from "@/assets/images/Home/Collection/collection29.jpg";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

const socialIcons = [
  { id: "threads", icon: <FaThreads /> },
  { id: "instagram", icon: <FaInstagram /> },
  { id: "facebook", icon: <FaFacebookF /> },
  { id: "youtube", icon: <FaYoutube /> },
  { id: "twitter", icon: <FaXTwitter /> },
];

const slidesList = [{ img: Art1 }, { img: Art2 }, { img: Art3 }, { img: Art4 }];

const ShopDetails = () => {
  const [value, setValue] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto sm:py-20 py-12.5 grid md:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
      <div className="md:sticky md:top-24 md:self-start flex lg:gap-4 gap-3 w-full">
        <div className="min-[540px]:w-1/5 w-[30%]">
          <Swiper
            onSwiper={setThumbsSwiper}
            direction="vertical"
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="h-full shop-swiper"
          >
            {slidesList.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="2xl:max-h-40 xl:max-h-30 lg:max-h-25 md:max-h-18 min-[540px]:max-h-32 max-h-20"
              >
                <Image
                  src={slide.img}
                  alt="shop-img"
                  className="w-full h-full rounded-lg cursor-pointer object-cover border-2 border-transparent hover:border-primary transition duration-500"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="min-[540px]:w-4/5 w-[70%] h-full">
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs, EffectFade]}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            speed={1000}
            loop
          >
            {slidesList.map((slide, index) => (
              <SwiperSlide key={index}>
                <Image src={slide.img} alt="shop" className="rounded-xl" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="">
        <h5 className="sm:text-[37px] text-[31px] font-marcellus mb-3 text-white font-semibold">
          Ceramic Art Set
        </h5>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <GiRoundStar
                key={index}
                className="text-primary last:text-primary/50 text-xl"
              />
            ))}
          </div>
          <p className="font-semibold">(1 customer review)</p>
        </div>
        <p className="mb-4">
          Fusce laoreet nunc vitae tellus sodales rutrum quis et lacus. Sed ac
          leo tincidunt, gravida augue id, blandit massa. Fusce nec pretium
          ante. Vivamus vitae bibendum lacus, ac varius ligula.
        </p>
        <p className="mb-5">
          <span className="font-bold">Availability :</span> Hurry, Only left 10
          items in stock
        </p>
        <h5 className="text-2xl font-bold text-white mb-7">
          ₹ 12.40 – ₹ 15.50
        </h5>
        <div className="flex gap-4 lg:flex-nowrap md:flex-wrap sm:flex-nowrap flex-wrap mb-7">
          <div className="rounded-full border border-primary py-3 sm:px-5 px-4 flex gap-4 items-center justify-between w-28">
            <FaMinus
              onClick={() => setValue((prev) => Math.max(1, prev - 1))}
              className="cursor-pointer"
            />
            {value}
            <FaPlus
              onClick={() => setValue(value + 1)}
              className="cursor-pointer"
            />
          </div>
          <button className="flex gap-1 items-center justify-center py-3 px-4.5 rounded-full bg-primary text-white hover:bg-white hover:text-primary transititon duration-500 cursor-pointer lg:w-full md:w-[calc(100%-128px)] sm:w-full w-[calc(100%-128px)]">
            <LiaCartArrowDownSolid size={24} />
            Add To Cart
          </button>
          <button className="py-3 px-4.5 rounded-full bg-primary text-white hover:bg-white hover:text-primary transititon duration-500 cursor-pointer w-full">
            Buy Now
          </button>
        </div>
        <p className="mb-4">
          <FaRegClock
            size={20}
            className="text-primary inline relative -top-0.5 mr-2"
          />
          Order in next
          <span className="text-primary"> 12 hours 02 minutes</span> to get it
          by
          <span className="text-primary"> 16 April 2025</span>
        </p>
        <p className="mb-7">
          <BsCart2
            size={20}
            className="text-primary inline relative -top-[3px] mr-2"
          />
          Spend
          <span className="text-primary"> $ 80.00</span> to get Free Shipping
        </p>
        <div className="flex gap-4 items-center flex-wrap">
          <h5 className="sm:text-xl text-lg font-marcellus text-white">
            Social Share :
          </h5>
          <div className="flex gap-4 items-center">
            {socialIcons.map((icon) => (
              <Link
                key={icon.id}
                href="/"
                className="sm:text-xl text-lg text-white hover:text-primary transition duration-500"
              >
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="border border-white/50 rounded-lg w-full relative px-5 sm:pt-6 pt-5 pb-4 mt-7">
          <p className="w-max sm:px-4 px-2 sm:text-base text-sm absolute sm:-top-3.5 -top-3 left-1/2 -translate-x-1/2 shop-payment-bg">
            Guarantee safe and secure checkout
          </p>
          <Image src={ShopPayment} alt="shop-payment" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
