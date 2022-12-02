import React, { useState, useEffect } from "react";
import "./testimonial.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = ({data}) => {
  const [values, setValues] = useState({
    contents: []
  });


  useEffect(() => {
        setValues(data);
  }, [data])



  return (
      <section className="testimonial container section" 
      id="testimonial"
      >
        <h2 className="section__title">{values.title}</h2>
        <span className="section__subtitle">{values.subtitle}</span>
    
        <Swiper className="testimonial_container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              576: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 25,
              }
            }} 
            modules={[Pagination]}
        >
    {values.contents.map(({id, cover, title, description }, index) => {
      return (
          <SwiperSlide className="testimonial__card" key={index}>
            <img src={cover} alt="" 
            className="testimonial__img" />
  
            <h3 className="testimonial__name">{title}</h3>
            <p className="testimonial__description">{description}
            </p>
          </SwiperSlide>
      );
    })}
        </Swiper>
      </section>
  );
};

export default Testimonials;