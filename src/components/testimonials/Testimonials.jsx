import React, { useState, useEffect } from "react";
import "./testimonial.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = ({data}) => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    let { contents } = data;
    let testimonial = {};
    
    if(contents && contents.length !== 0){
      testimonial = contents.find(a => a.type === 'testimonial');
      if(testimonial){
        setValues(testimonial.contents)
      }
    }
  }, [data])


  console.log(values)
  return (
      <section className="testimonial container section">
        <h2 className="section__title">{data.title}</h2>
        <span className="section__subtitle">{data.subtitle}</span>
    
        <Swiper className="testimonial_container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              576: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 48,
              }
            }}
            modules={[Pagination]}
        >
    {values.map(({id, image, title, description }) => {
      return (
          <SwiperSlide className="testimonial__card" key={id}>
            <img src={image} alt="" 
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