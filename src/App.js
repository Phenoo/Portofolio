import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from './Main'
import Footer from './somponents/sections/Footer';
import About from './somponents/sections/About'
import Contact from './somponents/sections/Contact'
import Navigation from './somponents/sections/Navigation';
import Work from './somponents/sections/Work'

const App = () => (
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
);

export default App;
