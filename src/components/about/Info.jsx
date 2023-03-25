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
       className="about__info__container"
          loop={true}
          grabCursor={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          slidesPerView={(values.length >= 3 || values.length === 0) ? 3 : values.length}
       
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
    </div>
  )
}

export default Info