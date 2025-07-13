"use client";

import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import LeftpanelDashboard from "@/components/Common/LeftpanelDashboard";
import ProfileDetails from "@/components/ManageSubscription/ProfileDetails";
import { getSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ManageSubscriptionPage = () => {

  const router = useRouter();
  
  const user_data = useSelector(state => state);
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
  
        // console.log(data);
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
      <main className="page-wrapper rbt-dashboard-page">
        <Context>
          <div className="rbt-panel-wrapper">
            <HeaderDashboard display="d-none" />
            <PopupMobileMenu />
            <LeftpanelDashboard />
              <ProfileDetails account_status={user_data} router={router} dispatch={dispatch}/>
          </div>
        </Context>
      </main>
    </>
  );
};

export default ManageSubscriptionPage;
