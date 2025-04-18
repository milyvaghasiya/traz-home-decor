import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Team1 from "@/assets/images/About/team-1.jpg";
import Team2 from "@/assets/images/About/team-2.jpg";
import Team3 from "@/assets/images/About/team-3.jpg";
import Team4 from "@/assets/images/About/team-4.jpg";

const teamList = [
  { img: Team1, name: "Charles Carter", role: "CEO" },
  { img: Team2, name: "Lina Hendrick", role: "Product Designer" },
  { img: Team3, name: "Roger Marcus", role: "VP Sales" },
  { img: Team4, name: "Mark Harrison", role: "Managing Director" },
];

const socialIcons = [
  { id: "facebook", icon: <FaFacebookF /> },
  { id: "twitter", icon: <FaXTwitter /> },
  { id: "youtube", icon: <FaYoutube /> },
  { id: "linkedin", icon: <FaLinkedinIn /> },
];

const Team = () => {
  return (
    <div className="max-w-[1720px] lg:px-10 md:px-6 px-4 mx-auto sm:py-20 py-12.5 text-center overflow-hidden">
      <Fade direction="up" duration={1500} triggerOnce>
        <h6 className="uppercase text-primary mb-2.5">Comfort Crafters</h6>
        <h3 className="text-white font-marcellus xl:text-[50px] lg:text-[43px] text-[31px] xl:mb-15 md:12.5 mb-10">
          Special Team
        </h3>
      </Fade>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {teamList.map((team, index) => (
          <Fade
            direction="up"
            duration={1500}
            triggerOnce
            key={index}
            delay={index * 100}
          >
            <div className="group sm:max-w-full max-w-80 mx-auto">
              <div className="rounded-xl overflow-hidden relative">
                <Image src={team.img} alt="team-img" />
                <div className="absolute inset-0 bg-linear-[0deg,rgba(0,0,0,0.6),transparent] group-hover:opacity-100 opacity-0 transition duration-500 pointer-events-none" />
                <div className="flex gap-3 absolute bottom-6 left-1/2 -translate-x-1/2 transititon duration-500 opacity-0 group-hover:opacity-100">
                  {socialIcons.map((icon, index) => (
                    <div
                      key={index}
                      className="size-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition duration-500 cursor-pointer translate-y-5 group-hover:translate-y-0"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {icon.icon}
                    </div>
                  ))}
                </div>
              </div>
              <h4 className="text-[22px] font-marcellus mb-1.5 transition duration-500 text-white hover:text-primary truncate mt-4">
                {team.name}
              </h4>
              <p className="font-semibold">{team.role}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Team;
