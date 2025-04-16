"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaRegUser,
  FaWhatsapp,
} from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import {
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
  BiSearchAlt,
} from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import Logo from "../assets/images/logo.svg";

const socialIcons = [
  { id: "facebook", icon: <FaFacebookF /> },
  { id: "instagram", icon: <FaInstagram /> },
  { id: "whatsapp", icon: <FaWhatsapp /> },
];

const currencies = [
  { name: "USD, $", value: "usd" },
  { name: "INR, ₹", value: "inr" },
];

const menuItems = [
  { href: "/", link: "Home" },
  {
    href: "#",
    link: "Pages",
    subItems: [
      { pageHref: "/about-us", page: "about us" },
      { pageHref: "/faq", page: "faq" },
    ],
  },
  {
    href: "#",
    link: "shop",
    subItems: [
      { pageHref: "/shop", page: "shop" },
      { pageHref: "/shop/shop-details", page: "shop detail" },
    ],
  },
  {
    href: "#",
    link: "blog",
    subItems: [
      { pageHref: "/blog", page: "blog" },
      { pageHref: "/blog/blog-details", page: "blog detail" },
    ],
  },
  { href: "#", link: "contact us" },
];

const navIcons = [
  { id: "search", icon: <BiSearchAlt /> },
  { id: "user", icon: <FaRegUser size={18} /> },
  { id: "cart", icon: <AiOutlineShoppingCart /> },
];

