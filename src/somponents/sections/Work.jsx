import React from 'react'
import Img1 from '../../assets/images/painting.webp'
import Item1 from '../../assets/images/alba.png' 
import Item2 from '../../assets/images/food.png' 
import Item3 from '../../assets/images/quran.png'
import Item4 from '../../assets/images/refugee.png'
import Item5 from '../../assets/images/heling.png'
import Item6 from '../../assets/images/edd.png'
import Item7 from '../../assets/images/ahaz.png'
import Item8 from '../../assets/images/setra.png'
import Item9 from '../../assets/images/justice.png'
import Item10 from '../../assets/images/gossip.png'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsFillArrowUpRightSquareFill} from 'react-icons/bs'

import ScrollReveal from 'scrollreveal'

ScrollReveal().reveal('.works')
const data = [
  {
    id: '01',
    url: "https://alba-sports.vercel.app/",
    name: 'desco.com',
    category: 'sports',
    desc: "Real sh** here, This is website of a club called 'Desco.com', it is authenticated with firebase where interested people can sign up and join. It also has a profile dashboard, You should enjoy this absolutely",
    github: 'https://github/Phenoo/alba-sports',
    photo: Item1,
  },
  {
    id: '02',
    url: "https://saladdemo.netlify.app/",
    name: 'Salad',
    category: 'food',
    desc: 'This is a demo for a web-app `Salad` where customers can order food and it will be delivered to them. Aesthestically pleasing and good graphics. View!',
    github: 'https://github/Phenoo/Food-App',
    photo: Item2,
  },
  {
    id: '03',
    url: "https://readquranapp.netlify.app/",
    name: 'Quran-app',
    category: 'religion',
    desc: ' if you are muslim or interested in reading the quran, This is for you!. I made this using a quran API. It"s fully functional, Read your quran here, Allah Akbar',
    github: 'https://github/Phenoo/quran-demo-app',
    photo: Item3,
  },
  {
    id:' 04',
    url: "https:://justicehere.netlify.app/",
    name: 'justice',
    category: 'law & judiciary',
    desc: 'This is a website where you can get services of lawyers and even get free consultation. No one can intimidate and go scot-free as far this exists.',
    github: 'https://github/Phenoo/Lawfirm',
    photo: Item9,
  },
  {
    id: '05',
    url: "https://refugeeaidg.netlify.app/",
    name: 'refugee aid group',
    category: 'charity',
    desc: 'Real sh** here, if you are muslim or interested in reading the quran, This is for you!. I made this using a quran API. Allah Akbar',
    github: 'https://github/Phenoo/Refugeeaidgroup',
    photo: Item4,
  },
  {
    id: '06',
    url: "https://heling.netlify.app/",
    name: 'heling',
    category: 'decors',
    desc: 'This is a demo website for a interior decors agency named "Heling". You can see the designs. You can also serve as their portfolio. ',
    github: 'https://github/Phenoo/Heling',
    photo: Item5,
  },
  {
    id:' 07',
    url: "https://heling.netlify.app/",
    name: 'edd courses',
    category: 'education',
    desc: 'This is a demo website for a company that offers online courses. It was made with HTML, CSS, and JavaScript ',
    github: 'https://github/Phenoo/edd-courses',
    photo: Item6,
  },
  {
    id: '08',
    url: "https://ahaz.vercel.app/",
    name: 'Ahaz',
    category: 'fashion',
    desc: 'This is a fashion brand named Ahaz. ',
    github: 'https://github/Phenoo/Ahazz',
    photo: Item7,
  },
  {
    id: '09',
    url: "https://setra-resturant.vercel.app/",
    name: 'setra resturant',
    desc: 'This is for a resturant where customers can go and know more about them and their services',
    github: 'https://github/Phenoo/setra-resturant',
    photo: Item8,
  },
  {
    id: '10',
    url: "https://desgossip.netlify.app/",
    name: 'DesGossip',
    desc: 'This is a news outlet where you can browse about current news happening around the world. Note the version only request 10 requests per day so do not be suprised when it blanks.',
    github: 'https://github/Phenoo/DesGossip',
    photo: Item10,
  },
]

const Work = () => {
  return (
    <section>
      <img src={Img1} alt="work"  className="icon"/>
      <div className="work-container">
        <h4>
          behold my projects
        </h4>
        <p className="enjoy">Enjoy!</p>
        <div className="work-section">
          {
            data.map((item, index) => {
              const {name, desc, photo, url, github, id} = item
              return (
                <a href={url} className="works" key={index}>
                  <div className="work-item">
                    <h2>
                      {id}`
                    </h2>
                    <h1>
                      {name}
                    </h1>
                    <p>{desc}</p>
                  </div>
                  <div className="work-item">
                    <img src={photo} alt="work" />
                    <div className="direct-links">
                    <a href={`${github}`}>
                        <AiOutlineGithub />
                      </a>
                      <a href={`${url}`}>
                        <BsFillArrowUpRightSquareFill />
                      </a>
                    </div>
                  </div>
                </a>
              )
            })
          }
        </div>
        <p className="foot">Some of my works are templates from 'uihut.com', dribble.com and awwkwards</p>
      </div>
    </section>
  )
}


export default Work

