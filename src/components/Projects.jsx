import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Projects = () => {
  const projects = [
    {
      name: "NextLearn",
    },
    {
      name: "CampAid",
    },
    {
      name: "LitHub",
    },
    {
      name: "DealBondhu",
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
          slidesPerView={1.5}
          centeredSlides={true}
          initialSlide={2}
          speed={900}
          parallax
          spaceBetween={20}
        >
          <SwiperSlide>
            <div className="img-wrapper">
              <img src="project-images/nextlearn.jpg" alt="" />
            </div>
            <button
              onClick={() => projectModal(0)}
              className="btn glass-bg absolute top-1/2 left-1/2 -translate-1/2 text-gradient backdrop-blur-[3px] rounded-lg"
            >
              Details
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-wrapper">
              <img src="project-images/campaid.jpg" alt="" />
            </div>
            <button
              onClick={() => projectModal(1)}
              className="btn glass-bg absolute top-1/2 left-1/2 -translate-1/2 text-gradient backdrop-blur-[3px] rounded-lg"
            >
              Details
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-wrapper">
              <img src="project-images/lithub.jpg" alt="" />
            </div>
            <button
              onClick={() => projectModal(2)}
              className="btn glass-bg absolute top-1/2 left-1/2 -translate-1/2 text-gradient backdrop-blur-[3px] rounded-lg"
            >
              Details
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-wrapper">
              <img src="project-images/dealbondhu.jpg" alt="" />
            </div>
            <button
              onClick={() => projectModal(3)}
              className="btn glass-bg absolute top-1/2 left-1/2 -translate-1/2 text-gradient backdrop-blur-[3px] rounded-lg"
            >
              Details
            </button>
          </SwiperSlide>
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
