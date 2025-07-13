import React, { useState, useEffect } from "react";

import ProfileBody from "./ProfileBody";
//import AccountBody from "./AccountBody";
//import UserNav from "../Common/UserNav";
import ProgressBar from "../ProgressBar/ProgressBar";

const ProfileDetails = ({account_status, router, dispatch}) => {

  const [is_renewal_date_crossed, setRenewalDateCrossed] = useState(0);

  useEffect(() => {
    if(account_status.subscription_renewal_date !== ''){
      var next_date = account_status.subscription_renewal_date;
      var next_arr = next_date.split('T');
      var next_date_real = next_arr[0];
      var is_renewal_date_crossed = 0;
      if (new Date() > new Date(next_date_real)){
        setRenewalDateCrossed(1);
      }else{
        setRenewalDateCrossed(0);
      }
    }
  }, [account_status]);

  const openCustomerPanel = () => {
    window.open('https://billing.stripe.com/p/login/dR66r9czj7NJeEU5kk', '_blank');
  }

  const [cancelSubscriptionPopupConfirmation, setCancelSubscriptionPopupConfirmation] = useState(false);
  const [cancelValue, setCancelValue] = useState("");

  const [cancelationStatus, setCancelationStatus] = useState(null);
  const [cancelSubscriptionPopup, setCancelSubscriptionPopup] = useState(false);
  async function cancelSubscription() {
    if(cancelValue !== 'CANCEL'){
        alert('Please type "CANCEL" in the box');
        return;
    }
    setCancelationStatus(null);
    try {
      let res = await fetch('https://oneclickhuman.com/api_request/cancel_subscription_live', {
       mode:'cors', 
       method: 'POST',
       body: JSON.stringify({
         'user_id' : account_status.user_id,
       }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      });

      let data = await res.json();
      if(data.status === 'redirect'){
          openCustomerPanel();
      }else{
        setCancelationStatus(data.status);
        setCancelSubscriptionPopupConfirmation(false);
        setCancelSubscriptionPopup(false);
        dispatch({type : 'cancel-success'});
      }
 } catch (error) {
     console.log(error);
 }
  }

  return (
    <>
      <div className="rbt-main-content mr--0 mb--0">
        <div className="rbt-daynamic-page-content center-width">
          <div className="rbt-dashboard-content">
            {/* <UserNav title="Profile Details" /> */}
            <br></br>
            <h3>Account Details</h3>

            <div className="content-page pb--50">
              <div className="row">
                <div className="col-lg-6">
                    { account_status.subscrption_status === 1 && is_renewal_date_crossed === 0 && 
                      <div className="single-settings-box profile-details-box top-flashlight light-xl leftside overflow-hidden">
                        <p className="plan-heading">
                          Monthly Plan<br/><br/>
                          <span className="current-plan" style={{fontSize: '13px', fontWeight: '600'}}>Current Plan</span>
                        </p>
                        <p className="features">
                         { account_status.monthly_plan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Words/month <br></br>
                         Access to All Modes <br></br>
                         Increased Speed <br></br>
                         Premium Support <br></br>
                         1500 Words/Article
                        </p>
                        <p className="plan-amnt">
                         <span>{account_status.currency}</span>
                         <span>{account_status.subscription_amount}</span>
                         <span>/month</span>
                        </p>
                        <button className="position-change btn-default btn-small round" onClick={() => router.push('/pricing')}>Upgrade Plan</button>
                      </div>
                    }

                    { account_status.onetime_credit > 0 && 
                       <div className="single-settings-box profile-details-box top-flashlight light-xl leftside overflow-hidden">
                       <p className="plan-heading">Onetime Plan</p>
                       <p className="features">
                        { account_status.onetime_credit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Words <br></br>
                        Access to All Modes <br></br>
                        Increased Speed <br></br>
                        Premium Support <br></br>
                        1500 Words/Article
                       </p>
                       <p className="plan-amnt">
                        <span>{account_status.currency}</span>
                        <span>{account_status.onetime_amount}</span>
                       </p>
                       <button className="position-change btn-default btn-small round" onClick={() => router.push('/pricing')}>Upgrade Plan</button>
                     </div>                   
                    }

                </div>
                <div className="col-lg-6">
                  
                </div>
              </div>
              
              <div className="chat-box-list">
                <ProfileBody user={account_status} />
              </div>

      { cancelSubscriptionPopup &&
         <div id="delete-popup">
            <div id="delete-popup-main">
             <div id="delete-popup-inner">
               <p>Are you sure you want to cancel the subscription?</p>
               <div>
                <button className="btn-default round" onClick={() => setCancelSubscriptionPopupConfirmation(true)}>Yes</button> 
                <button className="btn-default round" onClick={() => setCancelSubscriptionPopup(false)} style={{marginLeft: '20px'}}>No</button>
               </div>
              </div>
            </div>
           </div>  
      }
      { cancelSubscriptionPopupConfirmation &&
         <div id="delete-popup">
            <div id="delete-popup-main">
             <div id="delete-popup-inner">
               <div class="form-group">
                <label for="currentpassword">Please type "CANCEL" in the box</label>
                <input value={cancelValue} onChange={(e) => setCancelValue(e.target.value)} type="text" style={{border: '1px solid #7064e9'}}/>
               </div>
               <div>
                <button className="btn-default round" onClick={cancelSubscription}>Confirm Cancelation</button> 
                <button className="btn-default round" onClick={() => setCancelSubscriptionPopupConfirmation(false)} style={{marginLeft: '20px'}}>Back</button>
               </div>
              </div>
            </div>
           </div>  
      }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
