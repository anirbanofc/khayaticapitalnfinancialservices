import React, { useState } from "react";
import css from "./CSS/nav.css";
import { Link, Route, Routes } from "react-router-dom";
import Logo from "../Image/Logo.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  let [bool, setBool] = useState(true);
  let [width, setWidth] = useState(window.innerWidth);
  // setInterval(function () {
  //   setWidth(() => window.innerWidth);
  // }, 1000);
 
  console.log(width);

  let booltoggle = () => {
    setBool(!bool);
    console.log(bool);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <nav data-aos="fade-down">
        <Link to="/" className="logo">
          <div className="logodiv">
            <img src={Logo} alt="" />
            <h5>Khayati Capital & Financial Services</h5>
          </div>
        </Link>

        {bool && (
          <ul>
            <Link className="link" to="/" onClick={booltoggle}>
              Home
            </Link>
            <Link className="link" to="/about" onClick={booltoggle}>
              About
            </Link>
            <Link className="link" to="/services" onClick={booltoggle}>
              Services
            </Link>
            <Link className="link" to="/contact" onClick={booltoggle}>
              Contact
            </Link>
          </ul>
        )}
        <GiHamburgerMenu className="hamburger" onClick={booltoggle} />
      </nav>
    </div>
  );
}
