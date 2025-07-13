"use client";

import React from "react";
import Context from "@/context/Context";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BackToTop from "../backToTop";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";

const PrivacyPage = () => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          <Breadcrumb title="Privacy Policy" text="Privacy Policy" />

          <PrivacyPolicy />

          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default PrivacyPage;