const Header = () => {
  const pathname = usePathname();
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSubMenuSidebar, setOpenSubMenuSidebar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsSticky(scrollPosition > 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-white left-0 right-0 z-50 absolute">
      <div className="bg-gray-950">
        <div className="flex justify-between items-center py-2 max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto">
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
          <div className="xl:w-2/5 lg:w-1/2 w-3/5 whitespace-nowrap md:flex hidden gap-x-9 overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[linear-gradient(90deg,#101010,transparent,transparent,transparent,#101010)] before:z-10 before:pointer-events-none paused-marquee">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="animate-marquee flex space-x-9 w-[786px]"
              >
                {[
                  "Invite friends and earn rewards!",
                  "Join our Scheme and earn rewards!",
                  "Free shipping on order over $100!",
                ].map((title, index) => (
                  <p
                    key={index}
                    className="text-sm hover:text-primary transition duration-500 cursor-pointer"
                  >
                    {title}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <Listbox value={selectedCurrency} onChange={setSelectedCurrency}>
            <div className="relative">
              <ListboxButton className="py-1.5 px-2.5 text-xs rounded-md flex justify-between items-center gap-2.5 w-21">
                {selectedCurrency.name}
                <TiArrowSortedDown className="size-3.5" />
              </ListboxButton>

              <ListboxOptions className="absolute z-10 w-full left-0 mt-2 rounded-lg overflow-hidden p-1.5 bg-gray-950">
                {currencies.map((currency, index) => (
                  <ListboxOption
                    key={index}
                    value={currency}
                    className={`px-[5px] py-[7px] text-sm hover:bg-primary rounded cursor-pointer ${
                      selectedCurrency.value === currency.value
                        ? "bg-primary"
                        : ""
                    }`}
                  >
                    {currency.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
      </div>

      <div
        className={`lg:h-20.5 h-16 border-b w-full ${
          isSticky
            ? "fixed lg:-top-20.5 lg:translate-y-20.5 -top-16 translate-y-16 transition-all duration-[0.6s] bg-gray-950 border-b-white/10"
            : "absolute border-b-transparent"
        }`}
      >
        <div className="max-w-[1720px] h-full w-full mx-auto lg:px-10 md:px-6 px-4 flex justify-between items-center">
          <Link href="#">
            <Image src={Logo} alt="logo" className="lg:w-[110px] w-[90px]" />
          </Link>
          <div className="hidden lg:flex items-center justify-end">
            {menuItems?.map((items, index) => (
              <div key={index} className="group relative px-1">
                <Link
                  href={items?.href}
                  className={`px-3 py-4 relative font-semibold text-sm uppercase group-hover:text-primary transition duration-500 ease-out flex items-center gap-0.5 ${
                    pathname === items?.href ? "text-primary" : ""
                  }`}
                >
                  {items?.link}
                  {items?.subItems && <BiChevronDown className="size-6" />}
                </Link>
                {items?.subItems && (
                  <div className="w-[200px] rounded-md bg-gray-950 border border-white/20 absolute left-0 top-17 z-10 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500">
                    {items?.subItems?.map((subItem, index) => (
                      <span
                        key={index}
                        className="px-5 py-2.5 block relative group/sub border-b border-b-white/10 last:border-none before:absolute before:-bottom-px before:left-0 before:w-full before:h-px before:transition before:duration-[0.4s] before:ease-in before:scale-x-0 before:origin-left hover:before:scale-x-100 before:bg-gradient-to-r before:from-gray-950 before:via-primary before:to-gray-950 last:before:bg-none"
                      >
                        <Link
                          href={subItem?.pageHref}
                          className={`text-sm group-hover/sub:text-primary flex items-center justify-between font-semibold transition duration-500 ease-out uppercase ${
                            pathname === subItem?.pageHref ? "text-primary" : ""
                          }`}
                        >
                          {subItem?.page}
                        </Link>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            {navIcons.map((icon) => (
              <Link
                key={icon.id}
                href="/"
                className="lg:text-2xl text-[22px] hover:text-primary transition duration-500"
              >
                {icon.icon}
              </Link>
            ))}
            <RiMenu3Fill
              onClick={() => setOpenSidebar(true)}
              className="lg:hidden text-[22px] hover:text-primary transition duration-500 cursor-pointer"
            />
          </div>
          {openSidebar && (
            <div
              onClick={() => {
                setOpenSidebar(false);
                setOpenSubMenuSidebar(false);
              }}
              className="bg-black/50 h-screen w-screen fixed inset-0 z-20"
            />
          )}
          <div
            className={`${
              openSidebar
                ? "right-0 transition-all duration-700 sidebar"
                : "-right-[260px]"
            } h-screen w-[260px] fixed top-0 z-20 transition-all duration-500 xmd:hidden bg-gray-950`}
          >
            <div className="px-4 py-2">
              <div
                onClick={() => setOpenSidebar(false)}
                className="flex items-center justify-center h-7 w-7 rounded-full hover:bg-white/5 transition duration-500 cursor-pointer ml-auto"
              >
                <FaXmark />
              </div>
            </div>
            <div className="h-[calc(100%-48px)] overflow-auto">
              {menuItems?.map((items, index) => (
                <div key={index}>
                  <Link
                    href={items?.href}
                    onClick={(e) => {
                      if (items.subItems) {
                        e.preventDefault();
                        setOpenSubMenuSidebar(true);
                      } else if (!items.subItems) {
                        setOpenSidebar(false);
                      }
                    }}
                    className={`px-4 min-h-10.5 font-semibold text-sm uppercase group hover:text-primary transition duration-500 ease-out flex items-center justify-between border-t border-t-white/10 ${
                      pathname === items?.href ? "text-primary" : ""
                    }`}
                  >
                    {items?.link}
                    {items?.subItems && (
                      <div className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-0.5 before:w-4 before:bg-white group-hover:before:bg-primary before:transition-all before:duration-500 group-hover:before:left-1 before:opacity-0 group-hover:before:opacity-100">
                        <BiChevronRight className="size-6 relative left-0 group-hover:left-1 transition-[left] duration-500" />
                      </div>
                    )}
                  </Link>
                  {items?.subItems && (
                    <div
                      className={`${
                        openSubMenuSidebar
                          ? "right-0 transition-all duration-700 sidebar"
                          : "-right-[260px]"
                      } h-screen w-[260px] fixed top-0 z-20 transition-all duration-500 xmd:hidden bg-gray-950`}
                    >
                      <div className="px-3 py-2 h-11 flex items-center">
                        <div
                          onClick={() => setOpenSubMenuSidebar(false)}
                          className="relative w-fit cursor-pointer before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-0.5 before:w-4 before:bg-white group hover:before:bg-primary before:transition-all before:duration-500 hover:before:right-1 before:opacity-0 hover:before:opacity-100"
                        >
                          <BiChevronLeft className="size-6 relative right-0 group-hover:text-primary group-hover:right-1 transition-[right] duration-500" />
                        </div>
                      </div>
                      <div className="h-[calc(100%-48px)] overflow-auto">
                        {items?.subItems?.map((subItem, index) => (
                          <Link
                            key={index}
                            onClick={() => {
                              setOpenSidebar(false);
                              setOpenSubMenuSidebar(false);
                            }}
                            href={subItem?.pageHref}
                            className={`px-4 min-h-10.5 relative font-semibold text-sm uppercase hover:text-primary transition duration-500 ease-out flex items-center justify-between border-t border-t-white/10 ${
                              pathname === subItem?.pageHref
                                ? "text-primary"
                                : ""
                            }`}
                          >
                            {subItem?.page}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
