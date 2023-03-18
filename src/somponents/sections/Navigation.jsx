import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai'
import { FaTwitter, FaMedium, FaWhatsapp, FaBars, FaTimes} from 'react-icons/fa'

import Item1 from '../../assets/images/20086735.png'
import Item2 from '../../assets/images/quality content.webp'

const Container = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem 0;
position: relative;
 
#icon, #home, button{
  display: none;
}

h4{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-family: "Jost";
  font-size: 1.5rem;
  text-transform: uppercase;
  z-index: 100;
  @media(max-width: 31em){
    font-size: 1.25rem;
  }
}

#home{
  @media(max-width: 57em){
    display: flex;
  }
}

.nav-icon{
  margin-top: 7px;
  width: 20px;
}

.active{
  color: #f53b3b;
}

button{
  background: none;
  @media(max-width: 57em){
    display: flex;
    z-index: 1000;
    svg{
      color: #ddd;
      font-size: 1.3rem;
    }
  }
}





`


const MenuList = styled.div`

.social{
  display: none;
}

li{
  font-size: 1.5rem;
}
@media(max-width: 57em){
  display: flex;
  position: fixed; 
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  max-height: 100vh;
  overflow-y: hidden;
  z-index: 10;
  margin: 0;
  padding: 0;
  padding: 3rem 2rem;
  background-color: #111;
  transform: ${props => props.click ? 'translateX(0)' : 'translateX(1000%)'};
  transition: all 0.6s ease;

  .social{
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: row;

    li{
      font-size: 1rem;
    }
  }
  #icon{
    display: flex;
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 20px;
    right: 80px;
    @media(max-width: 25em){
      width: 30px;
      height: 30px;
    }

  }
}

ul{
  display: flex;
  gap: 1rem;

  @media(max-width: 57em){
    flex-direction: column;
  }
}

li{
  text-transform: uppercase;
  font-family: "Poppins";
  transition: 300ms ease;

  &:hover {
    color: #f53b3b;
    transition: 300ms ease;
  }

  @media(max-width: 57em){
    font-size: 2rem;

    @media(max-width: 25em){
      font-size: 1.5rem;
    }
  }

}

`

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [current, setCurrent] = useState(1);
  
  const handleClick = () => {
    setClick(!click);
  }



  return (
    <div className='fixed'>

    <section>

      <Container>
        <Link to='/'>
          <h4 onClick={() => setCurrent(1)} className={current === 1 ? 'nav-active' : 'nav-active'}>
            <span>
              <img src={Item2} alt="nav" className="nav-icon" />
            </span>
            <span>
              Desco
            </span>
          </h4>
        </Link>
        <MenuList click={click}>
          <ul onClick={handleClick}>
            <li id="home">
              <Link to='/' onClick={() => setCurrent(1)} className={current === 1 ? 'active' : ''}>
                home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={() => setCurrent(2)} className={current === 2 ? 'active' : ''}>
                about
              </Link>
            </li>
            <li>
              <Link to='/works' onClick={() => setCurrent(3)} className={current === 3 ? 'active' : ''}>
                works
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={() => setCurrent(4)} className={current === 4 ? 'active' : ''}>
                contact
              </Link>
            </li>
          </ul>
          {click && <ul className="social">
          <li>
            <a href="https://github.com/Phenoo">
              <AiOutlineGithub />
            </a>
          </li>
          <li>
          <a href="https://twitter.com/DevDesco?t=fBV_tfM8NoTpNzFokYbtbw&s=09">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eze-paschal-158457233">
              <AiFillLinkedin />
            </a>
          </li>
          <li>
          <a href="https://wa.me/2349019703944?text=hey+desco+__">
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a href="https://link.medium.com/JZjTRn2IOsb">
              <FaMedium />
            </a>
          </li>
        </ul> }
        <img src={Item1} alt="rah" id="icon" />

        </MenuList>
        <button onClick={handleClick} className={`span`}> 
          {click ? <FaTimes /> : <FaBars />}
        </button>

      </Container>
    </section>
    </div>

  )
}

export default Navigation