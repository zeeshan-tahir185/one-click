"use client";

import React, { useEffect, useState } from "react";

import sal from "sal.js";

const Settings = ({userData}) => {
  useEffect(() => {
    sal();

    const cards = document.querySelectorAll(".bg-flashlight");

    cards.forEach((bgflashlight) => {
      bgflashlight.onmousemove = function (e) {
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;
      };
    });
  }, []);



  const [open_ai, setOpenAi] = useState({free_users: '', paid_users: ''});
  const [stripe, setStripe] = useState({secret_key: '', webhook: ''});

  useEffect(() => {
      fetch('https://oneclickhuman.com/api_request/get_open_ai', {
        mode:'cors', 
        method: 'POST',
          body: JSON.stringify({
          'user_id' : userData.user_id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
       }).then(res => res.json())
         .then((json) => {
          //console.log(json);
          setOpenAi({...open_ai, free_users: json.secret_key_free, paid_users: json.secret_key_paid})
      });
  
      fetch('https://oneclickhuman.com/api_request/get_stripe', {
        mode:'cors', 
        method: 'POST',
          body: JSON.stringify({
          'user_id' : userData.user_id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
       }).then(res => res.json())
         .then((json) => {
          //console.log(json);
           setStripe({...stripe, secret_key: json.secret_key, webhook: json.webhook})
      });
  }, [1])

const [updating, setUpdating] = useState({status: false, target: '', processed: false});
const updateOpenAi = (target) => {
    setUpdating({...updating, status: true, target: target, processed: false});
    fetch('https://oneclickhuman.com/api_request/set_open_ai', {
      mode:'cors', 
      method: 'POST',
        body: JSON.stringify({
        'user_id' : userData.user_id,
        'free_users' : open_ai.free_users, 
        'paid_users' : open_ai.paid_users,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
     }).then(res => res.json())
       .then((json) => {
         // console.log(json.status);
          if(json.status === 'success'){
              setUpdating({...updating, status: false, target: '', processed: true});
          }
    }); 
} 
const updateStripe = (target) => {
    setUpdating({...updating, status: true, target: target, processed: false});
    fetch('https://oneclickhuman.com/api_request/set_stripe', {
      mode:'cors', 
      method: 'POST',
        body: JSON.stringify({
        'user_id' : userData.user_id,
        'secret_key' : stripe.secret_key, 
        'webhook' : stripe.webhook,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
     }).then(res => res.json())
       .then((json) => {
        //  console.log(json.status);
          if(json.status === 'success'){
              setUpdating({...updating, status: false, target: '', processed: true});
          }
    }); 
} 
  
  return (
    <>
          <div
            className="chat-box-list pt--30"
            id="chatContainer"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="100"
          >
            <div className="chat-box author-speech">
              <div className="inner" style={{padding: '30px'}}>
                 <h3>Settings</h3>
                 <div className="setting_section">
                  <div className="row">
                    <div className="col-md-8">
                      <h5>OpenAI Secret Key (Paid Users)</h5>
                      <div className="inputBox">
                        <input type="text" value={open_ai.paid_users} onChange={(e) => setOpenAi({...open_ai, paid_users: e.target.value})} />
                      </div>
                    </div>
                    <div className="col-md-4" style={{alignContent: 'end'}}>
                      <button className="btn-default btn-small" onClick={() => {updateOpenAi('paid')}}>{updating.status === true && updating.target === 'paid' ? 'Updating...': 'Update'}</button>
                    </div>
                  </div>
                  <br/>
                  <div className="row">
                    <div className="col-md-8">
                      <h5>OpenAI Secret Key (Free Users)</h5>
                      <div className="inputBox">
                        <input type="text" value={open_ai.free_users} onChange={(e) => setOpenAi({...open_ai, free_users: e.target.value})} />
                       </div>
                    </div>
                    <div className="col-md-4" style={{alignContent: 'end'}}>
                      <button className="btn-default btn-small" onClick={() => {updateOpenAi('free')}}>{updating.status === true && updating.target === 'free' ? 'Updating...': 'Update'}</button>
                    </div>
                  </div>
                  <br/>
                  <div className="row">
                    <div className="col-md-8">
                      <h5>Stripe Secret Key</h5>
                      <div className="inputBox">
                        <input type="text" value={stripe.secret_key} onChange={(e) => setStripe({...stripe, secret_key: e.target.value})} />
                      </div>
                    </div>
                    <div className="col-md-4" style={{alignContent: 'end'}}>
                      <button className="btn-default btn-small" onClick={() => {updateStripe('secret')}}>{updating.status === true && updating.target === 'secret' ? 'Updating...': 'Update'}</button>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
          </div>

    </>
  );

};

export default Settings;
