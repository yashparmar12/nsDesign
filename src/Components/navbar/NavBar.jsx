import React from 'react'
import {Link} from "react-router-dom";
// import arrow from "./down-arrow.png"
import "./Nav.css";

const NavBar = () => {
  return (
    <nav className="nav">
        <strong className='logo'>NetWorkStranger</strong>
        <ul className="nav-links">
            <li className='item'><Link to="#">About Us</Link></li>
            <li className='item'><Link to="#">Platform Usage</Link></li>
            <li className='item'><Link to="#">Membership Plans</Link></li>
            <li className='item'><Link to="#">Blogs</Link></li>
            <li className='item'><Link to="#">Support</Link></li>
            <p className='l'>Login</p>
            <p className='l1' >Get Started for Free</p>
        </ul>
    </nav>
  )
}

export default NavBar