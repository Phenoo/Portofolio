import React from 'react'
import Img1 from '../../assets/images/painting.webp'
import Item1 from '../../assets/images/alba.webp' 
import Item2 from '../../assets/images/food.webp' 
import Item3 from '../../assets/images/quran.png'
import Item4 from '../../assets/images/refugee.png'
import Item5 from '../../assets/images/heling.png'
import Item6 from '../../assets/images/edd.png'
import Item7 from '../../assets/images/ahaz.png'
import Item8 from '../../assets/images/setra.png'
import Item9 from '../../assets/images/justice.png'
import Item10 from '../../assets/images/gossip.png'
import Item12 from '../../assets/images/godson.webp'
import Item13 from '../../assets/images/flower.png'
import Item14 from '../../assets/images/ozoude.png'
import Trial from '../../assets/images/trial.png'
import Item15 from '../../assets/images/woodwork.png'
import Item16 from '../../assets/images/shoes.webp'


import {AiOutlineGithub} from 'react-icons/ai'
import {BsFillArrowUpRightSquareFill} from 'react-icons/bs'
import {BsInfoCircle} from 'react-icons/bs'

import {motion} from 'framer-motion'


const data = [
  {
    url: "https://woodwork-eight.vercel.app/",
    name: 'Woodwork ',
    category: 'commerce',
    desc: "A shoe e-store is an online retailer that specializes in selling furntiure. The e-store typically displays a wide range of interior products organized into categories and subcategories for easy navigation. The website is designed to provide customers with a seamless shopping experience, featuring high-quality product images, and detailed descriptions",
    github: 'https://github.com/Phenoo/Woodwork',
    photo: Item15,
    tools: ["nextjs", "sanity", "tailwind css"]
  },
  {
    url: "https://descoart.vercel.app/",
    name: 'godson art',
    category: 'arts',
    desc: "This is an artist/painter portfolio where he shows his works and sell them too. I use sanity for the content management.",
    github: 'https://github.com/Phenoo/artist',
    photo: Item12,
    tools: ["react", "sanity", "paypal"]
  },
  {
    url: "https:://flower-topaz.vercel.app/",
    name: 'Flower Shop',
    category: 'shop',
    desc: 'This is an E-Shop where you can get your flowers, Content managed by sanity cms',
    github: 'https://github.com/Phenoo/Flower',
    photo: Item13,
    tools: ["react","sass", "sanity"]
  },
  {
    url: "https://descoshoes.vercel.app/",
    name: 'Desco Shoes ',
    category: 'commerce',
    desc: "An online retailer that specializes in selling sneakers of different brands.",
    github: 'https://github.com/Phenoo/Woodwork',
    photo: Item16,
    tools: ["nextjs", "css", "sanity"]
  },
    {
    url: "https://solar-blue.vercel.app/",
    github: "https://github.com/Phenoo/Solar-",
    name: 'Ozoude Solar',
    category: 'shop',
    desc: 'Owned by a solar that sells solar panels and other related products',
    github: 'https://github.com/Phenoo/Solar-',
    photo: Item14,
    tools: ["nextjs","sass", "sanity"]
    },
  {
    url: "https://alba-sports.vercel.app/",
    name: 'desco.com',
    category: 'sports',
    desc: "Real deal here, This is website of a club called 'Desco.com', it is authenticated with firebase where interested people can sign up and join. It also has a profile dashboard, You should enjoy this absolutely. Sign Up and Enjoy Desco.",
    github: 'https://github.com/Phenoo/alba-sports',
    photo: Item1,
    tools: ["react","firebase", "charts"]
  },
  {
    url: "https://saladdemo.netlify.app/",
    name: 'Salad',
    category: 'food',
    desc: 'This is a demo for a web-app `Salad` where customers can order food and it will be delivered to them. Aesthestically pleasing and good graphics. View!',
    github: 'https://github.com/Phenoo/Food-App',
    photo: Item2,
    tools: ["react","styled-components"]
  },
  {
    url: "https://readquranapp.netlify.app/",
    name: 'Quran-app',
    category: 'religion',
    desc: ' if you are muslim or interested in reading the quran, This is for you!. I made this using a quran API. It"s fully functional, Read your quran here, Allah Akbar',
    github: 'https://github.com/Phenoo/quran-demo-app',
    photo: Item3,
    tools: ["react","styled-components", "API"]
  },
  {
    url: "https:://lampnet-trial.vercel.app/",
    name: 'Lampnet solution trial',
    category: 'Trial project',
    desc: 'This was my trial project at Lampnet solutions for their internship program.',
    github: 'https://github.com/Phenoo/Lawfirm',
    photo: Trial,
    tools: ["react","sass"]
  },
  {
    url: "https://justicehere.netlify.app/",
    name: 'justice',
    category: 'law & judiciary',
    desc: 'This is a website where you can get services of lawyers and even get free consultation. No one can intimidate and go scot-free as far this exists.',
    github: 'https://github.com/Phenoo/Lawfirm',
    photo: Item9,
    tools: ["react","sass"]
  },
  {
    url: "https://refugeeaidg.netlify.app/",
    name: 'refugee aid group',
    category: 'charity',
    desc: 'This is for charity organization where you can receive newsa bout refugees, help refugees and donate to them',
    github: 'https://github.com/Phenoo/Refugeeaidgroup',
    photo: Item4,
    tools: ["HTML", "SASS", "Javascript"]
  },
  {
    url: "https://heling.netlify.app/",
    name: 'heling',
    category: 'decors',
    desc: 'This is a demo website for a interior decors agency named "Heling". You can see the designs. You can also serve as their portfolio. ',
    github: 'https://github.com/Phenoo/Heling',
    photo: Item5,
    tools: ["HTML", "CSS", "Javascript"]
  },
  {
    url: "https://edd-courses.vercel.app",
    name: 'edd courses',
    category: 'education',
    desc: 'This is a demo website for a company that offers online courses. It was made with HTML, CSS, and JavaScript ',
    github: 'https://github.com/Phenoo/edd-courses',
    photo: Item6,
    tools: ["HTML", "CSS", "Javascript"]

  },
  {
    url: "https://ahaz.vercel.app/",
    name: 'Ahaz',
    category: 'fashion',
    desc: 'This is a fashion brand named Ahaz. ',
    github: 'https://github.com/Phenoo/Ahazz',
    photo: Item7,
    tools: ["HTML", "CSS", "Javascript"]
  },
  {
    url: "https://setra-resturant.vercel.app/",
    name: 'setra resturant',
    category: 'food',
    desc: 'This is for a resturant where customers can go and know more about them and their services',
    github: 'https://github.com/Phenoo/setra-resturant',
    photo: Item8,
    tools: ["HTML", "CSS", "Javascript"]
  },
  {
    category: 'news',
    url: "https://desgossip.netlify.app/",
    name: 'DesGossip',
    desc: 'This is a news outlet where you can browse about current news happening around the world. Note the version only request 10 requests per day so do not be suprised when it blanks.',
    github: 'https://github.com/Phenoo/DesGossip',
    photo: Item10,
    tools: ["react", "sass", "API"]
  },
]

const Work = () => {
  return (
    <section className='work'>
      <img src={Img1} alt="work"  className="icon"/>
      <div className="work-container">
        <h4>
          behold my projects
        </h4>
        <p className="enjoy">Enjoy!</p>
        <div className="work-section">
          {
            data.map((item, index) => {
              const {name, desc, photo, url, category, github, tools} = item
              return (
                <motion.div href={url} className="works" key={index} initial={{opacity: 0}}
                whileInView={{opacity: 1}} >
                  <div className="work-item">
                    <h2>
                      0{index + 1}`
                    </h2>
                    <h1>
                      {name} <span> {category}</span>
                    </h1>
                    <p>{desc}</p>
                  </div>
                  <div className="tools">
                    <h6>technologies:</h6>
                            {tools?.map(tool => {
                              return <p className='tool-item'>#{tool}</p>
                            })}
                          </div>   
                  <div className="work-item">
                    <a href={url}>
                      <img src={photo} alt="work" />
                    </a>
                    <div className="direct-links">
                    <a href={`${github}`} target='_blank' rel='noreferrer' aria-label={`${github}`}>
                        <AiOutlineGithub />
                      </a>
                      <a href={`${url}`} target='_blank' rel='noreferrer' aria-label={`${url}`}>
                        <BsFillArrowUpRightSquareFill />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
        <br />
        <br />
        <p className="foot">
          <BsInfoCircle />
          Some of my works are templates from 'uihut.com', dribble.com and awwkwards</p>
      </div>
    </section>
  )
}


export default Work

