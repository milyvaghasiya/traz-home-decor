import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { Input } from "@headlessui/react";
import { BiSearchAlt } from "react-icons/bi";
import Blog1 from "@/assets/images/Home/blog-1.jpg";
import Blog2 from "@/assets/images/Home/blog-2.jpg";
import Blog3 from "@/assets/images/Home/blog-3.jpg";
import Blog4 from "@/assets/images/Home/blog-4.jpg";
import Blog5 from "@/assets/images/Home/blog-5.jpg";
import Blog6 from "@/assets/images/Home/blog-6.jpg";
import Blog7 from "@/assets/images/Home/blog-7.jpg";
import Footer1 from "@/assets/images/Home/footer-1.jpg";
import Footer2 from "@/assets/images/Home/footer-2.jpg";
import Footer3 from "@/assets/images/Home/footer-3.jpg";
import Footer4 from "@/assets/images/Home/footer-4.jpg";
import Footer5 from "@/assets/images/Home/footer-5.jpg";
import Footer6 from "@/assets/images/Home/footer-6.jpg";

const blogList = [
  {
    img: Blog1,
    title: "The Modest Living Space Furnishings Ideas",
    desc: "Etiam eu sapien sem. Suspendisse a massa justo. Cras eget lorem nunc. Fusce nec urna tempus tempus. Zioin a interdum elit.",
  },
  {
    img: Blog2,
    title: "Elevate Your Home With Stylish Furniture’s And Decors",
    desc: "Suspendisse a massa justo. Cras eget lorem nunc. Fusce nec urna tempus tempus. Zioin a interdum elit. Etiam eu sapien sem.",
  },
  {
    img: Blog3,
    title: "The Ultimate Guide To Buying Luxury Furniture",
    desc: "Tuiein a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo. Cras eget lorem nunc. Fusce nec urna tempus tempus.",
  },
  {
    img: Blog4,
    title: "Tips For Designing Reading Area Space Smartly",
    desc: "Cras eget lorem nunc. Fusce nec urna tempus tempus. Zioin a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo.",
  },
];

const postListing = [
  { img: Blog5, title: "Benefits Of Selecting Handmade Furniture" },
  { img: Blog6, title: "Elegant & Essential Dinning Hall Furniture & Decors" },
  { img: Blog7, title: "Maximizing Space with Versatile Furniture’s" },
];

const instagramList = [
  { img: Footer1 },
  { img: Footer2 },
  { img: Footer3 },
  { img: Footer4 },
  { img: Footer5 },
  { img: Footer6 },
];

const tagsList = [
  { title: "Ceramic" },
  { title: "Steel Furniture" },
  { title: "Wood Furniture" },
  { title: "Chair" },
  { title: "Sofa" },
];

const BlogSection = () => {
  return (
    <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto sm:py-20 py-12.5 flex lg:flex-row flex-col lg:gap-0 gap-y-12">
      <div className="xl:w-[calc(100%-410px)] lg:w-[calc(100%-340px)] w-full grid sm:grid-cols-2 gap-x-6 gap-y-10 xl:pr-10 lg:pr-8">
        {blogList.map((blog, index) => (
          <Fade
            direction="up"
            duration={1500}
            triggerOnce
            key={index}
            delay={index * 100}
          >
            <div className="group">
              <div className="overflow-hidden rounded-lg mb-7.5">
                <Image
                  src={blog.img}
                  alt="blog"
                  className="group-hover:scale-110 transition duration-500"
                />
              </div>
              <p className="mb-2.5 uppercase text-primary">
                May 27, 2024 -{" "}
                <span className="text-white capitalize">by designer</span>
              </p>
              <Link
                href="/blog/blog-details"
                className="font-marcellus sm:mb-4 mb-2.5 xl:text-3xl text-2xl text-white hover:text-primary transition duration-500 block"
              >
                {blog.title}
              </Link>
              <p className="mb-3">{blog.desc}</p>
              <Link
                href="/blog/blog-details"
                className="font-marcellus underline underline-offset-2 text-white hover:text-primary transition duration-500"
              >
                Read More
              </Link>
            </div>
          </Fade>
        ))}
      </div>
      <div className="xl:w-[410px] lg:w-[340px] w-full lg:p-0 xl:pl-10 lg:pl-8 sm:p-8 p-3 lg:border-r-transparent lg:border-y-transparent border border-white/50 lg:rounded-none rounded-lg">
        <div className="relative mb-7">
          <Input
            placeholder="Enter Keyword"
            type="text"
            className="block w-full rounded-full sm:py-4 py-3 sm:pr-16 pr-13 pl-6 text-white border border-white/20 !outline-0 focus:border-primary"
          />
          <div className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full transition duration-500 flex items-center justify-center cursor-pointer">
            <BiSearchAlt
              size={28}
              className="text-white group-hover:text-white transition duration-500"
            />
          </div>
        </div>
        <h4 className="text-2xl font-marcellus mb-4 text-white">
          Recent Posts
        </h4>
        <div className="space-y-5 mb-7">
          {postListing.map((post, index) => (
            <div key={index} className="flex items-center sm:gap-4 gap-3">
              <Image
                src={post.img}
                alt="blog"
                className="sm:w-25 w-22 rounded-lg"
              />
              <div className="sm:w-[calc(100%-116px)] w-[calc(100%-100px)]">
                <p className="mb-1.5 uppercase text-sm">May 27, 2024</p>
                <Link
                  href="/blog/blog-details"
                  className="block sm:text-xl text-base font-marcellus text-white hover:text-primary transition duration-500"
                >
                  {post.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <h4 className="text-2xl font-marcellus mb-4 text-white">Tags</h4>
        <div className="flex gap-3 flex-wrap mb-7">
          {tagsList.map((tag, index) => (
            <button
              key={index}
              className="py-1.5 px-4.5 border border-white/50 rounded-full text-white hover:bg-primary hover:text-white transititon duration-500 cursor-pointer"
            >
              {tag.title}
            </button>
          ))}
        </div>
        <h4 className="text-2xl font-marcellus mb-4 text-white">Gallery</h4>
        <div className="grid lg:grid-cols-3 sm:grid-cols-6 grid-cols-3 gap-3">
          {instagramList.map((list, index) => (
            <div key={index} className="overflow-hidden rounded-lg group">
              <Image
                src={list.img}
                alt="blog"
                className="group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
