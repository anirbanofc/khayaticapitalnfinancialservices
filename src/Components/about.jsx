import React from "react";
import css from "./CSS/about.css"
import aboutCardData from "./Data/aboutCardData";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="aboutMainDiv" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <h1>Khayati Capital is a one stop solution for every business need. </h1>
      <hr/>
      <p>
      Better solutions for your financial needs.
      </p>
      <div className="cardDiv">
      {aboutCardData.map(({Icon,Heading,Details},key)=>{
        return (
        <div div key={key} className="card" data-aos="zoom-in">
          <div className="icon">{Icon}</div>
          <div className="heading">{Heading}</div>
          <div className="details">{Details}</div>
        </div>)
      })}
      </div>
      <div className="country" data-aos="fade-down">
        <h2>Project funding FOR INDIA  ALGERIA, ECUADOR,GABON, INDONESIA, IRAN, IRAQ, KUWAIT, LIBIYA, NIGERIA, Ghana , Kenya  Uganda, Rwanda Namibia, South Africa , Mauritius,  and others African  countries MALDIVES  SOUDI ARABIA, UK, USA , UAE,  INDIA , Thailand and all Asians countries  for valuable projects .</h2>
      </div>
    </div>
  );
}
