import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="go-top"
      className="w-full min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-92px)] lg:min-h-[calc(100vh-112px)] glass-bg rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 flex items-center overflow-hidden"
    >
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            <span className="">Hi, I’m </span>
            <span className="text-gradient">Asifur Rahman</span>
          </h1>

          <h2 className="lg:text-2xl md:text-xl text-lg font-semibold mt-3">
            Full Stack Developer
          </h2>

          <p className="mt-5 text-sm md:text-base lg:text-lg text-white/70 max-w-2xl">
            I love building responsive and user-friendly web applications. Passionate about clean code and beautiful UI.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 ">
            <button className="btn glass-bg border-0 rounded-full px-6">
              Download Resume
            </button>

            <button className="btn glass-bg hover:text-gradient rounded-full px-6">
              View Resume
            </button>
          </div>

          <div className="mt-6 flex justify-center lg:justify-start gap-5 text-2xl text-white/80">
            <a
              href="https://github.com/Dev-Asifur-Rahman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/dev-asifur-rahman/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://x.com/Dev_Asif_2002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.facebook.com/asifur.rahman.50742/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-40  rounded-full"></div>

            <Image
              src="/images/profile-image.png"
              width={500}
              height={500}
              alt="Asifur Rahman"
              className="relative -z-10 w-52 md:w-72 lg:w-[320px] aspect-square object-cover rounded-full border-4 border-white/80"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;