import React from 'react'
import "./footer.css";
import { Slide } from "react-awesome-reveal";


const Footer = ({socials}) => {
  


  return (
    <footer className="footer">
      <div className="footer__container container">
    <Slide direction="up">
          <h1 className="footer__title">Bugtech Solutions</h1>
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link" rel="noopener"> About </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link" rel="noopener">Projects</a>
            </li>
            <li>
              <a href="#services" className="footer__link" rel="noopener">Services</a>
            </li>
            <li>
              <a href="#qualification" className="footer__link" rel="noopener">Qualification</a>
            </li>
          </ul>
          
          <div className="footer__social">
          {socials && socials.contents.map(a => {
          console.log(a)
            return (
              <a href={a.link} className="home__social-icon" target="_blank">
              <i className={a.icon}></i>
              </a>
            )
          })}
          </div>
          <span className="footer__copy">
            &#169; BugtechDevelopers.ltd | All Rights Reserved
          </span>
      </Slide>
          
      </div>
      
    </footer>
  )
}

export default Footer;