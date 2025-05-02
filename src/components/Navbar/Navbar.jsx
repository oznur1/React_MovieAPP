import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { PiFilmReelFill } from 'react-icons/pi';
import "./Navbar.css"
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className='navbar'>
    
     <div className='left'>
      <Link to="/">
    <h1>Movie App</h1>
    </Link>
    </div>
     
      <div className='center'>
      <PiFilmReelFill/>
      </div>
   
   <div className='right'>
    <ul>
      <li>
        <Link to="/"><IoHomeOutline/>
        </Link>
        </li>
        
        <li>
        <Link to="/mylist">
         <FaHeart/>
        </Link>
        </li>
    </ul>
   </div>

    </nav>
  )
}

export default Navbar
