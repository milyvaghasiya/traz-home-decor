"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { TbNorthStar } from "react-icons/tb";
import { BiChevronDown } from "react-icons/bi";
import faqImg from "@/assets/images/Home/faq.jpg";

const FaqQuestions = [
  { que: "For furniture purchases, do you have financing options?" },
  { que: "Do you have eco-friendly furniture?" },
  { que: "Is it possible to follow the delivery of my furniture?" },
  { que: "Do you offer design consultations?" },
  { que: "Are custom orders accepted for furniture that isn't in stock?" },
];

const Faq = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <>
      <div className="xl:py-7.5 md:py-5 py-3.5 bg-primary">
        <div className="whitespace-nowrap flex gap-x-9 overflow-hidden paused-marquee">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="animate-marquee flex space-x-9 w-[2443px]"
            >
              {[
                "Ensure Durability And Longevity.",
                "Diverse Range Of Furniture's.",
                "Comfort And High Functionality.",
                "Tailored Furniture For Specific Needs.",
              ].map((title, index) => (
                <p
                  key={index}
                  className="xl:text-3xl md:text-[26px] text-[22px] text-white hover:text-white/80 transition duration-500 cursor-pointer font-marcellus flex gap-x-9 items-center"
                >
                  <TbNorthStar />
                  {title}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="gray-bg">
        <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto sm:py-20 py-12.5 grid lg:grid-cols-2 lg:gap-15 gap-10 grid-cols-1">
          <div>
            <h6 className="uppercase text-primary mb-2.5">
              Product related queries
            </h6>
            <h3 className="text-white font-marcellus md:mb-5 mb-4 xl:text-[50px] lg:text-5xl text-[31px]">
              Products &amp; Service
            </h3>
            {FaqQuestions.map((que, index) => (
              <Disclosure
                key={index}
                as="div"
                className="sm:py-6 py-4 lg:pr-5 border-b border-white/20 last:border-none"
                defaultOpen={index === 0}
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span
                    className={`font-marcellus font-medium sm:text-[22px] text-lg transition duration-500 text-left w-[calc(100%-32px)] ${
                      expanded === index ? "text-primary" : "text-white"
                    }`}
                  >
                    {que.que}
                  </span>
                  <BiChevronDown
                    className={`size-8 fill-white transition duration-500 ${
                      expanded === index ? "rotate-180" : ""
                    }`}
                  />
                </DisclosureButton>
                {expanded === index && (
                  <div className="sm:mt-4.5 mt-3.5">
                    Dolor sit amet consectetur adipiscing. Elit duis tristique
                    sollicitudin nibh sit amet. Ultrices eros in cursus turpis.
                    Ultricies tristique nulla aliquet enim tortor at auctor urna
                    nunc.Volutpat diam ut venenatis tellus. Consectetur
                    adipiscing elit duis tristique sollicitudin nibh sit amet.
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
          <div className="relative h-full">
            <Image
              src={faqImg}
              alt="faq-img"
              className="rounded-xl lg:h-full h-100 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/75 rounded-xl pointer-events-none" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
