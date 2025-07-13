"use client";

import React, { useEffect } from "react";
import AccordionItem from "./AccordionItem";

import ContactForm from "./ContactForm";
import sal from "sal.js";

const Help = () => {
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
  return (
    <>
      <div className="main-content">
        <div className="rainbow-contact-area rainbow-section-gap">
          <div className="container">

            <div className="row mt--40 row--15">
              <div className="col-lg-8 mt_md--30 mt_sm--30">
                <div className="help-faq">
                  <AccordionItem/>
                </div>
              </div>
              <div className="col-lg-4">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
