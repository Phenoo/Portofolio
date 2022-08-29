import React from 'react'
import Item1 from '../../assets/images/hi.webp'

import {SiFirebase, SiNotion} from 'react-icons/si'
import {DiGit} from 'react-icons/di'
import {FaReact, FaHtml5, FaCss3, FaJs, FaYinYang} from 'react-icons/fa'
// import ParticlesComponent from './ParticlesComponent'

const About = () => {
  return (
    <section className='about-section'>
      <img src={Item1} alt="bg" className="icon"/>
      <div className="about-container">
        <p>My name is Paschal Eze AKA Desco4PF. I am afrontend developer currently based in Enugu, Nigeria. I am student of Computer Science
          at University of Nigeria, Nsukka. I love solving problems through
          simplifying the complexity and combining insightful research with intuitive design
          I build scalable websites from scartch that fit seamlessy with design. 
          I have an obsession of creating aesthetically pleasing yet efficient web-apps.
          I have two years of experience of web development and programming.
          I look to learn other programming languages and stacks as the journey continues. I have worked with small-scale business where i gathered
          experience in sales and marketing. Fully in support in the idea of working remotely. I can also work with any time-zone
                    <br />
          <br />
          <br />
          <br />
          I am also a big fan of Blockchain and Data Science. I watch football and combat sports when I am not coding. I have massive love for music,
          i listen to all types of music but highlife and hip-hop
          tops the list. I am good writer, you can check my few medium posts.
        </p>
        <div className="tools-container">
          <h4>
            technologies I'm good in
          </h4>
          <div className="tools">
            <div className="item html">
              <FaHtml5 />
              <h6>
                HTML
              </h6>
            </div>
            <div className="item css">
              <FaCss3 />
              <h6>
                CSS
              </h6>
            </div>
            <div className="item firebase">
              <SiFirebase />
              <h6>Firebase</h6>
            </div>
            <div className="item git">
              <DiGit />
              <h6>
                Git version
              </h6>
            </div>
            <div className="item java">
              <FaJs />
              <h6>
                Javascript
              </h6>
            </div>
            <div className="item notion">
              <SiNotion />
              <h6>
                Notion
              </h6>
            </div>
            <div className="item react">
              <FaReact />
              <h6>React</h6>
            </div>
          </div>
        </div>
        <div className="resume">
          <a href="../../assets/orig-ezeresume.pdf" download='descoresume'>
            get resume
          </a>
        </div>
        <div className='about-yingyang'>
          <FaYinYang />
        </div>
      </div>


    </section>
  )
}

export default About


