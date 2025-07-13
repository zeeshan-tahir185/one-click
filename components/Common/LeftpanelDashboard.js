"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import light from "../../public/images/light/switch/sun-01.svg";
import dark from "../../public/images/light/switch/vector.svg";

import HeaderData from "../../data/header.json";
import { useAppContext } from "@/context/Context";
import { useSelector } from "react-redux";

const LeftpanelDashboard = () => {
  const pathname = usePathname();
  const { shouldCollapseLeftbar, isLightTheme, toggleTheme } = useAppContext();

  const isActive = (href) => pathname.startsWith(href);
  const current_state =  useSelector(state => state);

  return (
    <>
      <div
        className={`rbt-left-panel popup-dashboardleft-section ${
          shouldCollapseLeftbar ? "collapsed" : ""
        }`}
      >
        <div className="rbt-default-sidebar">
          <div className="inner">
            <div className="content-item-content">
              <div className="rbt-default-sidebar-wrapper">
                <nav className="mainmenu-nav">
                  <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                    <li>
                      <Link
                        className={isActive("/manage-subscription") ? "active" : ""}
                        href="/manage-subscription"
                      >
                        <i className="feather-briefcase"></i>
                        <span>Manage Subscription</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={isActive("/account") ? "active" : ""}
                        href="/account"
                      >
                        <i className="feather-briefcase"></i>
                        <span>My Account</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="rbt-sm-separator"></div>
                  <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                    {HeaderData &&
                      HeaderData.leftPanel.map((data, index) => (
                        <li key={index}>
                          <Link
                            href={data.link}
                          >
                            <Image
                              className={`${
                                isLightTheme
                                  ? "boxed-logo-dark"
                                  : "boxed-logo-light"
                              }`}
                              src={isLightTheme ? data.img : data.imgLight}
                              width={35}
                              height={35}
                              alt="Oneclickhuman"
                            />
                            <span>{data.title}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </nav>
                <div className="rbt-sm-separator"></div>
             
             {/* 
                <nav className="mainmenu-nav">
                  <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                    <li className="has-submenu">
                      <a
                        className="collapse-btn collapsed"
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <i className="feather-plus-circle"></i>
                        <span>Setting</span>
                      </a>
                      <div className="collapse" id="collapseExample">
                        <UserMenuItems parentClass="submenu rbt-default-sidebar-list" />
                      </div>
                    </li>
                  </ul>
                </nav> */}

              </div>
            </div>
          </div>
          { current_state.subscrption_status === 1 || current_state.onetime_plan === 1 ? ''
            :
            <div className="subscription-box">
              <div className="inner">
                <div className="btn-part">
                  <Link href="/pricing" className="btn-default btn-border">
                    Upgrade To Pro
                  </Link>
                </div>
             </div>
            </div>
          }

          <div className="switcher-btn-gr inner-switcher">
            <button
              className={`${isLightTheme ? "active" : ""}`}
              onClick={toggleTheme}
            >
              <Image src={dark} alt="Switcher Image" />
              <span className="text">Dark</span>
            </button>
            <button
              className={`${!isLightTheme ? "active" : ""}`}
              onClick={toggleTheme}
            >
              <Image src={light} alt="Switcher Image" />
              <span className="text">Light</span>
            </button>
          </div>
          <p className="subscription-copyright copyright-text text-center b4 small-text">
            © 2025 oneclickhuman.com
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftpanelDashboard;
