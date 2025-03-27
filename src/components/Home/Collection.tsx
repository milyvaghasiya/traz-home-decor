"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
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
import Collection22 from "@/assets/images/Home/Collection/collection22.jpg";
import Collection23 from "@/assets/images/Home/Collection/collection23.jpg";
import Collection24 from "@/assets/images/Home/Collection/collection24.jpg";
import Collection25 from "@/assets/images/Home/Collection/collection25.jpg";
import Collection26 from "@/assets/images/Home/Collection/collection26.jpg";
import Collection27 from "@/assets/images/Home/Collection/collection27.jpg";
import Collection28 from "@/assets/images/Home/Collection/collection28.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const collectionList = [
  {
    tabName: "Home Decoration",
    tabList: [
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
    ],
  },
  {
    tabName: "Office Decoration",
    tabList: [
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
    ],
  },
  {
    tabName: "Indoor Decoration",
    tabList: [
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
    ],
  },
  {
    tabName: "Outdoor Decoration",
    tabList: [
      {
        title: "Copper Tea Jug Set",
        price: "₹ 85.40 - ₹ 156.25",
        primaryImg: Collection22,
        secondaryImg: Collection23,
      },
      {
        title: "Bamboo Sofa",
        price: "₹ 66.10 - ₹ 66.80",
        primaryImg: Collection24,
        secondaryImg: Collection25,
      },
      {
        title: "Office Leather Sofa",
        price: "₹ 134.50 - ₹ 141.50",
        primaryImg: Collection26,
        secondaryImg: Collection27,
      },
      {
        title: "Stone Decor Set",
        price: "₹ 127.50 - ₹ 168.85",
        primaryImg: Collection28,
        secondaryImg: Collection5,
      },
    ],
  },
];

const collectionIcons = [
  { icon: <GoHeart size={20} /> },
  { icon: <LuArrowDownUp size={18} /> },
  { icon: <BiSearchAlt size={20} /> },
];

const Collection = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [swiperTab, setSwiperTab] = useState<SwiperCore | null>(null);

  const handleToggleTab = (index: number) => {
    if (swiperTab) {
      swiperTab.slideTo(index);
    }
  };

  const [showArrows, setShowArrows] = useState(false);
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowArrows(scrollWidth > clientWidth);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => {
      window.removeEventListener("resize", checkScrollability);
    };
  }, []);

  return (
    <div className="gray-bg">
      <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto sm:py-20 py-12.5 text-center">
        <h6 className="uppercase text-primary mb-2.5">Explore Our</h6>
        <h3 className="text-white font-marcellus xl:text-[50px] lg:text-5xl sm:text-[31px] text-2xl">
          Luxurious Haven Collection
        </h3>
        <div>
          <TabGroup onChange={handleToggleTab}>
            <div className="flex items-center w-full justify-center gap-3 md:py-15 py-10">
              {showArrows && (
                <MdKeyboardArrowLeft
                  className="!text-3xl text-white cursor-pointer"
                  onClick={handleScrollLeft}
                />
              )}
              <TabList
                ref={scrollContainerRef}
                className="flex gap-6 w-full justify-evenly items-center overflow-hidden scroll-smooth"
              >
                {collectionList.map(({ tabName }) => (
                  <Tab
                    key={tabName}
                    className="md:text-[22px] sm:text-xl text-lg font-semibold hover:text-white data-[selected]:text-white data-[selected]:underline underline-offset-4 data-[selected]:data-[hover]:text-white cursor-pointer !outline-none transition duration-1000 whitespace-nowrap"
                  >
                    {tabName}
                  </Tab>
                ))}
              </TabList>
              {showArrows && (
                <MdKeyboardArrowRight
                  className="!text-3xl text-white cursor-pointer"
                  onClick={handleScrollRight}
                />
              )}
            </div>
            <Swiper
              onSwiper={setSwiperTab}
              spaceBetween={30}
              slidesPerView={1}
              autoHeight={true}
              speed={600}
              simulateTouch={false}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
              modules={[EffectFade]}
              className="collection-tab-swiper"
            >
              {collectionList.map(({ tabName, tabList }) => (
                <SwiperSlide key={tabName} className="gray-bg relative">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    speed={1000}
                    loop
                    breakpoints={{
                      480: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                      1280: {
                        slidesPerView: 4,
                      },
                    }}
                    className="!pb-20 collection-swiper"
                  >
                    {[...tabList, ...tabList].map((post, index) => (
                      <SwiperSlide key={index} className="!pointer-events-auto">
                        <div className="group">
                          <div className="rounded-xl overflow-hidden relative">
                            <Image
                              src={post.primaryImg}
                              alt="collection-img"
                              className="transition duration-500"
                            />
                            <Image
                              src={post.secondaryImg}
                              alt="collection-hover-img"
                              className="absolute inset-0 scale-110 group-hover:scale-100 group-hover:opacity-100 opacity-0 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/75 scale-110 group-hover:scale-100 group-hover:opacity-100 opacity-0 transition duration-500" />
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
                            <h4 className="text-[22px] font-marcellus mb-2.5 font-semibold transition duration-500 hover:text-primary truncate">
                              {post.title}
                            </h4>
                            <p className="font-semibold">{post.price}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </SwiperSlide>
              ))}
            </Swiper>
          </TabGroup>
        </div>
      </div>
    </div>
  );
};

export default Collection;
