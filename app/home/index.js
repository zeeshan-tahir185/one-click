"use client";

import Header from "@/components/Header/Header";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Home from "@/components/Home/Home";
import Service from "@/components/Service/Service";
import Context from "@/context/Context";
import Separator from "../separator";
import Split from "@/components/Split/Split";
import Timeline from "@/components/Timeline/Timeline";
import PricingTwo from "@/components/Pricing/PricingTwo";
import Accordion from "@/components/Accordion/Accordion";
import Service2 from "@/components/Service2/Service2";
import Copyright from "@/components/Footer/Copyright";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSession } from "next-auth/react";
import Footer from "@/components/Footer/Footer";

const HomePage = () => {

  const userData = useSelector(state => state);
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    //console.log('request sending....');
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
  
         //console.log(data);
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

            { (userData.monthly_plan === 0 && userData.onetime_plan === 0) || userData.user_id === null ?
              <HeaderTop type="not-purchased"/>
              : ''
            }

            { userData.subscrption_status === 1 && userData.credits_availbe === 0 ?
              <HeaderTop type="purchased"/>
              : ''
            }

          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />

          <Home />
          <Service />
          <Separator top={true} />
          <Timeline />
          <Separator top={true} />
          <Split />
          <Separator top={true} />
          <PricingTwo
            parentClass="col-xl-3 col-lg-6 col-md-6 col-12"
            childClass="tab-content p-0 bg-transparent border-0 border bg-light"
            start={0}
            end={4}
            isHeading={true}
            gap={true}     
            userData={userData}       
          />
          <br/><br/>
          <Separator top={true} />
          <Accordion isHead={true} />
          <Separator top={true} />
          <Service2 />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default HomePage;
