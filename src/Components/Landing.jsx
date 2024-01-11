import React from 'react'
import Services from './Services'
import About from './about'
import Contact from './contact'
import css from "./CSS/landing.css"
import { Button } from '@mui/material'
import HomePageVector from "../Image/HomePageVector.jpg"
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
        <div className="homeDiv">
          <section className='left'>
            <h1>The simple online home loan.</h1>
            <hr />
            <p>Financial uncertanity is hard on employees, and causes even.</p>
            <Link to="/services"><Button variant="outlined">Our Services</Button></Link>
          </section>
          <section className='right'>
            <img src={HomePageVector} alt=""/></section>
        </div>
    <About/>
    <Services/>
    <Contact/>
    </div>
  )
}
