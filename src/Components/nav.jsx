import React from "react";
import css from "./CSS/nav.css";
import { Link, Route, Routes } from "react-router-dom";
import Logo from "../Image/Logo.png";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function Nav() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <nav data-aos="fade-down">
        <Link to="/" className="logo">
          <div className="logodiv">
            <img src={Logo} alt="" />
            <h5>Khayati Capital & Financial Services</h5>
          </div>
        </Link>

        <ul>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/services">
            Services
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
}
