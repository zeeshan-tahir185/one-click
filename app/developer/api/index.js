"use client";

import Context from "@/context/Context";
import StyleGuide from "@/components/StyleGuide/StyleGuide";
import Copyright from "@/components/Footer/Copyright";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Header from "@/components/Header/Header";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "@/components/Footer/Footer";

const StyleGuidepage = () => {

  const user_data = useSelector(state => state);
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
    if(!user_data.user_id){
         fetchUserDetails();
    }
  }, [1]);

  return (
    <>
      <main className="page-wrapper">
        <Context>
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />
          <Breadcrumb title="Developer API" text="Developer API" />

          <StyleGuide user={user_data}/>

          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default StyleGuidepage;
