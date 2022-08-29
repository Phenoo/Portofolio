import React from 'react'
import Item1 from '../../assets/images/haiii.webp'

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
        </div>
      </div>
    </section>
  )
}

export default Home