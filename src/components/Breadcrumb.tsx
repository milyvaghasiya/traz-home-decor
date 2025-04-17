import React from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/assets/images/Home/showcase.jpg";

type breadcrumbProps = { title: string };

const Breadcrumb = ({ title }: breadcrumbProps) => {
  return (
    <div className="relative">
      <Image
        src={Banner}
        alt="banner-img"
        className="w-full object-cover min-h-75 max-h-100"
      />
      <div className="absolute inset-0 h-full w-full bg-black/60 pointer-events-none" />
      <div className="pt-12 md:px-5 px-4 text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
        <h3 className="text-white font-marcellus sm:mb-4 md:text-[50px] sm:text-5xl text-[31px]">
          {title}
        </h3>
        <div className="flex justify-center items-center">
          <Link
            href="/"
            className="text-white hover:text-primary transititon duration-500"
          >
            Home
          </Link>{" "}
          <span className="mx-3">/</span>
          {title}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
