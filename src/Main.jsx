import React from 'react'
import Collab from './somponents/Collab'
import Details from './somponents/Details'
import Home from './somponents/sections/Home'
import Projects from './somponents/sections/Projects'
import './styles/styles.scss'


const Main = () => {
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
