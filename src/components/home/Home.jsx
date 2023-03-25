import React, { useEffect, useState } from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data'
import ScrollDown from './ScrollDown';

import { Slide } from "react-awesome-reveal";

const Home = ({profile, socials}) => {
  const [profileSocials, setSocials] = useState([]);
  const [accountProfile, setProfile] = useState({});

  useEffect(() => {


    if(profile){
      setProfile(profile)
    }

    if(socials && socials.contents){
      setSocials(socials.contents)
    }
  }, [profile, socials])

  return (
    <section className="home section" id="home">
      <div className= "home__container container grid">
        <div className="home__content grid">
        <div style={{
                background: `url(${accountProfile.cover})`,
                }}
                className="home__img" 
                ></div>
    <Slide direction="right">
             <Social data={profileSocials} />
    </Slide>
    <Data data={accountProfile}/>
             
        </div>

         <ScrollDown />        
      </div>
    </section>
  )
}

export default Home


