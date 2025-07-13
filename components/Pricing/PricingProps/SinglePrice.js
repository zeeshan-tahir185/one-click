"use client";

//import Link from "next/link";
import React, { useEffect } from "react";
import sal from "sal.js";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const SinglePrice = ({ data, incresePrice, parentClass, monthlyPlan, subscrptionID }) => {
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

  const ContactSales = (title) => {
    if(title === 'Enterprise'){
      router.push('/help');
    }else{
      router.push('/signup');
    }
  }

  return (
    <>
      <div className={`${parentClass} ${!incresePrice ? "mt--30" : ""}`} style={{position: 'relative'}}>
        { data.title === 'Advanced' &&
          <div style={{
            textAlign: 'center', 
            marginBottom: '0px', 
            width: '90%', 
            position: "absolute", 
            top: "25px", 
            zIndex: 999
          }}>
           <span className="current-plan">Most popular</span>
          </div>
        }
        <div
          className={`rainbow-pricing style-chatenai ${
            data.price > 50 ? "active" : ""
          }`}
          style={{border: data.title === 'Advanced' ? '3px solid #7064e9' : 'unset', borderRadius: '10px'}}
        >
          <div className="pricing-table-inner bg-flashlight">
            <div className="pricing-top">
              <div className="pricing-header">
                <h4 className="title">{data.title}</h4>
                <div className="pricing">
                  <div className="price-wrapper">
                      <span className="currency">$</span>
                      <span className="price">{Math.round(data.amount - data.amount/2)}{data.title === 'Enterprise' && '+'}</span>
                  </div>
                  <span className="subtitle">USD Per Month</span>
                </div>
                <div className="separator-animated animated-true mt--30 mb--30"></div>
                { monthlyPlan === data.credits && 
                  <div style={{textAlign: 'center', marginBottom: '35px'}}>
                    <span className="current-plan">Current Plan</span>
                  </div>
                }
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
               { monthlyPlan !== data.credits && 
                 <div style={{textAlign: 'center'}}>
                  <form action="https://oneclickhuman.com/api_request/create-checkout-session" method="POST">
                    <input type="hidden" name="email_address" value={session? session.user.user_email : ''} />
                    <input type="hidden" name="subscription" value={data.price_id} />
                    <input type="hidden" name="promocode" value="PAB50BA" />
                    { !session &&
                      <button className="btn-default btn-border round" type="button" style={{display: 'inline-block'}} onClick={() => ContactSales(data.title)}>{data.title === 'Enterprise' ? 'Contact Sales': 'Purchase'}</button>
                    }
                    { monthlyPlan === 0 && session ?
                     <>
                      { data.title === 'Enterprise' ?
                        <button className="btn-default btn-border round" style={{display: 'inline-block'}} type="button" onClick={() => router.push('/help')}>Contact Sales</button>
                        :
                        <button className="btn-default btn-border round" style={{display: 'inline-block'}} type="submit">Purchase</button>
                      }
                     </>
                    : ''
                    }
                    { monthlyPlan > 0 &&
                     <>
                      {data.title === 'Enterprise' ?
                       <button className="btn-default btn-border round" style={{display: 'inline-block'}} type="button" onClick={() => router.push('/help')}>Contact Sales</button>
                       : 
                       <>
                       { subscrptionID !== '' ?
                         <button className="btn-default btn-border round" style={{display: 'inline-block'}} type="submit">Upgrade</button>
                         :
                         <button className="btn-default btn-border round" style={{display: 'inline-block'}} type="button" onClick={() => alert('Sorry your current plan can not be changed, please contact support.')}>Upgrade</button>
                       }
                      </>
                      }
                     </>
                     }
                  </form>
                 </div>
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePrice;
