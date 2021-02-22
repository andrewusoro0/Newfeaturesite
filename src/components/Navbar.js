import React from "react"
import {Link} from 'react-router-dom'
import "./Navbar.css"



function Navbar(){
  
    return(
        <>
        <nav className="navbar">
        <div className="navbar-container">
        <ul className="nav-link">
          <li className="nav-item">
             <Link to="/home" className='nav-link'>Home</Link>
          </li>
          <li className="nav-item">
             <Link to="/Blog" className='nav-link'>Blog</Link>
          </li>
          <li className="nav-item">
             <Link to="/about" className='nav-link'>About</Link>
          </li>
          <li className="nav-item">
             <Link to="/contact" className='nav-link'> contact</Link>
          </li>
        </ul>
        </div>  
        </nav>

        </>

    )
}

export default Navbar