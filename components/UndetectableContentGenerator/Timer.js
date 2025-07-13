import { useEffect, useState } from "react";
import Image from "next/image";
import timer from "../../public/images/expired.png";

export default function Timer({currentDate, router, showTimerPopup}){

    const [countdown, setCountdown] = useState('');

    var timeArr = currentDate.split("-");
    var newd = parseInt(timeArr[2]) + 1;
    var newtime = timeArr[0] + '-' + timeArr[1] + '-' + newd;
    var countDownDate = new Date(`${newtime} 00:00:00`).getTime();
    var x = setInterval(function() {
    var dt = new Date();
    var edt = dt.toLocaleString('en-US', {timeZone: 'America/New_York'});
    var now = new Date(edt).getTime();
    var distance = countDownDate - now;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = ("0" + hours).slice(-2);
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    minutes = ("0" + minutes).slice(-2);
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    seconds = ("0" + seconds).slice(-2);
    var pendingTime = hours + ":" + minutes + ":" + seconds;
    setCountdown(pendingTime);
    if(distance < 0) {
         clearInterval(x);
         pendingTime = "EXPIRED";
     }
   }, 1000); 

   return(
    <div id="popup">
      <div id="popup-main">
        <div id="popup-inner">
          <div id="first-pro">
           <Image 
             src={timer} 
             width={130}
             height={130}
             alt="Timer"
           />
           <h3>Daily Word Balance Exhausted</h3>
           <p>Word Balance will refill in</p>
           <div id="timer-counter">
             {countdown}       
           </div>
           <button onClick={() => router.push('/pricing')} className="btn-default btn-small round"><i className="feather-unlock"></i> Unlock More Words</button>
          </div>
        </div>
        <span id="popup-close" onClick={() => showTimerPopup({status: false, current_date: null})}><i className="feather-x"></i></span>
      </div>
    </div>
   )
}