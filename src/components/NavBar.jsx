"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const NavBar = ({ scrollRef }) => {
  const [progress, setProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollTop = element.scrollTop;
      const scrollHeight = element.scrollHeight;
      const clientHeight = element.clientHeight;

      
      const maxScroll = scrollHeight - clientHeight;
      const percent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      setProgress(percent);

      if (scrollTop < 5) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    handleScroll();

    element.addEventListener("scroll", handleScroll);
    return () => element.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  return (
    <div
      id="navbar"
      className={`
        glass-bg backdrop-blur-xl
        h-12 md:h-16 lg:h-[76px]
        flex justify-between items-center
        mb-2 md:mb-3 lg:mb-4
        md:rounded-xl rounded-lg
        p-2 md:p-3 lg:p-4
        sticky top-0 z-50

        transition-all duration-300 ease-in-out origin-top
        ${isScrolled ? "scale-95" : "scale-100"}
      `}
    >
      <div className={`flex items-center gap-2 w-2/3 loaded`}>
        <Image
          src={"/images/asifurs-logo4.webp"}
          width={500}
          height={500}
          alt="asifurs-image-logo"
          className="w-5 md:w-8 lg:w-10 aspect-square"
        />

        <p className="text-xl md:text-3xl lg:text-4xl font-bold text-gradient">
          Asifur Rahman
        </p>
      </div>

      <div className="w-1/3">
        <progress
          className="progress transition-all duration-200 [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-[#38bdf8] [&::-webkit-progress-value]:via-[#6366f1] [&::-webkit-progress-value]:to-[#a855f7] w-full" value={progress} max="100"
        />
      </div>
    </div>
  );
};

export default NavBar;
