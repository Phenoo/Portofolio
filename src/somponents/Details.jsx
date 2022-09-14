import React from 'react'
import {Link} from 'react-router-dom'


const Details = () => {
  return (
    <section>
      <div className="detail-container">
        <div className="detail-text">
          <p>
            I enjoy working with agencies and enthusiastic people who want to solve problems through
            beautiful design and experiences 
            helping brands stand out in the digital era. together we set the new staus quo.  no nonsense, always on the cutting edge. I'm that guy
          </p>
        </div>
        <div className="detail-text">
          <p>
            the combination of pasion for design, code and interaction positions me a unique place in the web development world.
          </p>
          <Link to='/about'>
            <div className="circle">
              <p>about me</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Details