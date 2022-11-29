import React, { useEffect, useState } from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data'
import ScrollDown from './ScrollDown';

const Home = ({data = { contents: [], profile: {} }}) => {
  const [socials, setSocials] = useState([]);
  const [accountProfile, setProfile] = useState({});




  useEffect(() => {
    let { contents, profile } = data;

    let socialLinks = [];

    if(contents && contents.length !== 0){ 
    socialLinks = contents.find(a => a.type === 'socials');
    }

    if(profile){
      setProfile(profile)
    }

    setSocials(socialLinks.contents ? socialLinks.contents : [])
  }, [data])

  console.log(socials)
  console.log(accountProfile)
  console.log(data)

  return (
    <section className="home section" id="home">
      <div className= "home__container container grid">
        <div className= "home__content grid">
             <Social data={socials} />
             <div className= "home__img"></div>
             <Data data={accountProfile}/>
        </div>
         <ScrollDown />        
      </div>
    </section>
    
  )
}

export default Home