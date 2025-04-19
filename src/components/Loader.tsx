"use client";
import React, { ReactNode, useEffect, useState } from "react";

const Loader = ({ children }: { children: ReactNode }) => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoaded(false), 3000);
  }, []);

  return (
    <>
      {loaded ? (
        <div className="fixed  inset-0 h-full w-full flex justify-center items-center bg-gray-950">
          <div className="font-marcellus text-[52px] tracking-[1px] font-bold text-white uppercase bg-clip-text loader-animation">
            Loading...
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;
