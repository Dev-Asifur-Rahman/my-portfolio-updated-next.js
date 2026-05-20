import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Parallax } from "swiper/modules";

const Projects = () => {
  const projects = [
    {
      name: "NextLearn",
      image: "/project-images/nextlearn.jpg",
    },
    {
      name: "CampAid",
      image: "/project-images/campaid.jpg",
    },
    {
      name: "LitHub",
      image: "/project-images/lithub.jpg",
    },
    {
      name: "DealBondhu",
      image: "/project-images/dealbondhu.jpg",
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
          A collection of modern and interactive web applications built with the Next.js,
          MERN stack, focusing on performance, clean UI and real-world features.
        </p>

        <div className="mt-6 w-40 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>
      <section id="swiper-section" className="w-full">
        <Swiper
          className="h-full w-full relative"
          grabCursor
          parallax
          centeredSlides={true}
          initialSlide={2}
          speed={900}
          modules={[Parallax]}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 40,
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

          {/* Image section (dummy) */}
          <div className="w-full h-52 md:h-64 rounded-xl overflow-hidden mb-4">
            <img
              src={project?.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* Description */}
          <div className="text-white/70 text-sm leading-relaxed mb-4">
            A modern full-stack MERN project built with authentication,
            dashboard, payment integration and real-time data handling.
          </div>

          {/* Tech stack (dummy) */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-xs rounded-full bg-white/10">
              React
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-white/10">
              Node
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-white/10">
              MongoDB
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-white/10">
              Tailwind
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              className="btn btn-sm
              glass-bg text-gradient backdrop-blur-[3px] rounded-lg"
            >
              Live Demo
            </button>

            <button
              className="btn btn-sm
              glass-bg text-gradient backdrop-blur-[3px] rounded-lg"
            >
              GitHub
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Projects;
