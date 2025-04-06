import React from "react";
import Banner from "@/components/Home/Banner";
import About from "@/components/Home/About";
import Collection from "@/components/Home/Collection";
import Faq from "@/components/Home/Faq";
import Showcases from "@/components/Home/Showcases";
import Testimonial from "@/components/Home/Testimonial";
import Blog from "@/components/Home/Blog";
import Brands from "@/components/Home/Brands";
import Newsletter from "@/components/Home/Newsletter";
import Features from "@/components/Home/Features";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Collection />
      <Faq />
      <Showcases />
      <Testimonial />
      <Blog />
      <Brands />
      <Newsletter />
      <Features />
    </>
  );
};

export default Home;
