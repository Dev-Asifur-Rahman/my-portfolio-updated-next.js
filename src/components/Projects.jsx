import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Projects = () => {
  const projects = [
    {
      name: "NextLearn",
      image: "project-images/nextlearn.jpg",
    },
    {
      name: "CampAid",
      image: "project-images/campaid.jpg",
    },
    {
      name: "LitHub",
      image: "project-images/lithub.jpg",
    },
    {
      name: "DealBondhu",
      image: "project-images/dealbondhu.jpg",
    },
  ];
  const [project, setProject] = useState(projects[0]);

  function projectModal(index) {
    setProject(projects[index]);
    document.getElementById("my_modal_3").showModal();
  }
  return (
    <div
      id="projects"
      className="w-full lg:mt-30 md:mt-25 mt-20 rounded-lg md:rounded-xl"
    >
      <section id="swiper-section" className="w-full">
        <Swiper
          className="h-full w-full relative"
          grabCursor
          centeredSlides={true}
          initialSlide={2}
          speed={900}
          parallax
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
                  <img src={p?.image} alt="" className="rounded-lg md:rounded-2xl"/>
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
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gradient">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-gradient">{project?.name}</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default Projects;
