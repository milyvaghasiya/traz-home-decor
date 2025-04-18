import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { GiCheckMark } from "react-icons/gi";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import {
  FaFacebookF,
  FaGoogle,
  FaPinterest,
  FaUserCircle,
} from "react-icons/fa";
import Blog from "@/assets/images/Home/blog-8.jpg";
import Blog1 from "@/assets/images/Home/blog-9.jpg";

const featuresList = [
  {
    desc: "Tellus elementum sagittis vitae et. Proin nibh nisl condimentum id.",
  },
  {
    desc: "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.",
  },
  { desc: "Vitae tempus quam dui faucibus pellentesque nec nam aliquam." },
  {
    desc: "Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus.",
  },
  { desc: "Condimentum id venenatis a condimentum vitae sapien pellent." },
  { desc: "Odio eu feugiat pretium est placerat nibh ipsum consequat nisl." },
];

const socialIcons = [
  { id: "facebook", icon: <FaFacebookF /> },
  { id: "twitter", icon: <FaXTwitter /> },
  { id: "google", icon: <FaGoogle /> },
  { id: "threads", icon: <FaThreads /> },
  { id: "pinterest", icon: <FaPinterest /> },
];

const BlogDetails = () => {
  return (
    <div className="max-w-[1050px] lg:px-10 md:px-6 px-4 mx-auto sm:py-20 py-12.5">
      <Fade direction="up" duration={1500} triggerOnce>
        <Image
          src={Blog}
          alt="blog"
          className="rounded-xl lg:h-120 h-80 object-cover sm:object-center object-right mb-12"
        />
        <p className="mb-2.5 uppercase text-primary">
          March 5, 2024 -{" "}
          <span className="text-white capitalize">by wdtteapoy</span>
        </p>
        <h5 className="font-marcellus sm:mb-4 mb-2.5 xl:text-3xl text-2xl text-white hover:text-primary transition duration-500">
          Curabitur id commodo nibet sit amet tincidunt nunc.
        </h5>
        <p className="mb-4">
          Suspendisse viverra commodo semper. Donec facilisis odio vitae diam
          lacinia, vel venenatis nibh mattis. Vestibulum odio dolor, gravida vel
          tincidunt vel, laoreet nec erat. Aliquam erat volutpat. Donec
          tincidunt magna dui, sit amet faucibus tortor dignissim ut. Nulla eget
          urna et nisl facilisis elementum nec ac ex. Phasellus quis hendrerit
          nibh, vitae sagittis ligula. Phasellus ante libero, varius quis felis
          sit amet, luctus bibendum nisl. Ut erat mi, bibendum id nibh sed,
          rutrum mollis dolor. Vivamus aliquet laoreet enim quis lobortis.
          Maecenas laoreet faucibus justo nec placerat. Sed finibus risus quis
          nisl pulvinar, gravida aliquet turpis vehicula. Morbi et arcu quis
          quam rhoncus congue eu vitae velit. Phasellus tristique mauris eget
          magna ullamcorper vulputate. Integer consequat fermentum ipsum. Duis
          mi lectus, elementum id tellus sed, sodales scelerisque eros.
        </p>
        <p>
          Nulla facilisi. Quisque laoreet mi non ipsum tempor condimentum.
          Nullam elit metus, rhoncus eu viverra ac, posuere at mi. Nulla
          facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Cras consectetur ipsum a viverra
          tincidunt. Phasellus accumsan consequat nunc vel euismod. Suspendisse
          potenti. Nullam a libero sed ex euismod commodo nec ornare urna.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
        <div className="bg-[url(/blog-bg.png)] bg-no-repeat bg-center bg-cover sm:p-10 p-5 rounded-xl relative my-10">
          <div className="absolute inset-0 h-full w-full bg-black/50 rounded-xl pointer-events-none" />
          <h5 className="text-[22px] font-marcellus text-white relative">
            Quisque bibendum sem nibh, quis fermentum odio suscipit vitae.
            Integer et sem id dui fringilla vestibulum non vitae lectus. Nunc at
            consequat sem. Duis sollicitudin orci eleifend dui pharetra
          </h5>
          <p className="text-white text-end mt-3 relative">
            -Hailey Mccray, Sydney
          </p>
        </div>
        <h5 className="text-[22px] font-marcellus text-white mb-4">
          Neque sodales ut etiam sit amet nisl purus in mollis.
        </h5>
        <p className="mb-7">
          Quisque sodales lorem eget cursus placerat. Donec posuere posuere
          tellus quis ultrices. Nunc feugiat, augue at luctus maximus, tellus
          erat sodales velit, id iaculis massa mi a libero. In nulla lectus,
          auctor id dui in, viverra egestas magna. Mauris varius mauris ac nunc
          dignissim viverra. Quisque elementum arcu laoreet lacus viverra, vitae
          aliquam risus tincidunt. Fusce congue, arcu viverra hendrerit
          ullamcorper, lectus enim aliquet lectus, quis aliquet justo arcu eu
          dui. Aliquam eu ipsum pellentesque, tristique lacus sit amet, interdum
          augue. Integer sodales finibus risus sit amet facilisis. Sed ac felis
          ac tellus aliquam pharetra. Ut semper in diam consectetur ullamcorper.
          Aliquam lobortis ex lectus, consequat elementum metus mattis non.
        </p>
        <div className="flex items-center md:flex-row flex-col gap-y-7 mb-7">
          <div className="md:w-3/5 md:pr-7">
            {featuresList.map((feature, index) => (
              <div key={index} className="flex gap-3 pb-4 last:pb-0">
                <GiCheckMark className="relative top-[5px]" />
                <p className="w-[calc(100%-36px)]">{feature.desc}</p>
              </div>
            ))}
          </div>
          <Image
            src={Blog1}
            alt="blog"
            className="rounded-xl md:w-2/5 object-cover"
          />
        </div>
        <p>
          Accumsan eu morbi tincidunt sapien leo, sed bibendum eros. Sed sed est
          cursus, tempus odio a, ornare metus. Sed placerat augue sed interdum
          vulputate. Ut lacinia fringilla vulputate. Aenean malesuada leo ipsum,
          sit amet lobortis lacus tempus non. Aliquam commodo dui dolor. Sed
          consectetur libero id diam fringilla, vel aliquet ex iaculis.
          Suspendisse in cursus ex, non finibus neque. Aliquam erat volutpat. In
          mauris mi
        </p>
        <div className="sm:py-6 sm:px-7 px-4 py-5 sm:mt-15 mt-10 border-y border-y-white/50 flex gap-4 justify-between flex-wrap">
          <button className="py-1.5 px-4.5 border border-white/50 rounded-full text-white hover:bg-primary hover:text-white transititon duration-500 cursor-pointer">
            Steel Furniture
          </button>
          <div className="flex gap-4 items-center ml-auto">
            {socialIcons.map((icon) => (
              <Link
                key={icon.id}
                href="/"
                className="sm:text-xl text-lg text-white hover:text-primary transition duration-500"
              >
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>
        <h5 className="sm:pt-6 pt-5 text-[22px] font-marcellus text-white mb-4">
          Comments ( 1 )
        </h5>
        <div className="flex sm:gap-4 gap-2 items-center mb-3">
          <FaUserCircle className="sm:text-[50px] text-[36px]" />
          <div className="flex sm:gap-4 gap-2 justify-between items-center sm:w-[calc(100%-64px)] w-[calc(100%-44px)]">
            <div>
              <h5 className="font-marcellus text-white font-semibold">kitty</h5>
              <p className="text-sm">March 6, 2024 at 8:29 am</p>
            </div>
            <button className="py-1.5 sm:px-4 px-3 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transititon duration-500 cursor-pointer h-fit text-sm">
              Reply
            </button>
          </div>
        </div>
        <p>
          Hac habitasse platea dictumst vestibulum rhoncus est pellentesque
          elit. Et tortor consequat id porta. Sapien nec sagittis aliquam
          malesuada bibendum arcu vitae elementum curabitur. Arcu non sodales
          neque sodales ut etiam sit amet. Adipiscing elit ut aliquam purus.
        </p>
      </Fade>
    </div>
  );
};

export default BlogDetails;
