import React, { useState } from 'react';
import './forms.css';

export default function ProfileForm() {
    const [open, setOpen] = useState(false);


  return (
    <>
   <i class="uil uil-pen edit" onClick={() => setOpen(true)}></i>
    <div className={open ? "costum__modal active-modal"
    : "costum__modal" }>
     <div className="costum__modal-content">
       <i onClick={()=> setOpen(false)} className="uil uil-times
       costum__modal-close"></i>
       <h5 className="costum__modal-title">Product Designer</h5>
       <p className="costum__modal-descriptions">
         with more than 1 years of experience.
         Providing quality work to clients and companies.
         `-+`
       </p>

       <ul className="costum__modal-services grid">
         <li className="service__modal-services">
           <i className="uil uil-check-circle
           costum__modal-icon"></i>
           <p className="costum__modal-info">
             I develop the user interface. 
           </p>
         </li>

         <li className="service__modal-services">
           <i className="uil uil-check-circle
           costum__modal-icon"></i>
           <p className="costum__modal-info">
             Web page development. 
           </p>
         </li>

         <li className="costum__modal-services">
           <i className="uil uil-check-circle
           costum__modal-icon"></i>
           <p className="costum__modal-info">
            I create ux element interactions.
           </p>
         </li>

         <li className="costum__modal-services">
           <i className="uil uil-check-circle
           costum__modal-icon"></i>
           <p className="costum__modal-info">
            I position your company brand.
           </p>
         </li>

         <li className="costum__modal-services">
           <i className="uil uil-check-circle
           costum__modal-icon"></i>
           <p className="costum__modal-info">
            Design and mockups of products for companies.
           </p>
         </li>
       </ul>
     </div>
    </div>
    </>
  )
}
