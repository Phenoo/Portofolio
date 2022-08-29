import React, { useEffect } from 'react'
import Collab from './somponents/Collab'
import Details from './somponents/Details'
import Home from './somponents/sections/Home'
import Projects from './somponents/sections/Projects'
import './styles/styles.scss'

import scrollreveal from 'scrollreveal'

const Main = () => {

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
      
      `,
      {
        opacity: 0,
        interval: 300
      }
    )
  },[])
  return (
    <>
      <Home />
      <Details />
      <Projects />
      <Collab />
    </>
  )
}

export default Main
