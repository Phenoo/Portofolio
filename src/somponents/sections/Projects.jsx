import React from 'react'
import Item1 from '../../assets/images/alba.png' 
import Item2 from '../../assets/images/food.png' 
import Item3 from '../../assets/images/quran.png'
import Item4 from '../../assets/images/refugee.png'
import Item5 from '../../assets/images/trial.png'
import Item6 from '../../assets/images/painting.webp'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsFillArrowUpRightSquareFill} from 'react-icons/bs'
import {FaYinYang} from 'react-icons/fa'

import { Link } from 'react-router-dom'

import {motion} from 'framer-motion'

const data = [
  {
    id: 1,
    url: "https://alba-sports.vercel.app/",
    name: 'desco.com',
    category: 'sports',
    desc: "This is website of a club called 'Desco.com'', it is authenticated with firebase where interested people can sign up and join",
    github: 'https://github.com/Phenoo/alba-sports',
    photo: Item1,
    tools: ["react","firebase", "charts"]
  },
  {
    id: 2,
    url: "https://saladdemo.netlify.app/",
    name: 'Salad',
    category: 'food',
    desc: 'This is a demo for a web-app `Salad` where customers can order food and it will be delivered to them.',
    github: 'https://github.com/Phenoo/Food-App',
    photo: Item2,
    tools: ["react", "styled-components"]
  },
  {
    id: 3,
    url: "https://readquranapp.netlify.app/",
    name: 'Quran-app',
    category: 'religion',
    desc: 'Alhamduliah, if you are muslim or interested in reading the quran, This is for you!. I made this using a quran API. You will discover alot about Quran with this web-app',
    github: 'https://github.com/Phenoo/quran-demo-app',
    photo: Item3,
    tools: ["react", "API", "styled-components"]

  },
  {
    id:' 04',
    url: "https:://lampnet-trial.app/",
    name: 'Lampnet solution trial',
    category: 'Trial project',
    desc: 'This was my trial project at Lampnet solutions for their internship program.',
    github: 'https://github/Phenoo/Lampnet-trial',
    photo: Item5,
    tools: ["react","sass"]
  },
  {
    id: 5,
    url: "https://refugeeaidg.netlify.app/",
    name: 'refugee aid group',
    category: 'charity',
    desc: 'This is for charity organization where you can receive newsa bout refugees, help refugees and donate to them',
    github: 'https://github.com/Phenoo/Refugeeaidgroup',
    photo: Item4,
    tools: ["HTML", "CSS", "Javascript"]

  },

]

const Projects = () => {
  return (
    <div className="projects">
      <section>
        <div className="desc">
          <div>
            <img src={Item6} alt="work" className='icon' />
          </div>
          <div>
            <h4>
              Take a look at my recent projects
            </h4>
            <p>
              These are some of my projects over my course as a web designer and developer
            </p>
          </div>
        </div>
        <div className="projects-container">
            {
              data.map((item, index) => {
                const {name, url, desc, github, photo, category, tools } = item;
                return (
                    <motion.div href={url} className="project-box" key={index} 
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}> 
                      <div>
                          <img src={photo} alt="albasports" />
                        </div>
                        <div>
                          <h6>
                            {name} <span>{category}</span>
                          </h6>
                          <p>{desc}</p>
                          <div className="tools">
                            {tools.map(tool => {
                              return <p className='tool-item'>#{tool}</p>
                            })}
                          </div>                          
                        </div>
                        <div className="svg">
                          <a href={github}>
                            <AiOutlineGithub />
                          </a>
                          <a href={url}>
                            <BsFillArrowUpRightSquareFill />
                          </a>
                        </div>
                    </motion.div>
                )
              })
            }
        </div>
        <div className="btn">
          <Link to='/works' className="see-more">
            see more
          </Link>
          <div className="yingyang">
            <FaYinYang />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects