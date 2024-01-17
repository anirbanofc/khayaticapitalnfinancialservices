import React, { useState } from "react";
import css from "./CSS/contact.css";
import { Button } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import emailjs from "@emailjs/browser";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  let [details, setDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
  });
  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    console.log(details);
    console.log(details.email);
    let serviceId = "service_bak0kze";
    let templateID = "template_x0fn7pq";
    let publicKey = "l9J2dtMvhqXbgnjhm";

    let templateParam = {
      from_name: details.name,
      from_email: details.email,
      from_query: details.query,
    };
    emailjs
      .send(serviceId, templateID, templateParam, publicKey)
      .then((response) => {
        console.log("Email sent Successfully", response);
      });
  };
  return (
    <div className="contact" data-aos="fade-up-left">
      <h1>Contact us</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your full name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="emial"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter your Mobile Number"
          name="mobile"
          onChange={handleChange}
        />
        <textarea
          id=""
          cols="30"
          rows="10"
          name="query"
          onChange={handleChange}
          placeholder="Write your query"
        ></textarea>
        <input type="submit" value="Contact us" className="btn" />
      </form>
    </div>
  );
}
