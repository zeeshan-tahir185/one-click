"use client";

import React, { useState } from "react";
//import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useSelector } from "react-redux";

const Nav = () => {
  const pathname = usePathname(); 
 
  //const { showItem, setShowItem } = useAppContext();
  const [showPage, setShowPage] = useState(true);

  const isActive = (href) => pathname.startsWith(href); 

  //console.log(pathname);

  const { data: session } = useSession();
 // console.log("Session data:", session);

 const user_data = useSelector(state => state);
 //console.log(user_data);
 const date1 = new Date(user_data.subscription_renewal_date);

 const formattedDate = date1.toLocaleDateString("en-US", {
   month: "long",
   day: "numeric",
   year: "numeric",
 });

  return (
    <>
      <ul className="mainmenu">
        <li>
          <Link href="/" className={pathname === '/' ? "active" : ""}>Home</Link>
        </li>
        {/* <li className="with-megamenu has-menu-child-item position-relative">
          <a
            href="#"
            onClick={() => setShowItem(!showItem)}
            className={`${!showItem ? "open" : ""}`}
          >
            Dashboard
          </a>
          <div
            className={`rainbow-megamenu right-align with-mega-item-2 ${
              showItem ? "" : "d-block"
            }`}
          >
            <div className="wrapper p-0">
              <div className="row row--0">
                <div className="col-lg-6 single-mega-item">
                  <h3 className="rbt-short-title">DASHBOARD PAGES</h3>
                  <ul className="mega-menu-item">
                    {DashboardItem &&
                      DashboardItem.navDashboardItem.map((data, index) => (
                        <li key={index}>
                          <Link
                            href={data.link}
                            className={isActive(data.link) ? "active" : ""}
                          >
                            {data.text}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="col-lg-6 single-mega-item">
                  <div className="header-menu-img">
                    <Image src={menuImg} alt="Menu Split Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li> */}
        
        <li>
          <Link href="/pricing"  className={isActive('/pricing') ? "active" : ""}>Pricing</Link>
        </li>
        <li>
          <Link href="/help" className={isActive('/help') ? "active" : ""}>Help</Link>
        </li>
        <li>
          <Link href="https://oneclickhuman.com/blog">Blog</Link>
        </li>
        <li>
          <Link href="/developer/api" className={isActive('/developer/api') ? "active" : ""}>API</Link>
        </li>
        { session ?
          <li>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              signOut({ callbackUrl: "/" });
            }}
            >Sign out</a>
          </li>
          :
          <li>
            <Link href="/signin" className={isActive('/signin') ? "active" : ""}>Sign In</Link>
           </li>
        }
        
        { (isActive('/humanizer') || isActive('/account') || isActive('/undetectable-content-generator')) &&
         <li className="with-megamenu has-menu-child-item position-relative">
          <a
            href="#"
            onClick={() => setShowPage(!showPage)}
            className={`${!showPage ? "open" : ""}`}
            style={{color: '#ff3bd4'}}
          >
          { user_data.subscrption_status === 1 && user_data.credits_availbe > 0 ? 
            user_data.credits_availbe :
            user_data.onetime_credit > 0 ?
            user_data.onetime_credit :
            user_data.quota
          } Word Balance 
          { user_data.subscrption_status === 1 && user_data.credits_availbe > 0 &&
            <i className="feather-chevron-down"></i>
          }
          </a>
          { user_data.subscrption_status === 1 && user_data.credits_availbe > 0 && 
          <div
            className={`rainbow-megamenu right-align with-mega-item-2 small ${
              showPage ? "" : "d-block"
            }`}
          >
            <div className="wrapper p-0">
              <div className="row row--0">
                <div className="col-lg-12 single-mega-item">
                  <ul className="mega-menu-item" style={{paddingTop: '25px'}}>
                  <li>
                      <div className="row">
                        <div className="col-md-2">
                         <i className="feather-download"></i>
                        </div>
                        <div className="col-md-10" style={{textAlign: 'left'}}>
                         <p style={{marginBottom: '5px'}}><b>Words remaining</b></p>
                         <p>
                         { user_data.subscrption_status === 1 && user_data.credits_availbe > 100 ?
                           user_data.credits_availbe :
                           user_data.onetime_credit  
                         }
                          &nbsp; / &nbsp;
                         { user_data.subscrption_status === 1 && user_data.credits_availbe > 100 ?
                           user_data.monthly_plan :
                           user_data.onetime_plan  
                         }  
                           &nbsp;this month</p>
                        </div>
                      </div>               
                  </li>
                  <li>
                    <div className="row">
                        <div className="col-md-2">
                         <i className="feather-calendar"></i>
                        </div>
                        <div className="col-md-10" style={{textAlign: 'left'}}>
                          <p style={{marginBottom: '5px'}}><b>Words Available until</b></p>
                          <p>
                            {formattedDate}
                          </p>
                        </div>
                      </div>              
                  </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          }
        </li> 
        }
      </ul>
    </>
  );
};

export default Nav;
