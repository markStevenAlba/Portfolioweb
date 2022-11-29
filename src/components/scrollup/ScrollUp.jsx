import React, { useState } from 'react'
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 80) scrollUp.classList.add("scroll-header");
    else scrollUp.classList.remove("scroll-header");
  });
  
  const [Toggle, showMenu] = useState(false);
  const [activeNave, setActiveNav] = useState("#home");
  
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp