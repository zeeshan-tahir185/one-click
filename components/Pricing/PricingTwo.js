"use client";

import React, { useEffect, useState } from "react";
import sal from "sal.js";
import SinglePrice from "./PricingProps/SinglePrice";
import OnetimePrice from "./PricingProps/OnetimePrice";
import Compare from "./Compare";
import CompareHome from "./CompareHome";
import FreeItem from "./PricingProps/FreeItem";

const PricingTwo = ({
  parentClass,
  childClass,
  start,
  end,
  isHeading,
  gap,
  userData,
  showCompare
}) => {
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

  const [products, setProducts] = useState([]);
  const [products_onetime, setProductsOnetime] = useState([]);
  useEffect(() => {
    fetch('https://oneclickhuman.com/api_request/get_prices', {
       method: 'GET'
     }).then(res => res.json())
       .then((json) => {
         //console.log(json.products);
        let items = [];
        let items_onetime = [];
         json.products.map((product) => {
           if(product.is_subscription === 1 && product.id !== 2){
               let product_details = JSON.parse(product.details);
               items.push({id: product.id, title: product.title, amount: product.amount, credits: product.credits, price_id: product.price_id, details: product_details});
           }
           if(product.is_subscription === 0){
              let product_details = JSON.parse(product.details);
              items_onetime.push({id: product.id, title: product.title, amount: product.amount, credits: product.credits, price_id: product.price_id, details: product_details});
           }
         });
         setProducts(items);
         setProductsOnetime(items_onetime);
     });
 }, [1]); 

 useEffect(() => {
  // console.log(products);
  // console.log(products_onetime);
 }, [products, products_onetime])

  return (
    <>
      <div className="main-content">
        <div
          className={`rainbow-pricing-area ${
            gap ? "rainbow-section-gap rainbow-section-gapTop-big" : ""
          }`}
        >
          <div className="container">
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-12">
                  {isHeading ? (
                    <div
                      className="section-title text-center"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="150"
                    >
                      <h4 className="subtitle">
                        <span className="theme-gradient">Pricing</span>
                      </h4>
                      <h2 className="title w-600 mb--20">
                      Humanizing your Articles at a Reasonable Price
                      </h2>
                      <p className="description b1">
                      Custom Plan - Contact Us for even higher requirements 
                      </p>
                    </div>
                  ) : (
                    ""
                  )}

                  <nav className="chatenai-tab">
                    <div
                      className="tab-btn-grp pricing-tab-btn nav nav-tabs mb-3 text-center justify-content-center"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Monthly
                      </button>
                      <button
                        className="nav-link with-badge"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Lifetime
                        {/* <span className="rainbow-badge-card badge-border">
                          20% Off
                        </span> */}
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
              <br/>
              <div className={childClass} id="nav-tabContent">
                { products.length === 0 &&
                  <p style={{textAlign: 'center', marginTop: '50px'}}>Loading Plans...</p> 
                }
                <div
                  className="tab-pane fade active show"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row row--15 mt_dec--30">
                   {products.length > 0 && 
                     <FreeItem 
                       parentClass={parentClass} 
                       subsCriptionStatus={userData.subscrption_status} 
                       oneTimePlan={userData.onetime_plan}
                       incresePrice={false}/>
                   }
                    {products.length > 0 &&
                      products
                        .map((data, index) => (
                          <SinglePrice
                            {...data}
                            data={data}
                            key={index}
                            parentClass={parentClass}
                            incresePrice={false}
                            monthlyPlan={userData.monthly_plan}
                            subscrptionID={userData.subscription_id}
                          />
                        ))}
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="row row--15 mt_dec--30">
                    {products_onetime.length > 0 &&
                      products_onetime.map((data, index) => (
                        <OnetimePrice
                          {...data}
                          data={data}
                          key={index}
                          parentClass={parentClass}
                          incresePrice={false}
                          />
                        ))}
                  </div>
                </div>
              </div>
            </div>
            {!showCompare && products.length > 0 && <CompareHome />}
            {showCompare && products.length > 0 && <Compare />}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTwo;
