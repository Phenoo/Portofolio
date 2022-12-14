import React from 'react'
import Typewriter from 'typewriter-effect'
import Item1 from '../../assets/images/what up fam.webp'
import { FaYinYang } from 'react-icons/fa'

const Loader = () => {
  
  return (
    <div className="loader-container">
      <div className="loader-div">
        <img src={Item1} alt="logo"  className="icon"/>
        <Typewriter
          onInit={(typewriter) => {
          typewriter.typeString("What do you have for me, amigo?")
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
      </div>
      <div className="yingyang">
        <FaYinYang />
      </div>
    </div>
  )
}

export default Loader