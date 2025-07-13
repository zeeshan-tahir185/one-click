"use client";

import React, {useEffect} from "react";
import { SessionProvider } from "next-auth/react";
import { ReduxProvider } from "../store/provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "bootstrap/scss/bootstrap.scss";

// ========= Plugins CSS START =========
import "../public/css/plugins/feature.css";
import "../public/css/plugins/fontawesome-all.min.css";
import "../public/css/plugins/animation.css";
import "../node_modules/sal.js/dist/sal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-tooltip/dist/react-tooltip.css";
// ========= Plugins CSS END =========

import CookiePopup from "@/components/PrivacyCookie/CookieConsent";

import "../public/scss/style.scss";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body className="" suppressHydrationWarning={true}>
        <SessionProvider>
          <ReduxProvider>
            {children}
            <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
          </ReduxProvider>
        </SessionProvider>
        <CookiePopup />
      </body>
    </html>
  );
}
