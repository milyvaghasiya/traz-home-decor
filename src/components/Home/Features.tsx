import React from "react";
import Image from "next/image";
import Feature1 from "@/assets/images/Home/feature-1.svg";
import Feature2 from "@/assets/images/Home/feature-2.svg";
import Feature3 from "@/assets/images/Home/feature-3.svg";
import Feature4 from "@/assets/images/Home/feature-4.svg";

const featuresList = [
  {
    icon: Feature1,
    title: "Transit Protocol",
    desc: "Eget arcu dictum varius duis at lorem donec.",
  },
  {
    icon: Feature2,
    title: "Chat Assistance",
    desc: "Quam quisque id diam vel quam aecenas.",
  },
  {
    icon: Feature3,
    title: "Email Interaction",
    desc: "Quis varius quam id diam vel lecento.",
  },
  {
    icon: Feature4,
    title: "Global Stores",
    desc: "Condimentum id venenatis a vitae sapien.",
  },
];

const Features = () => {
  return (
    <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto py-15 grid xl:grid-cols-4 sm:grid-cols-2 gap-x-3 gap-y-7.5">
      {featuresList.map((feature, index) => (
        <div
          key={index}
          className="flex gap-3 xl:items-start items-center group"
        >
          <div className="md:ml-7 ml-5 md:size-22 size-18 relative before:absolute before:h-full before:w-full before:bg-gray-800 before:top-0 md:before:-left-7 before:-left-5 before:rounded-full group-hover:before:scale-[0.8] before:z-10 before:transition-all before:duration-[800ms] before:ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
            <Image
              src={feature.icon}
              alt="feature-icon"
              className="md:size-22 size-18 relative z-20"
            />
          </div>
          <div className="w-[calc(100%-128px)]">
            <h5 className="text-white text-xl font-marcellus group-hover:text-primary transition duration-500 whitespace-nowrap md:mb-3 mb-1">
              {feature.title}
            </h5>
            <p className="line-clamp-2">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
