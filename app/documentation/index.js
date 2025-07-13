"use client";

import Context from "@/context/Context";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Utilize from "@/components/Utilize/Utilize";
import BackToTop from "../backToTop";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";

const UtilizePage = () => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          <Breadcrumb title="Documentation" text="Documentation" />

          <Utilize />

          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default UtilizePage;
