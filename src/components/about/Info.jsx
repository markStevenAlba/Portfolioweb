import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";



const Info = ({data}) => {
  const [values, setValues] = useState([]);



  useEffect(() => {
    if(data && data.length !== 0){
      setValues(data);
    } 

  }, [data])

  return (
    <div
     className="about__info"
     >
       <Swiper 
       className="about__info__container container"
          loop={true}
          grabCursor={true}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          // slidesPerView={3}
          breakpoints={{
            576: {
              slidesPerView: 3
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            }
          }}
          modules={[Pagination]}
        >
        {values.map((a, index) => {
            return (
              <SwiperSlide 
              className="about__box" key={index}
               >
              <i className={`${a.icon} about__icon`}></i>
      
              <h3 className="about__title">{a.title}</h3>
              <span className="about__subtitle">{a.subtitle}</span>
            </SwiperSlide>
            )
          })
          

          }
        </Swiper>


         




     

      {/* <div className="about__box">
        <i className="bx bx-briefcase-alt" about__icon></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">48 + Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support" about__icon></i>
        
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div> */}
    </div>
  )
}

export default Info