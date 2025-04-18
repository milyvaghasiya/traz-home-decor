import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { Checkbox, Input } from "@headlessui/react";
import { BiSolidSend } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="bg-[url(/newsletter-bg.jpg)] bg-no-repeat bg-center bg-cover h-full relative before:absolute before:inset-0 before:h-full before:w-full before:bg-black/60 overflow-hidden">
      <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto sm:py-20 py-12.5 relative">
        <Fade direction="up" duration={1500} triggerOnce>
          <div className="lg:w-1/2 sm:w-4/5 mx-auto text-center">
            <h6 className="uppercase text-primary mb-2.5">Art Of Comfort</h6>
            <h3 className="text-white font-marcellus xl:mb-10 mb-7.5 xl:text-[50px] lg:text-5xl sm:text-[31px] text-2xl leading-[1.2]">
              Transforming Spaces, Transforming Style
            </h3>
            <div className="relative mb-5">
              <Input
                placeholder="Enter your mail id here"
                type="email"
                className="block w-full rounded-full sm:py-4.5 py-3 sm:pr-16 pr-13 sm:pl-8.5 pl-6 text-white border border-white/20 !outline-0 focus:border-primary"
              />
              <div className="sm:size-13 size-10 bg-white group hover:bg-primary absolute right-[5px] top-1/2 -translate-y-1/2 rounded-full transition duration-500 flex items-center justify-center cursor-pointer">
                <BiSolidSend
                  size={28}
                  className="text-black group-hover:text-white transition duration-500"
                />
              </div>
            </div>
            <p className="text-sm">
              <Checkbox className="group size-4 rounded border border-white inline-flex items-center justify-center mr-1 cursor-pointer">
                <FaCheck className="size-3 fill-primary opacity-0 group-data-[checked]:opacity-100" />
              </Checkbox>
              Your email is safe with us, we dont spam.
              <Link
                href="#"
                className="ml-1 capitalize underline text-white hover:text-primary transition duration-500 underline-offset-2"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Newsletter;
