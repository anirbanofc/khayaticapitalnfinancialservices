import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./about";
import Services from "./Services";
import css from "./CSS/about.css"
import { IoHomeOutline } from "react-icons/io5";
import { FaCarRear } from "react-icons/fa6";
import { LiaBusinessTimeSolid } from "react-icons/lia";

import aboutCardData from "./Data/aboutCardData";

export default function about() {
  return (
    <div className="aboutMainDiv">
      <h1>Khayati Capital is a one stop solution for every business need. </h1>
      <hr />
      <p>
        The brochure must grab a viewer’s attention and hold it long enough to
        deliver the pertinent information.
      </p>
      <div className="cardDiv">
      {aboutCardData.map(({Icon,Heading,Details},key)=>{
        return (
        <div div key={key} className="card">
          <div className="icon">{Icon}</div>
          <div className="heading">{Heading}</div>
          <div className="details">{Details}</div>
        </div>)
      })}
      </div>
      <div className="aboutDiv"></div>
    </div>
  );
}
