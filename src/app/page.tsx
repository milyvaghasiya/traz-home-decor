import React from "react";
import Banner from "@/components/Home/Banner";
import About from "@/components/Home/About";
import Collection from "@/components/Home/Collection";
import Faq from "@/components/Home/Faq";
import Showcases from "@/components/Home/Showcases";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Collection />
      <Faq />
      <Showcases />
    </>
  );
};

export default Home;
