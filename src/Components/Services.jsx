import React from "react";
import { services, loan, fund } from "./Data/services";
import css from "./CSS/services.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "./Image/BusinessCardimg.jpg";
import USLOAN from "./Image/USLOAN.png";
import SLOAN from "./Image/SLOAN.png";

export default function Services() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="outerServiceCard">
      <h1>Our Services</h1>
      <h2>SECURED AND UNSECURED BUSINESS LOAN FROM PVT SOURCE</h2>
      <div className="mainServiceCard" data-aos="zoom-out-up">
        <div className="imgdiv">
          <h1>Business Loan</h1>
          <div className="details">
            {services.map(({ type, img, desc }, key) => {
              return (
                <div className="subServiceCard">
                  <div key={key} className="serviceCard" data-aos="fade-down">
                    <h1>{type}</h1>
                    <p> {desc}</p>
                  </div>
                  {/* <img src={img} alt="" /> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="loandiv">
        {loan.map(({ type, img, desc }, key) => {
          return (
            <div className="indiVidualLoan">
              <h1>{type}</h1>
              <img src={img} alt="" />
              <p>{desc}</p>
            </div>
          );
        })}

        
      </div>
      <div className="fund">
          {fund.map(({type,desc,fundimg,icon}, index) => {
            return (
                <div id="key" className="singlefund" data-aos="fade-down-left">
                  <div className="img">
                    <img src={fundimg} alt="" />
                  </div>
                <h1>{type}</h1>
                  <p>
                    {desc.map(({service}, innerindex) => {
                      return (
                        <div key={innerindex}className="innerservices">
                          <p> <span>{icon} </span>{service}</p>
                        </div>
                      );
                    })}
                  </p>
                </div>
              
            );
          })}
        </div>
    </div>
  );
}
