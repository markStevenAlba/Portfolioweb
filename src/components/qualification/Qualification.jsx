import React, { useEffect, useState } from "react";
import "./qualification.css";

const Qualification = ({data}) => {
  const [toggleState, setToggleState] = useState(1);
  const [values, setValues] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);


  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    let { contents } = data;
    let qualification = {};
    
    
    if(contents && contents.length !== 0){
      qualification = contents.find(a => a.type === 'qualification');
      let qContents = qualification.contents;

      if(qContents && qContents.length !== 0){


        let edu = qContents.filter(a => a.type === 'education');
        
        let exp = qContents.filter(a => a.type === 'experience');



        setEducation(edu);
        setExperience(exp)




      }
    
    }

    setValues(qualification)
  }, [data])


  console.log(education)
  console.log(experience)


  return (
    <section className="qualification section">
      <h2 className="section__title">{values.title}</h2>
      <span className="section__subtitle">{values.subtitle}</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            &nbsp;<i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            &nbsp;Education&nbsp;
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            &nbsp;{" "}
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {"  "}&nbsp;Experience&nbsp;
          </div>
        </div>

        <div className="qualification__sections container">
          {/* EDUCATION */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
     {education.map((a, index) => {
              console.log(index % 2==0)
              return (
                <div className="qualification__data">
                   {index % 2!=0 && ( <>  <div></div>  <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line "></span>
              </div></>)}

                <div>
                  <h3 className="qualification__title">{a.title}</h3>
                  <span className="qualification__subtitle">
                   {a.subtitle}
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> {a.description}
                  </div>
                </div>
                {index % 2==0 && (   <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line "></span>
              </div>)}
              </div>
              )
            })}
          </div>

          {/* EXPERIENCE */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {experience.map((a, index) => {
              console.log(index % 2==0)
              return (
                <div className="qualification__data">
                   {index % 2==0 && ( <>  <div></div>  <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line "></span>
              </div></>)}

                <div>
                  <h3 className="qualification__title">{a.title}</h3>
                  <span className="qualification__subtitle">
                   {a.subtitle}
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> {a.description}
                  </div>
                </div>
                {index % 2!=0 && (   <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line "></span>
              </div>)}
              </div>
              )
            })}
        

            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line "></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">Apple - Poland</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">
                  Youtube - Australia
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line "></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line "></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">Google - USA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
