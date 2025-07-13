"use client";

//import Link from "next/link";
import React, { useEffect } from "react";
import sal from "sal.js";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const OnetimePrice = ({ data, incresePrice, parentClass }) => {
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

  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <div className={`${parentClass} ${!incresePrice ? "mt--30" : ""}`}>
        <div
          className={`rainbow-pricing style-chatenai ${
            data.price > 50 ? "active" : ""
          }`}
        >
          <div className="pricing-table-inner bg-flashlight">
            <div className="pricing-top">
              <div className="pricing-header">
                <h4 className="title">{data.credits} Words</h4>
                <div className="pricing">
                  <div className="price-wrapper">
                      <span className="currency">$</span>
                      <span className="price">{Math.round(data.amount - data.amount/2)}</span>
                      <span className="subtitle">USD</span>
                  </div>
                  {/* <span className="subtitle">USD</span> */}
                </div>
                <div className="separator-animated animated-true mt--30 mb--30"></div>
              </div>
              <div className="pricing-body">
                <ul className="list-style--1">
                  {data.details.map((list) => (
                    <li>
                      <i
                        className={`feather-check-circle pe-2`}
                      ></i>
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pricing-footer">
                 <div style={{textAlign: 'center'}}>
                  <form action="https://oneclickhuman.com/api_request/create-checkout-session-onetime" method="POST">
                    <input type="hidden" name="email_address" value={session? session.user.user_email : ''} />
                    <input type="hidden" name="onetime_purchase" value={data.price_id} />
                    <input type="hidden" name="promocode" value="PAB50BA" />
                    { session ? 
                      <button className="btn-default btn-border round" style={{display: 'inline-block'}} type="submit">Purchase</button>
                       :
                      <button className="btn-default btn-border round" type="button" style={{display: 'inline-block'}} onClick={() => router.push('/signin')}>Purchase</button>
                    }
                  </form>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnetimePrice;
