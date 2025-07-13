"use client"

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/Context";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import sal from "sal.js";

import boxedLogo from "../../public/images/logo/boxed-logo.png";
import boxedLogoLight from "../../public/images/logo/boxed-logo-light.png";
//import boxedLogoLight from "../../public/images/logo/boxed-logo-light.png";
//import google from "../../public/images/sign-up/google.png";
//import facebook from "../../public/images/sign-up/facebook.png";

const ForgotPass = () => {
  const { isLightTheme } = useAppContext();
  useEffect(() => {
    sal();

    const cards = document.querySelectorAll(".bg-flashlight");

    cards.forEach((bgflashlight) => {
      bgflashlight.onmousemove = function (e) {
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;

        bgflashlight.style.setProperty("--x", x + "px");
        bgflashlight.style.setProperty("--y", y + "px");
      };
    });
  }, []);

  const [resetPass, setResetPass] = useState(false);
  const [forgot_pass_email, setForgotPassEmail] = useState('');
  const [forgot_pass_submit, setForgotPassSubmit] = useState(false);
  const [resetPassOTP, setResetPassOTP] = useState('');
  const [resetPassNew, setResetPassNew] = useState('');
  const [resetPassConfirm, setResetPassConfirm] = useState('');
  const [reset_pass_submit, setResetPassSubmit] = useState(false);
  const [reset_pass_success, setResetPassSuccess] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");

 const sendOTP = (e) => {
    e.preventDefault();
 
    if(forgot_pass_email === ''){
        setError('Please enter your email');
        return;
    }
    setForgotPassSubmit(true);
    setError('');

    fetch('https://oneclickhuman.com/api_request/forgot_password', {
       mode:'cors', 
       method: 'POST',
       body: JSON.stringify({
         'email' : forgot_pass_email
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       }
     }).then(res => res.json())
       .then((json) => {
               //console.log(json); 
               if(json.status === 'success'){
                    setForgotPassSubmit(false);
                    setResetPass(true);
                    setError("");
               }
     });
 }
 const handleResetPassword = (e) => {
    e.preventDefault();
    if(resetPassOTP === ''){
        setError('Please Enter OTP');
        return;
    }  
    if(resetPassNew === ''){
        setError('Please Enter new password');
        return;
    }
    if(resetPassConfirm === ''){
        setError('Please Enter confirm password');
        return;
    }
    if(resetPassNew !== resetPassConfirm){
        setError('New Password and Confirm Password does not match!');
        return;
    }
 
    setResetPassSubmit(true);
    setError('');
 
    fetch('https://oneclickhuman.com/api_request/reset_password', {
       mode:'cors', 
       method: 'POST',
       body: JSON.stringify({
         'email' : forgot_pass_email,
         'new_password' : resetPassNew,
         'otp' : resetPassOTP
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       }
     }).then(res => res.json())
       .then((json) => {
               //console.log(json); 
               if(json.status === 'success'){
                    setResetPassSubmit(false);
                    setResetPassSuccess(true);
                    setTimeout(() => {
                      router.push('/signin');
                    }, 3000)
               }else{
                  setResetPassSubmit(false);
                  setError('Reset Password Fail');
               }
     });  
 }

  return (
    <>
      <div
        className="signup-area rainbow-section-gapTop-big"
        data-black-overlay="2"
      >
        <div className="sign-up-wrapper rainbow-section-gap">
          <div className="sign-up-box bg-flashlight">
            <div className="signup-box-top top-flashlight light-xl">
              <Image
                className={`${
                  isLightTheme ? "boxed-logo-dark" : "boxed-logo-light"
                }`}
                src={isLightTheme ? boxedLogo : boxedLogoLight}
                width={476}
                height={158}
                alt="sign-up logo"
              />
            </div>
            <div className="separator-animated animated-true"></div>
            <div className="signup-box-bottom">
              { !resetPass &&
              <div className="signup-box-content">
                <h4 className="title">Forgot Password</h4>
                <p>Submit your email id, we will send an otp for resetting new password.</p>
                <form>
                  <div className="input-section mail-section">
                    <div className="icon">
                      <i className="feather-mail"></i>
                    </div>
                    <input 
                       type="email" 
                       placeholder="Enter email address"
                       value={forgot_pass_email}
                       onChange={(e) => setForgotPassEmail(e.target.value)} 
                    />
                  </div>
                  <button type="button" onClick={sendOTP} className="btn-default round" disabled={forgot_pass_submit}>
                  {forgot_pass_submit ? "Sending..." : "Send OTP"}
                  </button>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
              }

              { resetPass &&
              <div className="signup-box-content">
                <h4 className="title">Reset Password</h4>
                <p>We have sent an OTP to your email id, Please enter otp and set new password</p>
                <form>
                  <div className="input-section mail-section">
                    <div className="icon">
                      <i className="feather-lock"></i>
                    </div>
                    <input 
                       type="text" 
                       placeholder="Enter OTP"
                       value={resetPassOTP}
                       onChange={(e) => setResetPassOTP(e.target.value)} 
                    />
                  </div>
                  <div className="input-section mail-section">
                    <div className="icon">
                      <i className="feather-lock"></i>
                    </div>
                    <input 
                       type="text" 
                       placeholder="Enter new password"
                       value={resetPassNew}
                       onChange={(e) => setResetPassNew(e.target.value)} 
                    />
                  </div>
                  <div className="input-section mail-section">
                    <div className="icon">
                      <i className="feather-lock"></i>
                    </div>
                    <input 
                       type="text" 
                       placeholder="Enter confirm password"
                       value={resetPassConfirm}
                       onChange={(e) => setResetPassConfirm(e.target.value)} 
                    />
                  </div>
                  <button type="button" onClick={handleResetPassword} className="btn-default round" disabled={reset_pass_submit}>
                  {reset_pass_submit ? "Submitting..." : "Submit"}
                  </button>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
                { reset_pass_success && <p>New Password reset success, redirecting to login...</p> }
              </div>
              } 

              <div className="signup-box-footer">
                <div className="bottom-text">
                  Don&apos;t have an account?
                  <Link className="btn-read-more ps-2" href="/signup">
                    <span>Sign Up</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
