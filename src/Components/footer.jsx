import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import css from "./CSS/footer.css";
import Logo from "../Image/Logo.png";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="heading">
        <img src={Logo} alt="" className="footerImg" />{" "}
        <p>Khyati capital & financial Service.</p>
      </div>
      <div className="mailwp">
        <h1>Have some questions?</h1>
        <a href="https://wa.me/919113353075" target="_blank">
          <FaWhatsapp className="icon wp" />
        </a>
        <a href="mailto:kumaraniket25@yahoo.com.com" target="_blank">
          <CiMail className="icon email" />
        </a>
      </div>
      <div className="footernavigation">
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
      </div>
      <p className="copyright">
        <FaRegCopyright /> Khyati capital & financial services 2024
      </p>
    </footer>
  );
}
