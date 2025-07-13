"use client";

import React, { useEffect, useState } from "react";

import sal from "sal.js";
import Link from "next/link";
import { useAppContext } from "@/context/Context";
import { getSession } from "next-auth/react";

const Service2 = () => {
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
                <h2 className="title w-600 mb--20">
                 Ready to Turn Al Text into Human-Quality Writing?
                </h2>
                <p className="description b1">
                Join thousands of businesses and content creators who trust OneClickHuman for fast, reliable, and detector-proof content.
                </p>
                <div className="button-group">
                  { user_signedIn ?
                  <Link
                    className="btn-default round"
                    href="/humanizer"
                  >
                    <div className="has-bg-light"></div>
                    <span>Try for Free</span>
                  </Link>
                    :
                  <Link
                    className="btn-default round"
                    href="/signup"
                  >
                    <div className="has-bg-light"></div>
                    <span>Try for Free</span>
                  </Link>
                  }
                  <Link
                    className="btn-default round"
                    href="/pricing"
                  >
                    <div className="has-bg-light"></div>
                    <span>Compare Plans</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service2;
