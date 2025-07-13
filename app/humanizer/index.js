"use client";

import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import LeftpanelDashboard from "@/components/Common/LeftpanelDashboard";
import Modal from "@/components/Common/Modal";
import TextGenerator from "@/components/TextGenerator/TextGenerator";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//import HeaderTop from "@/components/Header/HeaderTop/Header-Top";

const TextGeneratorPage = () => {

  const user_data = useSelector(state => state);
  //console.log(user_data);

  const dispatch = useDispatch();
  const router = useRouter(); 

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
    if(!user_data.user_id){
         fetchUserDetails();
    }
  }, [1]);

  const [days_difference, setDaysDifference] = useState(-1);

  useEffect(() => {
    const today = new Date();
    const targetDate = new Date(user_data.user_created);
    const timeDifference = today - targetDate;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    setDaysDifference(daysDifference);
  }, [user_data]);
  
  return (
    <>
    
      <main className="page-wrapper rbt-dashboard-page">
      <Context>
        <div className="rbt-panel-wrapper">
          <HeaderDashboard display="" />
          <PopupMobileMenu />
          <LeftpanelDashboard />
          <Modal />

          <div className="rbt-main-content">
            <div className="rbt-daynamic-page-content">
              <div className="rbt-dashboard-content">
                <div className="content-page">
                  { !user_data.loading &&
                    <>
                      { days_difference > 7 && user_data.subscrption_status === 0 && user_data.onetime_plan === 0 ?
                        <div style={{marginTop: '100px'}}>
                          <h3>*Your trial period has ended*</h3>
                          <p>Upgrade now to continue enjoying all the amazing features. Contact us if you have any questions or need assistance with upgrading!</p>
                          <a class="btn-default btn-small round" href="/pricing">Upgrade Now</a>
                        </div> :
                        <TextGenerator userData={user_data}/>
                      }
                    </>
                    
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </Context>
    </main>
      
    </>
  );
};

export default TextGeneratorPage;
