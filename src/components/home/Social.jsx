import React from 'react'

const Social = ({data}) => {


  return (
    <div className= "home__social">
        {data.map((a, index) => {
          return (
        <a href={a.link} key={index} className="home__social-icon" target="_blank">
      <i className={`${a.icon}`}></i>
      </a>
          )
        })}
  
      

      {/* <a href="https://dribble.com/" className="home__social-icon" target="_blank">
      <i className="uil uil-facebook"></i>
      </a>
 
      <a href="https://github.com/" className="home__social-icon" target="_blank">
      <i className="uil uil-github-alt"></i>
      </a> */}
 
 
    </div>
  )
}

export default Social