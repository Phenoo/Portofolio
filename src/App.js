import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from './Main'
import Footer from './somponents/sections/Footer';
import About from './somponents/sections/About'
import Contact from './somponents/sections/Contact'
import Navigation from './somponents/sections/Navigation';
import Work from './somponents/sections/Work'
import Loader from './somponents/sections/Loader';

import scrollreveal from 'scrollreveal'



const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 7000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
      .about-section,
      .collab-container,
      footer
      `,
      {
        opacity: 0,
        interval: 300
      }
    )
  },[])

  if(loading){
    return <Loader />
  }
  return (
  <>
    <Navigation />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/about' element={<About />} />
      <Route path='/works' element={<Work />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
  </>
    )
}

export default App
