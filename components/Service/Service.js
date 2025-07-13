"use client";

import React, { useEffect, useState } from "react";

import sal from "sal.js";

import ServiceItem from "./ServiceItem";
import ServiceData from "../../data/home.json";
import Image from "next/image";
//import Humanize from "../../public/images/humanize.gif";
import Slider from "react-slick";
import Link from "next/link";
import { useAppContext } from "@/context/Context";
import { getSession } from "next-auth/react";
import LanguageIcon from "../../public/images/logo/language.png";

const Service = () => {
  const { ServiceCarousel } = useAppContext();

  useEffect(() => {
    sal();

    const cards = document.querySelectorAll(".bg-flashlight");

    cards.forEach((bgflashlight) => {
      bgflashlight.onmousemove = function (e) {
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;

        bgflashlight.style.setProperty("--x", x + "px");
        bgflashlight.style.setProperty("--y", y + "px");
      };
    });
  }, []);

  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    cssEase: "linear",
  };

   const [user_signedIn, setuserSignedIn] = useState(false);
    useEffect( () => {
    async function testSession() {
     let session = await getSession(); 
      if(session){
        setuserSignedIn(true);
      }
    }
    
    testSession();
  }, [1]);

  return (
    <>
      <div className="rainbow-service-area rainbow-section-gap" style={{marginBottom: ServiceCarousel ? '50px' : '0'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Trusted by 10,000+ Users</span>
                </h4>
                <h2 className="title w-600 mb--20">
                Competitive Pricing – Exceptional Quality {/*in under 30 Seconds*/}
                </h2>
                <p className="description b1">
                Our algorithm refines Al-generated text so it reads like it was written by a real person.
                </p>
                <div className="button-group">
                  { user_signedIn ?
                  <Link
                    className="btn-default round"
                    href="/humanizer"
                  >
                    <div className="has-bg-light"></div>
                    <span>Get started for free</span>
                  </Link>
                    :
                  <Link
                    className="btn-default round"
                    href="/signup"
                  >
                    <div className="has-bg-light"></div>
                    <span>Get started for free</span>
                  </Link>
                  }
                </div>
                <br/><br/>
                {/* <Image src={Humanize} className="humanize_iamge"/> */}

              {/* <div id="iframe-container">
                <iframe
                  src="https://embed.app.guidde.com/playbooks/wtquBF4c6f1uGQE7yes6u5" 
                  title="How to use the humanizing tool on our site oneclickhuman.com and get refined content that is detectiion proof." 
                  frameborder="0" 
                  referrerpolicy="unsafe-url" 
                  allowfullscreen="true" 
                  allow="clipboard-write" 
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation">
                </iframe>
              </div> */}

              </div>
            </div>
          </div>
          <br/>
          <div className="row row--15 service-wrapper" style={{margin: ServiceCarousel ? '0 15px' : '-15px 0 -15px 0'}}>
            { !ServiceCarousel ?
              <ServiceItem ServiceData={ServiceData} />
              :
            <Slider
              {...settings}
              className="rainbow-slider-section rainbow-slick-dot sm-slider-carosel-activation"
            >
            {ServiceData &&
              ServiceData.service.map((data, index) => (
                <div
                  className="col-12"
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
            </Slider>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
