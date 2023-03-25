import React,{useState, useEffect} from 'react';
import "./services.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

//Components
import Service from '../Service/Services';


const Services = ({data}) => {
   const [toggleState, setToggleState] = useState(0);
   const [values, setValues] = useState({});
   
    const toggleTab =(index) => {
         setToggleState(index);
    }

  
  
    useEffect(() => {
      console.log(data)
          setValues(data);
    }, [data])
  
  

    return (
     <section className="services section" id="services">
      <Service toggleTab={toggleTab} data={data}/>     
     {/* <div> */}
     
      {/* <h2 className="section__title">{values.title}</h2>
        <span className="section__subtitle">{values.subtitle}</span>
      <div className="services__container container grid"> */}

      {/* {contents && contents.map((a, index) => {
        return (
      <div className="services__content" key={index}>
      <div >
        <i className={`${a.icon} services__icon`}></i>
        <h3 className="services__title">{a.title}</h3>
      </div>
      
      <span className="services__button"
        onClick={() => toggleTab(1)}
      >View More
        <i className="uil uil-arrow-right services__button-icon">
        </i>
      </span>
      
      <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
        <div className="services__modal-content">
          <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
          
          <h3 className="services__modal-title">Product Designer</h3>
          <p className="services__modal-description">
            Service with more than 3 years of experience.
            Providing quality work to clients and Companies.
          </p>
          <br />
          <br />
          
          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I Develop The User Interface
              </p>
            </li>
            
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Web Page Development
              </p>
            </li>
            
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I Create UX Element Interactions
              </p>
            </li>
            
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I Position Your Company Brand
              </p>
            </li>
            
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Design and Mockups of Products for Companies.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>)
            }) } */}
     {/* </div> */}
      {/* </div> */}
      
      
  </section>
  );
};

export default Services;