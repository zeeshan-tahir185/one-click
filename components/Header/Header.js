"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAppContext } from "@/context/Context";

import logo from "../../public/images/logo/logo.png";
import logoLight from "../../public/images/logo/logo-light.png";

//import ToolsData from "../../data/header.json";

import Nav from "./Nav";
//import GridMenu from "./GridMenu";
import DarkSwitch from "./dark-switch";
import { getSession } from "next-auth/react";

const Header = ({ headerTransparent, headerSticky, btnClass }) => {
  const { activeMobileMenu, setActiveMobileMenu, isLightTheme, toggleTheme } =
    useAppContext();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

const [getStartedBtnText, setGetStartedBtnText] = useState(false);  
useEffect(() => {
  async function getWebSession(){
    let session = await getSession();
    if(session){
        setGetStartedBtnText(false);
    }else{
       setGetStartedBtnText(true);
    }
  }
  getWebSession();
}, [1]);

  return (
    <>
      <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} />
      <header
        className={`rainbow-header header-default ${headerTransparent} ${headerSticky} ${
          isSticky ? "sticky" : ""
        }`}
      >
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-3 col-md-6 col-6">
              <div className="logo">
                <Link href="/">
                  <Image
                    className={isLightTheme ? "logo-light" : "logo-dark"}
                    src={isLightTheme ? logo : logoLight}
                    alt="Logo"
                    width="180"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-6 col-6 position-static">
              <div className="header-right">
                <nav className="mainmenu-nav d-none d-lg-block">
                  <Nav />
                </nav>

                <div className="header-btn">
                  { getStartedBtnText && 
                    <Link
                      className={`btn-default ${btnClass}`}
                      href="/signin"
                    >
                    Humanizer  
                    </Link> 
                  }
                </div>

                {/* <GridMenu ToolsData={ToolsData} /> */}

                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <button
                      className="hamberger-button"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <i className="feather-menu"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
