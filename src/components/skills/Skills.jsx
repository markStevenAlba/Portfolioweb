import React, { useEffect, useState } from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { Slide } from "react-awesome-reveal";


import "swiper/css";
import "swiper/css/pagination";



const Skills = ({data = {}}) => {
  const [values, setValues] = useState({});
  const [frontEnd, setFE] = useState({});
  const [backEnd, setBE] = useState({});


  



  useEffect(() => {
    let { contents } = data;
    
    
    if(contents){
        let fe = contents.find(a => a.description === 'frontend');
        let be = contents.find(a => a.description === 'backend');
        if(fe){
          setFE(fe);
        }
        if(be){
          setBE(be)
        }
    }




    setValues(data);
  }, [data])

  return (
    <section className="skills section" id="skills">
              <Slide direction="up">
      <h2 className="section__title">{values.title}</h2>
      {/* <span className="section__subtitle">{values.subtitle}</span> */}
      <h1 className="section__subtitle">My <span className="green">Technical level</span> </h1>
      </Slide>

      {/* <Swiper className="skills__container container"
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
        </Swiper> */}
      <div className="skills__container  container">
      <div className="skills__content">
      <Frontend data={frontEnd} />

     </div>
       <div className="skills__content">
       <Backend data={backEnd}/>

      </div>
      </div>
    </section>
  );
};

export default Skills;