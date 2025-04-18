"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { GoArrowUp } from "react-icons/go";
import Logo from "@/assets/images/logo.svg";
import Footer1 from "@/assets/images/Home/footer-1.jpg";
import Footer2 from "@/assets/images/Home/footer-2.jpg";
import Footer3 from "@/assets/images/Home/footer-3.jpg";
import Footer4 from "@/assets/images/Home/footer-4.jpg";
import Footer5 from "@/assets/images/Home/footer-5.jpg";
import Footer6 from "@/assets/images/Home/footer-6.jpg";

const socialIcons = [
  { id: "threads", icon: <FaThreads /> },
  { id: "instagram", icon: <FaInstagram /> },
  { id: "facebook", icon: <FaFacebookF /> },
  { id: "youtube", icon: <FaYoutube /> },
  { id: "twitter", icon: <FaXTwitter /> },
];

const linksList = [
  { title: "History" },
  { title: "Our Team" },
  { title: "Privacy Policy" },
  { title: "Services Offered" },
  { title: "Product Catalog" },
];

const informationList = [
  { title: "FAQ/Return" },
  { title: "Privacy/Terms" },
  { title: "Affiliate" },
  { title: "Sizing Guide" },
  { title: "Accessibility" },
];

const supportList = [
  { title: "Your Account" },
  { title: "Press Release" },
  { title: "Return Centre" },
  { title: "App Download" },
  { title: "Advertisements" },
];

const instagramList = [
  { img: Footer1 },
  { img: Footer2 },
  { img: Footer3 },
  { img: Footer4 },
  { img: Footer5 },
  { img: Footer6 },
];

const Footer = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;

      setScrollProgress(progress);
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-gray-950 text-white border-t border-t-white/10 overflow-hidden">
      <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto sm:pt-20 pt-12.5">
        <div className="sm:pb-20 pb-12.5 flex flex-wrap gap-y-6 border-b border-b-white/20">
          <div className="xl:w-1/4 lg:w-2/5 md:w-[48%] w-full">
            <Fade direction="up" duration={1500} triggerOnce>
              <Link href="#" className="block mb-5">
                <Image
                  src={Logo}
                  alt="logo"
                  className="lg:w-[110px] w-[90px]"
                />
              </Link>
              <p className="lg:mb-10 mb-7.5 md:max-w-[340px]">
                Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa
                justo. Cras eget lorem nunc. Fusce nec urna tempus tempus
              </p>
              <div className="flex gap-4 items-center">
                {socialIcons.map((icon) => (
                  <Link
                    key={icon.id}
                    href="/"
                    className="text-xl hover:text-primary transition duration-500"
                  >
                    {icon.icon}
                  </Link>
                ))}
              </div>
            </Fade>
          </div>
          <div className="xl:w-1/5 lg:w-[30%] md:w-[26%] sm:w-1/2 w-full">
            <Fade direction="up" duration={1500} triggerOnce delay={100}>
              <div className="w-fit xl:mx-auto">
                <h5 className="text-xl font-marcellus md:mb-2 mb-4">
                  Useful links
                </h5>
                {linksList.map((list, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="block transition duration-500 hover:text-primary py-1.5"
                  >
                    {list.title}
                  </Link>
                ))}
              </div>
            </Fade>
          </div>
          <div className="xl:w-[13%] lg:w-[30%] md:w-[26%] sm:w-1/2 w-full">
            <Fade direction="up" duration={1500} triggerOnce delay={200}>
              <div className="w-fit xl:mx-auto">
                <h5 className="text-xl font-marcellus md:mb-2 mb-4">
                  Information
                </h5>
                {informationList.map((list, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="block transition duration-500 hover:text-primary py-1.5"
                  >
                    {list.title}
                  </Link>
                ))}
              </div>
            </Fade>
          </div>
          <div className="xl:w-[17%] lg:w-2/5 md:w-[48%] sm:w-1/2 w-full">
            <Fade direction="up" duration={1500} triggerOnce delay={300}>
              <div className="w-fit xl:mx-auto">
                <h5 className="text-xl font-marcellus md:mb-2 mb-4">
                  Information
                </h5>
                {supportList.map((list, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="block transition duration-500 hover:text-primary py-1.5"
                  >
                    {list.title}
                  </Link>
                ))}
              </div>
            </Fade>
          </div>
          <div className="xl:w-1/4 lg:w-[30%] md:w-2/5 sm:w-1/2 w-full">
            <Fade direction="up" duration={1500} triggerOnce delay={400}>
              <div className="w-fit xl:mx-auto">
                <h5 className="text-xl font-marcellus md:mb-2 mb-4">
                  Follow @Instagram
                </h5>
                <div className="grid grid-cols-3 gap-3">
                  {instagramList.map((list, index) => (
                    <div key={index} className="relative group">
                      <Image
                        src={list.img}
                        alt="footer-img"
                        className="object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 h-full w-full flex items-center justify-center before:absolute before:inset-0 before:h-full before:w-full before:bg-black/50 before:backdrop-blur-[1px] before:opacity-0 before:transition-all before:duration-300 before:pointer-events-none group-hover:before:opacity-100 before:rounded-lg">
                        <FaInstagram
                          size={30}
                          className="scale-[0.8] opacity-0 group-hover:opacity-100 group-hover:scale-100 transititon-all duration-700"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <Fade direction="up" duration={1500} triggerOnce>
          <div className="py-4 text-center">©Traz site all rights Reserved</div>
        </Fade>
        <button
          onClick={handleScrollToTop}
          className={`fixed bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full shadow-lg z-40 cursor-pointer transititon duration-500 ${
            visible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            background: `conic-gradient(var(--color-primary) ${scrollProgress}%, #525252 ${scrollProgress}%)`,
          }}
        >
          <div className="w-9 h-9 bg-gray-950 rounded-full flex items-center justify-center">
            <GoArrowUp size={22} className="text-primary" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Footer;
