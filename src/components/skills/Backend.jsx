import React from 'react'
import './skills.css';


const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend Developer</h3>
     
      <div className="skills__box">
      
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-php"></i>
          
            <div>
                <h3 className="skills__name">PHP</h3>
                <span className="skills__level">Intermediate</span>
            </div>
          </div>
          
          <div className="skills__data">
            <i className="bx bxl-nodejs"></i>
          
            <div>
                <h3 className="skills__name">Node JS</h3>
                <span className="skills__level">Basic</span>
            </div>
          </div>
          
          <div className="skills__data">
            <i className="bx bxl-python"></i>
          
            <div>
                <h3 className="skills__name">Python</h3>
                <span className="skills__level">Intermediate</span>
            </div>
          </div>
          
        </div>
        
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-postgresql"></i>
          
            <div>
                <h3 className="skills__name">PostgreSql</h3>
                <span className="skills__level">Intermediate</span>
            </div>
          </div>
          
          <div className="skills__data">
            <i className="bx bxl-firebase"></i>
          
            <div>
                <h3 className="skills__name">Firebase</h3>
                <span className="skills__level">Advanced</span>
            </div>
          </div>
          
          <div className="skills__data">
            <i className="bx bxl-mongodb"></i>
          
            <div>
                <h3 className="skills__name">MongoDB</h3>
                <span className="skills__level">Intermediate</span>
            </div>
          </div>
          
        </div>
        
      </div>
</div>
  );
};

export default Backend;