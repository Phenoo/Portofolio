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
        <h4>
          Introduction
        </h4>
        <br />
        <p>Hello and welcome to my portfolio as a frontend developer. My name is Eze Paschal, and I am a skilled frontend developer with 3 years of experience. I have worked on a variety of projects, ranging from small websites to large web applications. In this portfolio, I will showcase my skills, experience, and projects that I have worked on.
          I look to learn other programming languages and stacks as the journey continues. I have worked with small-scale business where i gathered
          experience in sales and marketing. Fully in support in the idea of working remotely. I can also work with any time-zone 
        </p>

          <div className="tools-container">
          <h4>
            technologies I'm good at
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
          <br />
        <br />
          <h4>
            Conclusion
          </h4>
        <p>
        As a frontend developer, I am passionate about creating intuitive and engaging user interfaces. I have the technical skills, experience, and creativity to create effective and efficient user experiences. If you are looking for a frontend developer for your next project, please don't hesitate to <span><a href="mailto:descometusah@gmail.com">contact me</a></span>. Thank you for taking the time to review my portfolio.
        </p>
        <div className="resume">
          <a href="../../assets/ezepaschalcv.docx" download='descoresume'>
            download resume
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


