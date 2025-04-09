import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import About from "@/components/Home/About";
import Testimonial from "@/components/Home/Testimonial";
import Team from "@/components/About/Team";
import Brands from "@/components/Home/Brands";
import Newsletter from "@/components/Home/Newsletter";

const AboutUs = () => {
  return (
    <>
      <Breadcrumb title="About Us" />
      <About />
      <Testimonial />
      <Team />
      <Brands />
      <Newsletter />
    </>
  );
};

export default AboutUs;
