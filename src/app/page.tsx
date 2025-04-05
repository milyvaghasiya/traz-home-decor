import React from "react";
import Banner from "@/components/Home/Banner";
import About from "@/components/Home/About";
import Collection from "@/components/Home/Collection";
import Faq from "@/components/Home/Faq";
import Showcases from "@/components/Home/Showcases";
import Testimonial from "@/components/Home/Testimonial";
import Blog from "@/components/Home/Blog";
import Brands from "@/components/Home/Brands";

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
    </>
  );
};

export default Home;
