import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Projects = () => {
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
            <button className="btn glass-bg absolute top-1/2 left-1/2 -translate-1/2 text-gradient backdrop-blur-[3px] rounded-lg">
              Details
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-wrapper">
              <img src="project-images/campaid.jpg" alt="" />
            </div>
            <button className="btn glass-bg absolute top-1/2 left-1/2 -translate-1/2 text-gradient backdrop-blur-[3px] rounded-lg">
              Details
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-wrapper">
              <img src="project-images/lithub.jpg" alt="" />
            </div>
            <button className="btn glass-bg absolute top-1/2 left-1/2 -translate-1/2 text-gradient backdrop-blur-[3px] rounded-lg">
              Details
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-wrapper">
              <img src="project-images/dealbondhu.jpg" alt="" />
            </div>
            <button className="btn glass-bg absolute top-1/2 left-1/2 -translate-1/2 text-gradient backdrop-blur-[3px] rounded-lg">
              Details
            </button>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Projects;
