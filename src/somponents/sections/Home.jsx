import React from 'react'
import Item1 from '../../assets/images/haiii.webp'
import Item2 from '../../assets/images/quality content.webp'
import ParticlesComponent from './ParticlesComponent'

const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="image">
          <img src={Item1} alt="bg" />
        </div>
        <div className="text">
          <h1>paschal eze</h1>
          <h4>
            an interactive frontend developer
          </h4>
          <h6>
            from nigeria
          </h6>
          <img src={Item2} alt="bg" className="icon"/>
        </div>
        <ParticlesComponent />
      </div>
    </section>
  )
}

export default Home