"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/Context";
import React, { useEffect, useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import sal from "sal.js";

import boxedLogo from "../../public/images/logo/boxed-logo.png";
import boxedLogoLight from "../../public/images/logo/boxed-logo-light.png";

const SignUp = () => {
  const { isLightTheme } = useAppContext();

  const router = useRouter();
  useEffect(() => {
    async function testSession() {
      let session1 = await getSession();
      if(session1){
        router.push("/humanizer");
      }  
    }
    
    testSession();

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnf_password, setCnfPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [account_created, setAccountCreated] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    if(cnf_password !== password){
      setError('Password and Confirm Password does not match');
    } 
    setSubmitting(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      isSignUp: true,
    });
  
    if (res?.error) {
      setError(res.error);
      setSubmitting(false);
    } else {
      // Explicitly call getSession to update session data after login
      const session = await getSession();
      if (session) {
        //console.log("Session data:", session);
        if(session.user.user_id === 0){
          setError("User already exists");
        }else{
          setSubmitting(false);
          setAccountCreated(true);
        }
      } else {
        console.log("No session available");
      }
    }
  };

  
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
              <div className="signup-box-content">
                <h4>Try us Free for 7 Days</h4>
                <h4 className="title">Create Account</h4>
                <div className="social-btn-grp">
                  {/* <Link className="btn-default btn-border" href="#">
                    <span className="icon-left">
                      <Image
                        src={google}
                        width={18}
                        height={18}
                        alt="Google Icon"
                      />
                    </span>
                    Login with Google
                  </Link>
                  <Link className="btn-default btn-border" href="#">
                    <span className="icon-left">
                      <Image
                        src={facebook}
                        width={18}
                        height={18}
                        alt="Google Icon"
                      />
                    </span>
                    Login with Facebook
                  </Link> */}
                </div>
                {/* <div className="text-social-area">
                  <hr />
                  <span>Or continue with</span>
                  <hr />
                </div> */}
                <form onSubmit={handleSignUp}>
                  {/* <div className="input-section mail-section">
                    <div className="icon">
                      <i className="feather-user"></i>
                    </div>
                    <input type="text" placeholder="Enter Your Name" />
                  </div> */}
                  <div className="input-section mail-section">
                    <div className="icon">
                      <i className="feather-mail"></i>
                    </div>
                    <input 
                      type="email" 
                      placeholder="Enter email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="input-section password-section">
                    <div className="icon">
                      <i className="feather-lock"></i>
                    </div>
                    <input 
                       type="password" 
                       placeholder="Create Password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="input-section password-section">
                    <div className="icon">
                      <i className="feather-lock"></i>
                    </div>
                    <input 
                       type="password" 
                       placeholder="Confirm Password"
                       value={cnf_password}
                       onChange={(e) => setCnfPassword(e.target.value)} />
                  </div>
                  <button type="submit" className="btn-default round" disabled={submitting}>
                  {!submitting && !account_created && "Sign up"}
                  {submitting && "Creating account..."}
                  {account_created && "Waiting for verification"}
                  </button>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {account_created && <p style={{ color: "#fff", marginTop: '12px' }}>Account Created, please check your email and verify.</p>}
              </div>
              <div className="signup-box-footer">
                <div className="bottom-text">
                  Don&apos;t have an account?
                  <Link className="btn-read-more ps-2" href="/signin">
                    <span>Sign In</span>
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

export default SignUp;
