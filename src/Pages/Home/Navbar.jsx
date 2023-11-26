import React from 'react'
import { Link} from 'react-router-dom'

import img2 from "../../Images/Logo-Final.png"

function Navbar() {
  return (
    <>
    <nav className="navbar">
    <img src={img2} alt="" />
    <h1>Welcome, Sunita Sharma</h1>
      <div className="container2">
        <ul>
          <li> <Link to="/home" >Home</Link></li>
          <li><Link to="/about">Welcome to our health care </Link></li>
          <li><Link to="/user">Satisfied User's Review</Link></li>
          <li><Link to="/contact">Contact Us </Link></li>
        </ul>
      </div>
      <button type='submit' ><Link to="/"><p>Log Out</p></Link></button>
    </nav>
    
    
    </>
  )
}

export default Navbar;