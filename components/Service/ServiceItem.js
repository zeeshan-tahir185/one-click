"use client";

import Image from "next/image";
//import Link from "next/link";
import React, { useEffect } from "react";
import LanguageIcon from "../../public/images/logo/language.png";

import sal from "sal.js";

const ServiceItem = ({ ServiceData }) => {
  useEffect(() => {
  //  sal();

    // const cards = document.querySelectorAll(".bg-flashlight");

    // cards.forEach((bgflashlight) => {
    //   bgflashlight.onmousemove = function (e) {
    //     let x = e.pageX - bgflashlight.offsetLeft;
    //     let y = e.pageY - bgflashlight.offsetTop;

    //     bgflashlight.style.setProperty("--x", x + "px");
    //     bgflashlight.style.setProperty("--y", y + "px");
    //   };
    // });
  }, []);

  return (
    <>
      {ServiceData &&
        ServiceData.service.map((data, index) => (
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            key={index}
          >
            <div className="service service__style--1 bg-color-blackest radius mt--25 text-center rbt-border-none variation-4">
              <div className="icon">
                { data.title === 'Multilingual Support' ? 
                <Image src={LanguageIcon} style={{width: '45px'}}/>
                  :
                <i className={`feather-${data.icon}`}></i>
                }
              </div>
              <div className="content">
                <h4 className="title w-600">
                  {data.title}
                </h4>
                <p className="description b1 color-gray mb--0">{data.desc}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ServiceItem;
