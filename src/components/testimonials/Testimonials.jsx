import React from "react";
import "./testimonial.css";
import { Data } from "./Data";
//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper React styles
// import "swiper/css";
// import "swiper/css/paginations";

//import required modules
 import { Pagination } from "swiper";


const Testimonials = () => {
  return (
  <section className="testimonial container section">
    <h2 className="section__title">My clients say</h2>
    <span className="section__subtitle">Testimonial</span>

    <div className="testimonial_container">
    {Data.map(({id, image, title, description }) => {
      return (
        <div className="testimonial__card" key={id}>
          <img src={image} alt="" 
          className="testimonial__img" />

          <h3 className="testimonial__name">{title}</h3>
          <p className="testimonial__description">{description}
          </p>
        </div>
      );
    })}
    </div>
  </section>
  
  );
};

export default Testimonials;