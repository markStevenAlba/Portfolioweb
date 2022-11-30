import React,{useState} from 'react';
import "./services.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Services = () => {
   const [toggleState, setToggleState] = useState()
    const toggleTab =(index) => {
         setToggleState(index);
    }
  return (
   <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer 🙄</span>
         <Swiper className="services__container container"
          loop={true}
          grabCursor={true}
          spaceBetween={15}
          pagintaion={{
            clickable: true,
          }}
          slidesPerView={2}
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
          
       <SwiperSlide >
       <div className="services__content">
      <div>
        <i className="uil uil-web-grid services__icon"></i>
        <h3 className="services__title">Web<br />Development</h3>
      </div>

         <span className="services__button" onClick={() =>
        toggleTab(1)}>
          View More
          <i className="uil uil-arrow-right
         services__button-icon"></i></span>
 
         <div className={toggleState === 1 ? "services__modal active-modal"
         : "services__modal" }>
          <div className="services__modal-content">
            <i onClick={()=> toggleTab(0)} className="uil uil-times
            services__modal-close"></i>

            <h3 className="services__modal-title">Product Designer</h3>
            <p className="services__modal-descriptions">
              with more than 1 years of experience.
              Providing quality work to clients and companies.
            </p>

            <ul className="services__modal-services grid">
              <li className="service__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                  I develop the user interface. 
                </p>
              </li>

              <li className="service__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                  Web page development. 
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 I create ux element interactions.
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 I position your company brand.
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
         </div>
       </div>
      </SwiperSlide>
      <SwiperSlide >
      <div className="services__content">
      <div>
        <i className="uil uil-arrow services__icon"></i>
        <h3 className="services__title">IT <br/> Support
        </h3>
      </div>

         <span className="services__button" onClick={() =>
          toggleTab(1)}>
          View More
          <i className="uil uil-arrow-right
         services__button-icon"></i></span>

         <div className={toggleState === 1 ? "services__modal active-modal"
         : "services__modal" }>
          <div className="services__modal-content">
            <i onClick={()=> toggleTab(0)} className="uil uil-times
            services__modal-close"></i>

            <h3 className="services__modal-title">Ux/Ui Designer</h3>
            <p className="services__modal-descriptions">
              with more than 2 years of  experience.
              Providing quality work to clients and companies.
            </p>

            <ul className="services__modal-services grid">
              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                  I develop the user interface. 
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                  Web page development. 
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 I create ux element interactions.
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 I position your company brand.
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
         </div>
       </div>
        </SwiperSlide>
        <SwiperSlide >
      <div className="services__content">
      <div>
        <i className="uil uil-chart  services__icon"></i>
        <h3 className="services__title">Data<br />Analytics
        </h3>
      </div>

         <span className="services__button" onClick={() =>
          toggleTab(1)}>
          View More
          <i className="uil uil-arrow-right
         services__button-icon"></i></span>

         <div className={toggleState === 1 ? "services__modal active-modal"
         : "services__modal" }>
          <div className="services__modal-content">
            <i onClick={()=> toggleTab(0)} className="uil uil-times
            services__modal-close"></i>

            <h3 className="services__modal-title">Ux/Ui Designer</h3>
            <p className="services__modal-descriptions">
              with more than 2 years of  experience.
              Providing quality work to clients and companies.
            </p>

            <ul className="services__modal-services grid">
              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                  I develop the user interface. 
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                  Web page development. 
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 I create ux element interactions.
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 I position your company brand.
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
         </div>
       </div>
        </SwiperSlide>
        </Swiper>
  
         <div className={toggleState === 1 ? "services__modal active-modal"
         : "services__modal" }>
          <div className="services__modal-content">
            <i onClick={()=> toggleTab(0)} className="uil uil-times
            services__modal-close"></i>

            <h3 className="services__modal-title">Ux/Ui Designer</h3>
            <p className="services__modal-descriptions">
              with more than 2 years of  experience.
              Providing quality work to clients and companies.
            </p>

            <ul className="services__modal-services grid">
              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                  I develop the user interface. 
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                  Web page development. 
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 I create ux element interactions.
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 I position your company brand.
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
         </div>
  </section>
  );
};

export default Services;