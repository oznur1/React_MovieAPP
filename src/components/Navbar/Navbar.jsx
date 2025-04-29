import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { PiFilmReelFill } from 'react-icons/pi';
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className='navbar'>
    
     <div className='left'>
    <h1>Movie App</h1>
    </div>
     
      <div className='center'>
      <PiFilmReelFill/>
      </div>
   
   <div className='right'>
    <ul>
        <li><IoHomeOutline/></li>
        <li><FaHeart/></li>
    </ul>
   </div>

    </nav>
  )
}

export default Navbar
