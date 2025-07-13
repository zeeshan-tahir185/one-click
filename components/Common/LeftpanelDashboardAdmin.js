"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import light from "../../public/images/light/switch/sun-01.svg";
import dark from "../../public/images/light/switch/vector.svg";

import { useAppContext } from "@/context/Context";

const LeftpanelDashboardAdmin = () => {
  const pathname = usePathname();
  const { shouldCollapseLeftbar, isLightTheme, toggleTheme } = useAppContext();

  const isActive = (href) => pathname.startsWith(href);

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
                        className={isActive("/admin") ? "active" : ""}
                        href="/admin"
                      >
                        <i className="feather-home"></i>
                        <span>Home</span>
                      </Link>
                    </li>
                    <div className="rbt-sm-separator"></div>
                    <li>
                      <Link
                        className={isActive("/admin/users") ? "active" : ""}
                        href="/admin/users"
                      >
                        <i className="feather-users"></i>
                        <span>Users</span>
                      </Link>
                    </li>
                    <div className="rbt-sm-separator"></div>
                    <li>
                      <Link
                        className={isActive("/admin/payments") ? "active" : ""}
                        href="/admin/payments"
                      >
                        <i className="feather-credit-card"></i>
                        <span>Payments</span>
                      </Link>
                    </li>
                    <div className="rbt-sm-separator"></div>
                    <li>
                      <Link
                        className={isActive("/admin/settings") ? "active" : ""}
                        href="/admin/settings"
                      >
                        <i className="feather-settings"></i>
                        <span>Settings</span>
                      </Link>
                    </li>
                    <div className="rbt-sm-separator"></div>
                  </ul>
                </nav>

              </div>
            </div>
          </div>

       
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
          <p className="subscription-copyright copyright-text text-center b4  small-text">
            © 2025
            <Link
              className="ps-2"
              href="https://oneclickhuman.com"
            >
              oneclickhuman.com
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftpanelDashboardAdmin;
