import React from 'react'

const Social = ({data}) => {


  return (
    <div className= "home__social">
        {data.map(a => {
          return (
        <a href={a.link} className="home__social-icon" target="_blank">
      <i class={`${a.icon}`}></i>
      </a>
          )
        })}
  
      

      {/* <a href="https://dribble.com/" className="home__social-icon" target="_blank">
      <i class="uil uil-facebook"></i>
      </a>
 
      <a href="https://github.com/" className="home__social-icon" target="_blank">
      <i class="uil uil-github-alt"></i>
      </a> */}
 
 
    </div>
  )
}

export default Social