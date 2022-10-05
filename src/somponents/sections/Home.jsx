import React from 'react'
import { FaYinYang } from 'react-icons/fa'
import Item1 from '../../assets/images/haiii.webp'
import {motion} from 'framer-motion'
import {useAnimations} from '../../utils/fetchData'
import BackgroundAnimation from './BackgroundAnimation'

const Home = () => {
  const { transition, textReveal, ImgReveal } = useAnimations();
  return (
    <section className="home">
      <div className="container">
        <div className="image">
          <motion.img
          variants={ImgReveal}
          initial='bananin'
          animate='bananon'
          transition={{...transition, delay: 0.5}}
          src={Item1} alt="bg" />
        </div>
        <div className="text">
          <motion.h1
            variants={textReveal}
            initial='bananin'
            animate='bananon'
            transition={{...transition, delay: 0.3}}
          >paschal eze
          </motion.h1>
          <motion.h4
            variants={textReveal}
            initial='bananin'
            animate='bananon'
            transition={{...transition, delay: 0.5}}
          >
            an interactive frontend developer
          </motion.h4>
          <motion.h6
            variants={textReveal}
            initial='bananin'
            animate='bananon'
            transition={{...transition, delay: 0.7}}
          >
            from nigeria
          </motion.h6>
        </div>
      </div>
      <div className="cage">
      <BackgroundAnimation />
      {/* <BackgroundAnimation /> */}
      </div>
      <div className="yingyang">
        <FaYinYang />
      </div>
    </section>
  )
}

export default Home