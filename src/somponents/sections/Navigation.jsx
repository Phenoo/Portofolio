import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai'
import { FaTwitter, FaMedium, FaWhatsapp} from 'react-icons/fa'

import Item1 from '../../assets/images/20086735.png'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem 0;
position: relative;

#icon, #home, button{
  display: none;
}

#home{
  @media(max-width: 57em){
    display: flex;
  }
}

.active{
  color: red;
}

button{
  @media(max-width: 57em){
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #f53b3b;
    width: 60px;
    height: 60px;
    z-index: 100;

    div{
      width: 25px;
      height: 2px;
      position: relative;
      background: #ddd;
      transform: ${props => props.click ? 'rotate(45deg)' : 'rotate(0deg)'};

      &::before{
        content: '';
        position: absolute;
        top: 10px;
        left: 0;
        width: 25px;
        height: 2px;
        background: #ddd;
        transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'} ;
        
      }
    }
    }
}

@media(max-width: 30em){
  h4{
    font-size: 0.9rem;
  }
}


`


const MenuList = styled.div`

.social{
  display: none;
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
  z-index: 10;
  margin: 0;
  padding: 0;
  padding: 2rem;
  background-color: #111;
  transform: ${props => props.click ? 'translateX(0)' : 'translateX(1000%)'};
  transition: all 0.6s ease;

  .social{
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: row;

    li{
      font-size: 1.1rem;
    }
  }
  #icon{
    display: flex;
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 20px;
    right: 100px;
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
  }

}

`

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [current, setCurrent] = useState(1);
  
  const handleClick = () => {
    console.log("nav")
    setClick(!click);
  }
  return (
    <section>
      <Container>
        <Link to='/'>
          <h4>
            &copy; Code by Desco
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
          <a href="https://wa.me/2349019703970?text=hey+desco+__">
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
        <button onClick={handleClick}>
          <div click={click}></div>
        </button>

      </Container>
    </section>
  )
}

export default Navigation