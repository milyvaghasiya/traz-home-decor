import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Blog1 from "@/assets/images/Home/blog-1.jpg";
import Blog2 from "@/assets/images/Home/blog-2.jpg";
import Blog3 from "@/assets/images/Home/blog-3.jpg";
import Blog4 from "@/assets/images/Home/blog-4.jpg";

const blogList = [
  {
    img: Blog2,
    title: "Tips For Designing Reading Area Space Smartly",
    desc: "Cras eget lorem nunc. Fusce nec urna tempus tempus. Zioin a interdum elit. Etiam...",
  },
  {
    img: Blog3,
    title: "Easy Way To Furnish Your Home Affordably",
    desc: "Wtiam eu sapien sem. Suspendisse a massa justo. Zioin a interdum elit. Cras eget...",
  },
  {
    img: Blog4,
    title: "Minimalist Modern Modular Kitchen Design",
    desc: "Eget lorem nunc rioin a girotia interdum elit. Etiam eu sapien sem. Suspendisse a...",
  },
];

const Blog = () => {
  return (
    <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto sm:py-20 py-12.5">
      <Fade direction="up" duration={1500} triggerOnce>
        <h6 className="uppercase text-primary mb-2.5">Get the Latest News</h6>
        <h3 className="text-white font-marcellus xl:mb-15 md:12.5 mb-10 xl:text-[50px] lg:text-5xl sm:text-[31px] text-2xl">
          Visit Our Blog
        </h3>
      </Fade>
      <div className="flex md:flex-row flex-col xl:gap-10 gap-8">
        <div className="xl:w-1/2 md:w-2/5 md:sticky md:top-24 md:self-start group">
          <Fade direction="up" duration={1500} triggerOnce>
            <div className="rounded-lg mb-7.5">
              <Image
                src={Blog1}
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
              className="block font-marcellus sm:mb-4 mb-2.5 xl:text-3xl text-2xl text-white hover:text-primary transition duration-500"
            >
              The Modest Living Space Furnishings Ideas
            </Link>
            <p className="xl:w-[85%]">
              Etiam eu sapien sem. Suspendisse a massa justo. Cras eget lorem
              nunc. Fusce nec...
            </p>
          </Fade>
        </div>
        <div className="xl:w-1/2 md:w-3/5">
          {blogList.map((blog, index) => (
            <Fade
              direction="up"
              duration={1500}
              triggerOnce
              key={index}
              delay={index * 100}
              className="lg:mb-7 md:mb-5 mb-8 last:mb-0"
            >
              <div className="flex md:flex-row flex-col lg:gap-7.5 gap-5 group">
                <div className="md:w-[38%] w-full overflow-hidden rounded-lg">
                  <Image
                    src={blog.img}
                    alt="blog"
                    className="group-hover:scale-110 transition duration-500 object-cover h-full"
                  />
                </div>
                <div className="md:w-[62%] w-full">
                  <p className="mb-2.5 uppercase text-primary">May 27, 2024</p>
                  <Link
                    href="/blog/blog-details"
                    className="block font-marcellus lg:mb-4 mb-2.5 xl:text-3xl text-2xl text-white hover:text-primary transition duration-500"
                  >
                    {blog.title}
                  </Link>
                  <p>{blog.desc}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
