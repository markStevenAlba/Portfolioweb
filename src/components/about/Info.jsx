import React, { useEffect, useState } from 'react'

const Info = ({data}) => {
  const [values, setValues] = useState([]);




  useEffect(() => {
    if(data && data.length !== 0){
      setValues(data);
    } 

  }, [data])

  return (
    <div className="about__info grid">
          {values.map((a, index) => {
            return (
              <div className="about__box">
              <i class={`${a.icon} about__icon`}></i>
      
              <h3 className="about__title">{a.title}</h3>
              <span className="about__subtitle">{a.subtitle}</span>
            </div>
            )
          })
          

          }




     

      {/* <div className="about__box">
        <i class="bx bx-briefcase-alt" about__icon></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">48 + Projects</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support" about__icon></i>
        
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div> */}
    </div>
  )
}

export default Info