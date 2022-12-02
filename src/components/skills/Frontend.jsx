import { useState, useEffect } from 'react';
import './skills.css';


const Frontend = ({data = {}}) => {
    let [values, setValues] = useState([]);


    useEffect(() => {
      let { contents } = data;
      
      
      if(contents && contents.length !== 0){
        setValues(contents);
      }
  
  
    }, [data])


let middle = Math.floor(values.length / 2);

let left = values.slice(0, middle).map((a, index) => {
  return (
    <div className="skills__data" key={index}>
    <i className={a.icon}></i>
    <div>
        <h3 className="skills__name">{a.title}</h3>
        <span className="skills__level">{a.subtitle}</span>
    </div>
  </div>
  )
});


let right = values.slice(middle).map((a, index) => {
  return (
    <div className="skills__data" key={index}>
    <i className={a.icon}></i>
    <div>
        <h3 className="skills__name">{a.title}</h3>
        <span className="skills__level">{a.subtitle}</span>
    </div>
  </div>
  )
});


  return (
    <div className="skills__content">
      <h3 className="skills__title">{data.title}</h3>
      
      <div className="skills__box">
      
        <div className="skills__group">
            {left}
        </div>
        
        <div className="skills__group">
          {right}
          
        </div>
        
      </div>
    </div>
  )
}

export default Frontend