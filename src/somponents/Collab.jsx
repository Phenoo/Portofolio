import React from 'react'
import {FaArrowLeft} from 'react-icons/fa'
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
        <div className="circle">
          <p>get in touch</p>
        </div>
        <div className="contact">
          <button>
            descometusah@gmail.com
          </button>
          <button>
            +234 901 970 3944
          </button>
        </div>
      </section>
    </div>
  )
}

export default Collab