"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const NavBar = ({ scrollRef }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollTop = element.scrollTop;
      const scrollHeight = element.scrollHeight;
      const clientHeight = element.clientHeight;

      const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(percent);
    };

    handleScroll();

    element.addEventListener("scroll", handleScroll);
    return () => element.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);
  return (
    <div className="glass-bg flex justify-between items-center mb-[2%] md:rounded-xl rounded-lg  p-2 md:p-3 lg:p-4 sticky top-0">
      <div className="flex items-center gap-2 w-2/3">
        <Image
          src={"/images/asifurs-logo.png"}
          width={64}
          height={64}
          alt="asifurs-image-logo"
          className="w-5 md:w-8 lg:w-10 aspect-square"
        ></Image>
        <p className="text-xl md:text-3xl lg:text-4xl font-bold text-gradient">
          Asifur Rahman
        </p>
      </div>
      <div className="w-1/3 ">
        <progress
          className="progress [&::-webkit-progress-value]:bg-gradient-to-r
  [&::-webkit-progress-value]:from-[#38bdf8]
  [&::-webkit-progress-value]:via-[#6366f1]
  [&::-webkit-progress-value]:to-[#a855f7] w-full"
          value={progress}
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default NavBar;
