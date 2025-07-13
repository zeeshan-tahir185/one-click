"use client";

import React, { useEffect, useState } from "react";

import sal from "sal.js";

const Home = ({userData}) => {
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

  const [website_status, setWebsiteStatus] = useState({'active_users': 0, 'total_earnings' : 0, 'active_subscribers' : 0}); 

  useEffect(() => {
      fetch('https://oneclickhuman.com/api_request/get_admin_home', {
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
          console.log(json);
            setWebsiteStatus({...website_status, active_users: json.active_users,total_earnings: json.earnings,active_subscribers: json.active_subscribers});
         });
  }, [1])
  
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
              <div className="inner" style={{padding: '25px'}}>
                 <h2>Overview</h2>
                 <div className="row">
                   <div className="col-md-4">
                    <div className="admin-card">
                      <p style={{color: '#ffffff'}}>Active Users</p>
                      <h3 style={{color: '#ffffff'}}>{website_status.active_users}</h3>
                    </div>
                   </div>
                   <div className="col-md-4">
                   <div className="admin-card">
                      <p style={{color: '#ffffff'}}>Active Subscribers</p>
                      <h3 style={{color: '#ffffff'}}>{website_status.active_subscribers}</h3>
                    </div>
                   </div>
                   <div className="col-md-4">
                   <div className="admin-card">
                      <p style={{color: '#ffffff'}}>Total Earnings</p>
                      <h3 style={{color: '#ffffff'}}>{website_status.total_earnings}$</h3>
                    </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>

    </>
  );

};

export default Home;
