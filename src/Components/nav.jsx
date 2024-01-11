import React from 'react'
import css from "./CSS/nav.css"
import { Link, Route, Routes } from 'react-router-dom'
import About from './about'
import Services from './Services'
import Logo from "../Image/Logo.png"


export default function nav() {
  return (
    <nav>
      
      <Link to="/home" className='logo'><div className="logodiv"><img src={Logo} alt="" /><h5>Khayati Capitaln Financial Services</h5></div></Link>

      
      <ul>
       <Link className='link' to="/home">Home</Link>
       <Link className='link' to="/about">About</Link>
       <Link className='link' to="/services">Services</Link>
       <Link className='link' to="/contact">Contact</Link>
       
      </ul>
    </nav>
  )
}
