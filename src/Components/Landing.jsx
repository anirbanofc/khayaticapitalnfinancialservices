import React, { useEffect } from 'react'
import Services from './Services'
import About from './about'
import Contact from './contact'
import Footer from './footer'
import css from "./CSS/landing.css"
import { Button } from '@mui/material'
import HomePageVector from "../Image/HomePageVector-removebg-preview.png"
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css';



export default function Landing() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-up-right" className='landingDiv'>
        <div className="homeDiv">
          <section className='left'>
            <h1>Khayati Capital & Financial Services.</h1>
            <hr />
            <p>A  one stop solution for all your financial needs.</p>
            <Link to="/services"><button className='landingbtn'>OUR SERVICES</button></Link>
          </section>
          <section className='right'>
            <img src={HomePageVector} alt=""/>
            </section>
        </div>
    <About/>
    <Services/>
    <Contact/>
    </div>
  )
}
