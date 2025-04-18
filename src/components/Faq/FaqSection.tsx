"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import FaqImg from "@/assets/images/Faq/faq.jpg";

const faqSections = [
  {
    title: "Products & Service",
    subtitle: "Product related queries",
    questions: [
      "For furniture purchases, do you have financing options?",
      "Do you have eco-friendly furniture?",
      "Is it possible to follow the delivery of my furniture?",
      "Do you offer design consultations?",
      "Are custom orders accepted for furniture that isn't in stock?",
    ],
  },
  {
    title: "Orders & Returns",
    subtitle: "Order related queries",
    questions: [
      "Can I specify a time and date for delivery?",
      "Are there any loyalty or reward programs available?",
      "Is it possible to buy a furniture warranty extension?",
      "How to see the catalog of available furniture options?",
      "How to get price quote for a specific furniture set?",
    ],
  },
];

const socialIcons = [
  { id: "threads", icon: <FaThreads /> },
  { id: "instagram", icon: <FaInstagram /> },
  { id: "facebook", icon: <FaFacebookF /> },
  { id: "youtube", icon: <FaYoutube /> },
  { id: "twitter", icon: <FaXTwitter /> },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState<[number, number] | null>([0, 0]);

  return (
    <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto sm:py-20 py-12.5 flex md:flex-row flex-col gap-y-4">
      <div className="lg:w-[73%] md:w-[65%] w-full xl:pr-25 lg:pr-15 md:pr-10 space-y-8">
        <Fade direction="up" duration={1500} triggerOnce>
          {faqSections.map(({ title, subtitle, questions }, sectionIndex) => (
            <div key={sectionIndex}>
              <h6 className="uppercase text-primary mb-2.5">{subtitle}</h6>
              <h3 className="text-white font-marcellus md:mb-5 mb-4 xl:text-[50px] lg:text-5xl text-[31px]">
                {title}
              </h3>
              {questions.map((que, questionIndex) => {
                const isOpen =
                  expanded?.[0] === sectionIndex &&
                  expanded?.[1] === questionIndex;

                return (
                  <Disclosure
                    key={questionIndex}
                    as="div"
                    className="sm:py-6 py-4 lg:pr-5 border-b border-white/20 last:border-none"
                    defaultOpen={sectionIndex === 0 && questionIndex === 0}
                    onClick={() =>
                      setExpanded(isOpen ? null : [sectionIndex, questionIndex])
                    }
                  >
                    <DisclosureButton className="group flex w-full items-center justify-between">
                      <span
                        className={`font-marcellus font-medium sm:text-[22px] text-lg transition duration-500 text-left w-[calc(100%-32px)] ${
                          isOpen ? "text-primary" : "text-white"
                        }`}
                      >
                        {que}
                      </span>
                      <BiChevronDown
                        className={`size-8 fill-white transition duration-500 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </DisclosureButton>
                    {isOpen && (
                      <div className="sm:mt-4.5 mt-3.5">
                        Dolor sit amet consectetur adipiscing. Elit duis
                        tristique sollicitudin nibh sit amet. Ultrices eros in
                        cursus turpis. Ultricies tristique nulla aliquet enim
                        tortor at auctor urna nunc. Volutpat diam ut venenatis
                        tellus. Consectetur adipiscing elit duis tristique
                        sollicitudin nibh sit amet.
                      </div>
                    )}
                  </Disclosure>
                );
              })}
            </div>
          ))}
        </Fade>
      </div>
      <div className="lg:w-[27%] md:w-[35%] w-full md:sticky md:top-24 md:self-start">
        <Fade direction="up" duration={1500} triggerOnce>
          <h5 className="text-[22px] font-marcellus mb-4.5 text-white">
            Contact Us
          </h5>
          <p>123 Main Street Los Angeles, CA 90001 United States.</p>
          <p className="pt-2.5 pb-5">
            <span className="cursor-pointer hover:text-primary transititon duration-500">
              +000 123 456 789
            </span>{" "}
            <span className="mx-2.5">|</span>{" "}
            <span className="cursor-pointer hover:text-primary transititon duration-500">
              contact@example.com
            </span>
          </p>
          <Image src={FaqImg} alt="faq-img" className="rounded-xl w-full" />
          <p className="py-5">
            Phasellus eufelisihed euismod, suscipit sapien eu, consectetur orci.
            Aenean dapibus massa sed urna dictum, in ornare magna vestibulum. In
            sit amet iaculis ligula.
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
        </Fade>
      </div>
    </div>
  );
};

export default FaqSection;
