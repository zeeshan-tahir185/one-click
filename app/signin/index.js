"use client";

import Context from "@/context/Context";
import SignIn from "@/components/sign/SignIn";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Copyright from "@/components/Footer/Copyright";
import Footer from "@/components/Footer/Footer";

const SignInPage = () => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />

          <SignIn />

          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default SignInPage;
