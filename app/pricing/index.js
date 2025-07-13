"use client";

import Context from "@/context/Context";
//import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import PricingTwo from "@/components/Pricing/PricingTwo";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSession } from "next-auth/react";

const PricingPage = () => {

  const userData = useSelector(state => state);
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    console.log('request sending....');
    dispatch({type: 'loading-user'}); 
    const session_details = await getSession();   
    try {
         let res = await fetch('https://oneclickhuman.com/api_request/checkquota', {
          mode:'cors', 
          method: 'POST',
          body: JSON.stringify({
            'user_id' : session_details.user.user_id,
          }),
           headers: {
             'Content-type': 'application/json; charset=UTF-8',
           }
         });
  
         let data = await res.json();
  
         console.log(data);
         data.user_id = session_details.user.user_id;
         data.user_email = session_details.user.user_email;
         data.time = session_details.user.time;
  
         dispatch({type: 'loading-success', payload: data});
    } catch (error) {
         dispatch({type: 'request-failure'});
    }
  }

  useEffect(() => {
    if(!userData.user_id){
         fetchUserDetails();
    }
  }, [1]);

  return (
    <>
      <main className="page-wrapper">
        <Context>
            {/* { (userData.monthly_plan === 0 && userData.onetime_plan === 0) || userData.user_id === null ?
              <HeaderTop type="not-purchased"/>
              : ''
            }

            { userData.subscrption_status === 1 && userData.credits_availbe === 0 ?
              <HeaderTop type="purchased"/>
              : ''
            } */}
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />

          <div>
            <div className="rainbow-gradient-circle"></div>
            <div className="rainbow-gradient-circle theme-pink"></div>
          </div>
          <PricingTwo
            parentClass="col-xl-3 col-lg-6 col-md-6 col-12"
            childClass="tab-content p-0 bg-transparent border-0 border bg-light"
            start={0}
            end={4}
            isHeading={true}
            gap={true}
            userData={userData}
            showCompare={true}
          />

          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default PricingPage;
