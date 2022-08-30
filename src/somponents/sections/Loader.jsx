import React from 'react'
import Typewriter from 'typewriter-effect'
import Item1 from '../../assets/images/hi.webp'
import { FaYinYang } from 'react-icons/fa'

const Loader = () => {
  
  return (
    <div className="loader-container">
      <img src={Item1} alt="logo"  className="icon"/>
      <Typewriter
        onInit={(typewriter) => {
        typewriter.typeString("What do you have for me, dawg?")
        .callFunction(() => {
          console.log("What do you have for me")
        })
        .pauseFor(1000)
        .deleteAll()
        .callFunction(() => {
          console.log("What do you have for me")
        })
        .start();
      }}
    />
    <div className="yingyang">
      <FaYinYang />
    </div>
    </div>
  )
}

export default Loader