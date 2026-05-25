"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/parallax";
import { Parallax } from "swiper/modules";

const Projects = () => {
  const projects = [
    {
      name: "NextLearn",
      image: "https://i.ibb.co.com/1Y3Hb8Fw/nextlearn.jpg",
      description:
        "An AI-powered learning platform built with Next.js and the MERN stack. Features role-based dashboards, AI quiz generation, study planners, authentication and modern responsive UI.",
      tech: [
        "Next.js",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
      ],
      live: "https://project-next-learn.vercel.app",
      github: "https://github.com/asifurrahman/nextlearn",
    },
    {
      name: "CampAid",
      image: "https://i.ibb.co.com/PG3NZm8x/campaid.jpg",
      description:
        "A full-stack medical camp management platform with registration, participant management, Stripe payment integration, analytics dashboard and secure authentication system.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "Stripe",
      ],
      live: "https://camp-aid.netlify.app",
      github: "https://github.com/asifurrahman/campaid",
    },
    {
      name: "LitHub",
      image: "https://i.ibb.co.com/8gZg72HG/lithub.jpg",
      description:
        "A modern library management web application where users can browse books, add reviews, manage borrowing and explore a responsive and interactive reading platform.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "Firebase",
      ],
      live: "https://lithub-library.netlify.app",
      github: "https://github.com/asifurrahman/lithub",
    },
    {
      name: "DealBondhu",
      image: "https://i.ibb.co.com/1p1sbXn/dealbondhu.jpg",
      description:
        "A coupon and deals sharing platform where users can discover trending offers, manage deals and explore an interactive user-friendly marketplace experience.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      live: "https://deal-bondhu.vercel.app",
      github: "https://github.com/asifurrahman/dealbondhu",
    },
  ];

  const [project, setProject] = useState(projects[0]);

  function projectModal(index) {
    setProject(projects[index]);
    document.getElementById("my_modal_3").showModal();
  }

  return (
    <div id="projects" className="w-full lg:mt-30 md:mt-25 mt-20">
      <div className="w-full flex flex-col items-center text-center mb-8 md:mb-12">
        <p className="uppercase tracking-[6px] text-sm text-gradient mb-3">
          Featured Works
        </p>

        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold">
          My Projects
        </h2>

        <p className="max-w-2xl text-white/60 mt-4 text-sm md:text-base">
          A collection of modern and interactive web applications built with the
          Next.js, MERN stack, focusing on performance, clean UI and real-world
          features.
        </p>

        <div className="mt-6 w-40 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      <section id="swiper-section" className="w-full ">
        <Swiper
          className="w-full relative"
          grabCursor
          parallax
          slidesPerView={1.5}
          centeredSlides={true}
          initialSlide={1}
          speed={900}
          modules={[Parallax]}
          breakpoints={{
            0: {
              spaceBetween: 10,
            },
            640: {
              spaceBetween: 10,
            },
            768: {
              spaceBetween: 15,
            },
            1024: {
              spaceBetween: 20,
            },
          }}
        >
          {projects?.map((p, index) => {
            return (
              <SwiperSlide key={index} className="rounded-lg md:rounded-2xl">
                <div className="img-wrapper">
                  <img
                    src={p?.image}
                    alt=""
                    className="rounded-lg md:rounded-2xl"
                  />
                </div>

                <button
                  onClick={() => projectModal(index)}
                  className="btn btn-sm md:btn-md glass-bg absolute top-1/2 left-1/2 -translate-1/2 text-gradient backdrop-blur-[3px] rounded-lg"
                >
                  Details
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box glass-bg backdrop-blur-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gradient border-none focus:outline-none focus:ring-0 active:outline-none">
              ✕
            </button>
          </form>

          <h3 className="font-bold text-lg text-gradient mb-3">
            {project?.name}
          </h3>

          <div className="w-full h-52 md:h-64 rounded-xl overflow-hidden mb-4">
            <img
              src={project?.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="text-white/70 text-sm leading-relaxed mb-4">
            {project?.description}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project?.tech?.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-white/10"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project?.live}
              target="_blank"
              className="btn btn-sm glass-bg text-gradient backdrop-blur-[3px] rounded-lg"
            >
              Live Demo
            </a>

            <a
              href={project?.github}
              target="_blank"
              className="btn btn-sm glass-bg text-gradient backdrop-blur-[3px] rounded-lg"
            >
              GitHub
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Projects;