import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
      

      <Swiper className="skills__container container"
          loop={true}
          grabCursor={true}
          spaceBetween={15}
          pagintaion={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            }
          }}
          modules={[Pagination]}
        >
          
       <SwiperSlide className="skills__content" >
      <Frontend />
      </SwiperSlide>
      <SwiperSlide className="skills__content" >
        <Backend />
        </SwiperSlide>
        </Swiper>
      {/* <div className="skills__container container grid">
     
      </div> */}
    </section>
  );
};

export default Skills;