    import React, { useState, useEffect } from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import WorkItems from './WorkItems'

const Works = ({data}) => {
    const [item, setItem] = useState({ name: 'All'});
    const [projects, setProjects] = useState([]);
    const [projectsNavs, setProjectsNav] = useState([]);
    const [active, setActive] = useState(0);
    
    useEffect(() => {
        if (item.name === "All"){
            setProjects(data);
        } else {
        const newProjects = data.filter((project) => {
                return project.description === item.name;
            });
            setProjects(newProjects);
        }

        setProjectsNav(projectsNav)
    }, [data, item, projectsNav]); 

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    };

    let projNavs =  projectsNavs.map((item, index) => {
        return (
            <span 
                onClick={(e) => {
                    handleClick(e, index);
                }}
                className={`${active === index ? 'active__work' : ''} work__item`}
                key={index}
                >
                {item.name}
            </span>
        )
})


  return (
    <div>
        <div className="work__filters">
            {projNavs}
        </div>
        
        <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id} />
                })}
        </div>
    </div>
  )
}

export default Works;