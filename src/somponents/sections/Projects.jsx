import React from 'react'
import Item1 from '../../assets/images/alba.png' 
import Item2 from '../../assets/images/food.png' 
import Item3 from '../../assets/images/quran.png'
import Item4 from '../../assets/images/refugee.png'
import Item5 from '../../assets/images/heling.png'
import Item6 from '../../assets/images/painting.webp'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsFillArrowUpRightSquareFill} from 'react-icons/bs'
import {FaChevronRight} from 'react-icons/fa'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';

import { Autoplay } from 'swiper';
import { Link } from 'react-router-dom'

const data = [
  {
    id: 1,
    url: "https//alba-sports.vercel.app/",
    name: 'desco.com',
    category: 'sports',
    desc: "This is website of a club called 'Desco.com'', it is authenticated with firebase where interested people can sign up and join",
    github: 'https://github/Phenoo/alba-sports',
    photo: Item1,
  },
  {
    id: 2,
    url: "https//saladdemo.netlify.app/",
    name: 'Salad',
    category: 'food',
    desc: 'This is a demo for a web-app `Salad` where customers can order food and it will be delivered to them.',
    github: 'https://github/Phenoo/Food-App',
    photo: Item2,
  },
  {
    id: 3,
    url: "https//readquranapp.netlify.app/",
    name: 'Quran-app',
    category: 'religion',
    desc: 'Real sh** here, if you are muslim or interested in reading the quran, This is for you!. I made this using a quran API. Allah Akbar',
    github: 'https://github/Phenoo/quran-demo-app',
    photo: Item3,
  },
  {
    id: 4,
    url: "https//refugeeaidg.netlify.app/",
    name: 'refugee aid group',
    category: 'charity',
    desc: 'Real sh** here, if you are muslim or interested in reading the quran, This is for you!. I made this using a quran API. Allah Akbar',
    github: 'https://github/Phenoo/Refugeeaidgroup',
    photo: Item4,
  },
  {
    id: 5,
    url: "https//heling.netlify.app/",
    name: 'heling',
    category: 'decors',
    desc: 'This is a demo website for a interior decors agency named "Heling". You can see the designs. You can also serve as their portfolio. ',
    github: 'https://github/Phenoo/Heling',
    photo: Item5,
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
          <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              modules={[Autoplay]}
            className='swiper'
          >
            {
              data.map((item, index) => {
                const {name, url, desc, github, photo, category } = item;
                return (
                  <SwiperSlide key={index}>
                    <a href={url} className="project-box">
                      <div>
                          <img src={photo} alt="albasports" />
                        </div>
                        <div>
                          <h6>
                            {name} <span>{category}</span>
                          </h6>
                          <p>{desc}</p>
                        </div>
                        <div className="svg">
                          <a href={github}>
                            <AiOutlineGithub />
                          </a>
                          <a href={url}>
                            <BsFillArrowUpRightSquareFill />
                          </a>
                        </div>
                    </a>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <div className="btn">
          <Link to='/work' className="see-more">
            see more
          </Link>
          <button className="swiper-btn">
            swipe <FaChevronRight /><FaChevronRight />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Projects