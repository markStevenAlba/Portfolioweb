import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
          <h1 className="footer__title">Bugtech Solutions</h1>
          
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link" rel="noopener"> About </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link" rel="noopener">Projects</a>
            </li>
            {/* <li>
              <a href="#testimonial" className="footer__link" rel="noopener">Testimonials</a>
            </li> */}
            <li>
              <a href="#qualification" className="footer__link" rel="noopener">Qualification</a>
            </li>
          </ul>
          
          {/* <div className="footer__social">
            <a href="https://www.instragram.com/" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
            </a>
      
            <a href="https://twitter.com/" className="footer__social-link" target="_blank">
            <i className="bx bxl-twitter"></i>
            </a>
       
            <a href="https://facebook.com/" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
            </a>
          </div> */}
          
          <span className="footer__copy">
            &#169; BugtechDevelopers.ltd | All Rights Reserved
          </span>
      </div>
    </footer>
  )
}

export default Footer;