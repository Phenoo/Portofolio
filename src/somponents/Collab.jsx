import React from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Item1 from '../assets/images/lets discuss.webp'
const Collab = () => {
  return (
    <div className="bg-dark">
      <section className="collab-container">
        <img src={Item1} alt="collab" className="icon" />
        <div className="collab">
          <div className="collab-part">
            <h4>
              let's work together
            </h4>
          </div>
          <div>
            <FaArrowLeft />
          </div>
        </div>
        <div className="divider"></div>
        <Link to='/contact' className="circle">
          <p>get in touch</p>
        </Link>
        <div className="contact">
          <a href="mailto:descometusah@gmail.com" className="collab-link">
            descometusah@gmail.com
          </a>
          <a href="https://wa.me/2349019703944?text=hey+desco+__"  className="collab-link">
            +234 901 970 3944
          </a>
        </div>
      </section>
    </div>
  )
}

export default Collab