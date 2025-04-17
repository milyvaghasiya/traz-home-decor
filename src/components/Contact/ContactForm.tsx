import React from "react";
import { Input, Textarea } from "@headlessui/react";

const ContactForm = () => {
  return (
    <div>
      <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto sm:py-20 py-12.5 text-center">
        <h6 className="uppercase text-primary mb-2.5">Drop Us a Line</h6>
        <h3 className="text-white font-marcellus md:mb-5 mb-4 xl:text-[50px] lg:text-5xl sm:text-[31px] text-2xl">
          Round-the-clock Service
        </h3>
        <p className="max-w-xl mx-auto mb-10">
          Sed id semper risus in hendrerit gravida rutrum quisque. Vitae proin
          sagittis nisl Vel elit scelerisque mauris rhoncus mattis rhoncus urna.
        </p>
        <div className="max-w-[900px] rounded-2xl xl:p-10 sm:p-8 px-3 py-6 bg-black/30 mx-auto grid sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4">
          <Input
            placeholder="Name"
            type="text"
            className="block w-full rounded-full sm:py-4 py-3 px-6 text-white border border-white/20 !outline-0 focus:border-primary"
          />
          <Input
            placeholder="Mobile Number"
            type="text"
            className="block w-full rounded-full sm:py-4 py-3 px-6 text-white border border-white/20 !outline-0 focus:border-primary"
          />
          <Input
            placeholder="Mail ID"
            type="email"
            className="block w-full rounded-full sm:py-4 py-3 px-6 text-white border border-white/20 !outline-0 focus:border-primary sm:col-span-2"
          />
          <Textarea
            placeholder="Additional Information"
            className="block w-full rounded-2xl sm:py-4 py-3 px-6 text-white border border-white/20 !outline-0 focus:border-primary sm:col-span-2"
            rows={5}
          />
          <button className="py-3 px-4.5 rounded-full bg-primary text-white hover:bg-white hover:text-primary transititon duration-500 cursor-pointer w-fit mx-auto sm:col-span-2">
            Submit Query
          </button>
        </div>
      </div>
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6049.108168111101!2d-74.0011234082417!3d40.70581741879306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2343ce7b2b%3A0x2526ddba7abd465c!2sBrooklyn%20Bridge!5e0!3m2!1sen!2sin!4v1744805229922!5m2!1sen!2sin"
          loading="lazy"
          className="w-full bg-black invert-[90%] grayscale-100 sm:h-112 h-95"
        />
      </div>
    </div>
  );
};

export default ContactForm;
