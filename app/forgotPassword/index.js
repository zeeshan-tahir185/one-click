"use client";

import Context from "@/context/Context";
import ForgotPass from "@/components/ForgotPass/ForgotPass";
import Header from "@/components/Header/Header";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";

const SignInPage = () => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />

          <ForgotPass />

          {/* <Footer /> */}
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default SignInPage;
