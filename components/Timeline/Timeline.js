"use client";

import React, { useEffect, useState } from "react";
import sal from "sal.js";

import "venobox/dist/venobox.min.css";

import TimnelineData from "../../data/home.json";
import Link from "next/link";
import { getSession } from "next-auth/react";
import HowItWorks3 from "../../public/images/howitworks3.png";
import Image from "next/image";
import { useAppContext } from "@/context/Context";

const Timeline = () => {

  const {How_It_Works} = useAppContext();
  useEffect(() => {
    sal();

    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "50%" : "100%",
      });
    });
  }, []);

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
      <div className="rainbow-timeline-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h2 className="title w-600 mb--20 mt--50">
                How It Works
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="timeline-style-two">
                { How_It_Works && <Image src={HowItWorks3} id="how-it-work" alt="how-it-works"/> }
      {/* <div class="row text-center">
        <div class="col-md-4 mb-4">
          <div class="step">
            <div class="icon-timeline"><i class="feather-copy"></i></div>
            <div class="arrow-box">
              Copy & Paste <br/>or Upload
            </div>
            <p class="step-description">Inputs AI-generated text into the system</p>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="step">
            <div class="icon-timeline"><i class="feather-settings"></i></div>
            <div class="arrow-box">
              Choose Your <br/>Settings
            </div>
            <p class="step-description">Select your language and speed preferences</p>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="step">
            <div class="icon-timeline"><i class="feather-file-text"></i></div>
            <div class="arrow-box">
              Get Humanized <br/>Content
            </div>
            <p class="step-description">In under 30 seconds receive refined, detection proof content</p>
          </div>
        </div>
      </div> */}

      <div className="button-group mt--50 text-center">
              { user_signedIn ?
                <Link className="btn-default btn-large round" href="/humanizer">
                  Try for Free
                </Link>
                :
                <Link className="btn-default btn-large round" href="/signup">
                 Try for Free
                </Link>
              }
              </div>
              
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
