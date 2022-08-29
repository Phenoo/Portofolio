import React from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import Item1 from '../../assets/images/we need to talk.webp'

import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
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
    <div className="contact-container">
        <div className="contact-details">
          <h6>
            contact details
          </h6>
          <div>
            <span>
              <AiOutlineMail />
            </span>
            <p>
            descometusah@gmail.com
            </p>
          </div>
          <div>
            <span>
              <AiOutlinePhone />
            </span>
            <p>
            +234 703 517 2208
          </p>
          </div>
          <div>
            <span>
              <GoLocation />
            </span>
            <p>
              Location: Enugu, Nigeria
            </p>
          </div>
        </div>
        <section className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label>
                What's your name?
              </label>
              <input type="text" placeholder="john doe" />
            </div>
            <div className="form-input">
              <label>
                What's your email?
              </label>
              <input type="email" placeholder="john@doe.com" />
            </div>
            <div className="form-input">
              <label>
                What's your name of your organization
              </label>
              <input type="text" placeholder="john doe plc" />
            </div>
            <div className="form-input">
              <label>
                What's services are you looking for?
              </label>
              <input type="text" placeholder="john doe" />
            </div>
            <div className="form-input">
              <label>
                Your message
              </label>
              <textarea name="" id="textarea" cols="50" rows="10" placeholder="Hello Desco, can you work on this?"></textarea>
            </div>
            <button type="submit" className="circle" >
              <p>send it</p>
            </button>
          </form>
        </section>
      </div>


  </section>
  )
}

export default Contact