import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { GoHeart } from "react-icons/go";
import { LuArrowDownUp } from "react-icons/lu";
import { BiSearchAlt } from "react-icons/bi";
import Collection1 from "@/assets/images/Home/Collection/collection1.jpg";
import Collection2 from "@/assets/images/Home/Collection/collection2.jpg";
import Collection3 from "@/assets/images/Home/Collection/collection3.jpg";
import Collection4 from "@/assets/images/Home/Collection/collection4.jpg";
import Collection5 from "@/assets/images/Home/Collection/collection5.jpg";
import Collection6 from "@/assets/images/Home/Collection/collection6.jpg";
import Collection7 from "@/assets/images/Home/Collection/collection7.jpg";
import Collection8 from "@/assets/images/Home/Collection/collection8.jpg";
import Collection9 from "@/assets/images/Home/Collection/collection9.jpg";
import Collection10 from "@/assets/images/Home/Collection/collection10.jpg";
import Collection11 from "@/assets/images/Home/Collection/collection11.jpg";
import Collection12 from "@/assets/images/Home/Collection/collection12.jpg";
import Collection13 from "@/assets/images/Home/Collection/collection13.jpg";
import Collection14 from "@/assets/images/Home/Collection/collection14.jpg";
import Collection15 from "@/assets/images/Home/Collection/collection15.jpg";
import Collection16 from "@/assets/images/Home/Collection/collection16.jpg";
import Collection17 from "@/assets/images/Home/Collection/collection17.jpg";
import Collection18 from "@/assets/images/Home/Collection/collection18.jpg";
import Collection19 from "@/assets/images/Home/Collection/collection19.jpg";
import Collection20 from "@/assets/images/Home/Collection/collection20.jpg";
import Collection21 from "@/assets/images/Home/Collection/collection21.jpg";

const shopList = [
  {
    title: "Modern Ceramic Lamp",
    price: "₹ 51.70 - ₹ 58.50",
    primaryImg: Collection1,
    secondaryImg: Collection2,
  },
  {
    title: "Soft Seater Chair",
    price: "₹ 108.95 - ₹ 123.50",
    primaryImg: Collection3,
    secondaryImg: Collection4,
  },
  {
    title: "Ceramic Art Set",
    price: "₹ 88.20 - ₹ 146.40",
    primaryImg: Collection5,
    secondaryImg: Collection6,
  },
  {
    title: "Round Wood Table",
    price: "₹ 119.10 - ₹ 123.75",
    primaryImg: Collection7,
    secondaryImg: Collection8,
  },
  {
    title: "Handmade Floral Vase",
    price: "₹ 212.10 - ₹ 215.20",
    primaryImg: Collection9,
    secondaryImg: Collection10,
  },
  {
    title: "Creative Bonsai Plant",
    price: "₹ 16.65 - ₹ 17.80",
    primaryImg: Collection11,
    secondaryImg: Collection12,
  },
  {
    title: "Foam Cooling Pillow",
    price: "₹ 11.10 - ₹ 11.50",
    primaryImg: Collection13,
    secondaryImg: Collection14,
  },
  {
    title: "Adjustable Single Sofa",
    price: "₹ 65.30 - ₹ 65.85",
    primaryImg: Collection15,
    secondaryImg: Collection16,
  },
  {
    title: "Night Lamp",
    price: "₹ 85.40 - ₹ 156.25",
    primaryImg: Collection17,
    secondaryImg: Collection18,
  },
  {
    title: "Copper Flower Vase",
    price: "₹ 66.10 - ₹ 66.80",
    primaryImg: Collection19,
    secondaryImg: Collection10,
  },
  {
    title: "Plain Elegant Lamp",
    price: "₹ 134.50 - ₹ 141.50",
    primaryImg: Collection18,
    secondaryImg: Collection20,
  },
  {
    title: "Indoor Plant Pot",
    price: "₹ 127.50 - ₹ 168.85",
    primaryImg: Collection21,
    secondaryImg: Collection12,
  },
];

const collectionIcons = [
  { icon: <GoHeart size={20} /> },
  { icon: <LuArrowDownUp size={18} /> },
  { icon: <BiSearchAlt size={20} /> },
];

const ShopSection = () => {
  return (
    <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto sm:py-20 py-12.5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 text-center">
      {shopList.map((item, index) => (
        <Fade
          direction="up"
          duration={1500}
          triggerOnce
          key={index}
          delay={index * 100}
        >
          <div className="group">
            <div className="rounded-xl overflow-hidden relative">
              <Image
                src={item.primaryImg}
                alt="collection-img"
                className="transition duration-500"
              />
              <Image
                src={item.secondaryImg}
                alt="collection-hover-img"
                className="absolute inset-0 scale-110 group-hover:scale-100 group-hover:opacity-100 opacity-0 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/75 scale-110 group-hover:scale-100 group-hover:opacity-100 opacity-0 transition duration-500 pointer-events-none" />
              <div className="flex flex-col gap-3 absolute -top-2 right-4 group-hover:top-4 transititon duration-500 opacity-0 group-hover:opacity-100">
                {collectionIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="size-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition duration-500 cursor-pointer"
                  >
                    {icon.icon}
                  </div>
                ))}
              </div>
              <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full text-white group-hover:bottom-4 transition-all duration-500 hover:text-primary hover:underline cursor-pointer font-semibold opacity-0 group-hover:opacity-100">
                Select Options
              </p>
            </div>
            <div className="text-white mt-4">
              <Link
                href="/shop/shop-details"
                className="text-[22px] font-marcellus mb-2.5 font-semibold transition duration-500 hover:text-primary truncate"
              >
                {item.title}
              </Link>
              <p className="font-semibold">{item.price}</p>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default ShopSection;
