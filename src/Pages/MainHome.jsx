import React from 'react';

import Home from './Home/Home';
import Navbar from './Home/Navbar';

// importing this scss page
import "./Home/Navbar.scss";

function MainHome() {
  return (
    <>

      <Navbar />

      <Home />

    </>
  )
}

export default MainHome;