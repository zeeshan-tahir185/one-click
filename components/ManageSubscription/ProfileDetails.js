import React, { useState, useEffect } from "react";
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
    if(cancelValue.toLowerCase() != 'cancel'){
        alert('Please type "CANCEL" in the box');
        return;
    }
    setCancelationStatus(null);
    try {
      let res = await fetch('https://oneclickhuman.com/api_request/cancel_subscription', {
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
            <h3>Manage Subscription</h3>

            <div className="content-page pb--50">
              <div className="row">
                <div className="col-lg-6">
                  
                  <div className="single-settings-box profile-details-box top-flashlight light-xl leftside overflow-hidden">
                    <p className="plan-heading">Word Balance Available</p> 
                    
                    { account_status.subscrption_status === 1 &&
                     <div style={{marginBottom: '35px'}}>
                      <div className="progress-top">
                        <p className="progress-label">Monthly Word Balance</p>
                        <p className="progress-value">{account_status.credits_availbe.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/{account_status.monthly_plan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                      </div>
                      <ProgressBar bgcolor="#48c1c7" progress={account_status.credits_availbe} max={account_status.monthly_plan}/> 
                      {/* <div className="progress-btm">{subscription_expiry} days to expiry</div> */}
                     </div>
                    }

                    { account_status.onetime_plan !== 0 &&
                     <div style={{marginBottom: '35px'}}>
                      <div className="progress-top">
                        <p className="progress-label">Onetime Word Balance</p>
                        <p className="progress-value">{account_status.onetime_credit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/{account_status.onetime_plan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                      </div>
                      <ProgressBar bgcolor="#48c1c7" progress={account_status.onetime_credit} max={account_status.onetime_plan}/> 
                      <div className="progress-btm">No expiry</div>
                     </div>
                    }

                    <div style={{marginBottom: '40px'}}>
                     <div className="progress-top">
                       <p className="progress-label">Free Daily Word Balance</p>
                       <p className="progress-value">{account_status.quota.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/{(1500).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                     </div>
                     <ProgressBar bgcolor="orange" progress={account_status.quota} max="1500" /> 
                     {/* { reset_hours !== 0 ?
                       <div className="progress-btm">{reset_hours} hours to refill</div>
                       : ''
                     } */}
                   </div> 
                   <div className="next-payment-row">
                    <button className="btn-default btn-small round mybtn" onClick={() => router.push('/pricing')}>Purchase Lifetime Words</button>
                    <button className="btn-default btn-small round mybtn" onClick={() => router.push('/pricing')}>Upgrade Monthly Plan</button>
                   </div>
                      </div>

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
                  { account_status.subscrption_status === 1 && 
                     <div className="single-settings-box profile-details-box top-flashlight light-xl leftside overflow-hidden">
                       <p className="plan-heading" style={{marginBottom: '10px'}}>Subscription Valid till</p>
                       <p style={{fontSize: '20px', fontWeight: '500', marginBottom: '10px'}}>{account_status.subscription_renewal_date.split('T')[0]}</p>
                       <p className="plan-heading" style={{marginBottom: '10px'}}>Subscription Status</p>
                       <p style={{fontSize: '20px', fontWeight: '500'}}>{account_status.cancellation_status === 1 ? 'Cancelled' : 'Active'}</p>
                       <div className="btn-block">
                        <button className="btn-default btn-small round" onClick={() => openCustomerPanel()}>Update Payment Method</button>
                        { account_status.cancellation_status === 0 &&
                          <button className="btn-default btn-small round" onClick={() => setCancelSubscriptionPopup(true)}>Cancel Subscription</button>
                        }
                        <button className="btn-default btn-small round" onClick={() => openCustomerPanel()}>Invoice</button>
                       </div>
                       { cancelationStatus &&
                         <p style={{marginBottom: '0px', marginTop: '20px'}}>{cancelationStatus}</p>
                       }
                     </div>                   
                  }
                </div>
              </div>
              
              <div className="chat-box-list">
                {/* <ProfileBody user={account_status} /> */}
              </div>

      { cancelSubscriptionPopup &&
         <div id="delete-popup">
            <div id="delete-popup-main">
             <div id="delete-popup-inner">
               <p>Are you sure you want to cancel the subscription?</p>
               <div>
                <button className="btn-default" onClick={() => setCancelSubscriptionPopupConfirmation(true)}>Yes</button> 
                <button className="btn-default" onClick={() => setCancelSubscriptionPopup(false)} style={{marginLeft: '20px'}}>No</button>
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
                <button className="btn-default" onClick={cancelSubscription}>Confirm Cancelation</button> 
                <button className="btn-default" onClick={() => setCancelSubscriptionPopupConfirmation(false)} style={{marginLeft: '20px'}}>Back</button>
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
