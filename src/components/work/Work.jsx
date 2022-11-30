import React, { useEffect, useState } from 'react'
import "./work.css"
import Works from './Works';

const Work = ({data}) => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        let { contents, profile } = data;

        let works = [];

        if(contents && contents.length !== 0) {
            let work = contents.find(a => a.type === 'works');
            works = work.contents;
        }

        setValues(works)

    }, [data])


    return (
        <section className='work section' id='portfolio'>
            <h2 className='section__title'>Portfolio</h2>
            
            <span className='section__subtitle'>
                Most recent works
            </span>
            
            <Works data={values}/>
        </section>
    );
};

export default Work;