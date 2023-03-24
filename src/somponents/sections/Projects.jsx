import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsFillArrowUpRightSquareFill} from 'react-icons/bs'
import {FaYinYang} from 'react-icons/fa'

import { Link } from 'react-router-dom'

import {motion} from 'framer-motion'


import Img1 from '../../assets/images/painting.webp'
import Item1 from '../../assets/images/alba.webp' 
import Item2 from '../../assets/images/food.webp' 
import Item12 from '../../assets/images/godson.webp'
import Item13 from '../../assets/images/flower.png'
import Item14 from '../../assets/images/ozoude.png'
import Item15 from '../../assets/images/woodwork.png'

const data = [
  {
    url: "https://woodwork-eight.vercel.app/",
    name: 'Woodwork ',
    category: 'commerce',
    desc: "An online retailer that specializes in selling furntiure. It typically displays a wide range of interior products organized into categories for easy navigation.",
    github: 'https://github/Phenoo/Woodwork',
    photo: Item15,
    tools: ["nextjs", "tailwind css", "sanity"]
  },
  {
    url: "https://descoart.vercel.app/",
    name: 'godson art',
    category: 'arts',
    desc: "This is an artist/painter portfolio where he shows his works and sell them too. I use sanity for the content management.",
    github: 'https://github/Phenoo/artist',
    photo: Item12,
    tools: ["react", "sanity", "paypal"]
  },
  {
    url: "https:://flower-topaz.vercel.app/",
    name: 'Flower Shop',
    category: 'shop',
    desc: 'This is an E-Shop where you can get your flowers, Content managed by sanity cms',
    github: 'https://github/Phenoo/Flower',
    photo: Item13,
    tools: ["react","sass", "sanity"]
  },
    {
    url: "https://solar-blue.vercel.app/",
    name: 'Ozoude Solar',
    category: 'shop',
    desc: 'Owned by a solar company that sells solar panels and other related products',
    github: 'https://github/Phenoo/Solar-',
    photo: Item14,
    tools: ["nextjs","sass", "sanity"]
    },
  {
    url: "https://alba-sports.vercel.app/",
    name: 'desco.com',
    category: 'sports',
    desc: "This is website of a club called 'Desco.com', it is authenticated with firebase where interested people can sign up and join. It also has a profile dashboard, You should enjoy this absolutely. Sign Up and Enjoy Desco.",
    github: 'https://github/Phenoo/alba-sports',
    photo: Item1,
    tools: ["react","firebase", "charts"]
  },
  {
    url: "https://saladdemo.netlify.app/",
    name: 'Salad',
    category: 'food',
    desc: 'This is a demo for a web-app `Salad` where customers can order food and it will be delivered to them. Aesthestically pleasing and good graphics. View!',
    github: 'https://github/Phenoo/Food-App',
    photo: Item2,
    tools: ["react","styled-components"]
  },

]

const Projects = () => {
  return (
    <div className="projects">
      <section>
        <div className="desc">
          <div>
            <img src={Img1} alt="work" className='icon' />
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