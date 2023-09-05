import React, { useEffect, useState } from 'react'
import '../styles/style.css';
import Typewriter from "typewriter-effect";

function Text({text}) {
  

  return (
    <Typewriter
      options={{
        strings: text,
        autoStart: true,
        delay: 150,
        loop: true,
        deleteSpeed: 50,
        pauseFor: 150
      }}
    />
  )
}

export default Text