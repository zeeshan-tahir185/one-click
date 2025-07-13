"use client"

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/Context";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, getSession } from "next-auth/react";

import sal from "sal.js";

import boxedLogo from "../../public/images/logo/boxed-logo.png";
import boxedLogoLight from "../../public/images/logo/boxed-logo-light.png";

const SignIn = () => {

  
  const { isLightTheme } = useAppContext();
  useEffect( () => {
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
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/humanizer";

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Signing in...');
  setSubmitting(true);

  const res = await signIn("credentials", {
    email,
    password,
    redirect: false, // We'll handle redirects manually
    callbackUrl,
  });

  if (res?.error) {
    setError(res.error);
    setSubmitting(false);
  } else {
    router.push(callbackUrl);
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
                <h4 className="title">Welcome Back!</h4>
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
                <form onSubmit={handleSubmit}>
                  <div className="input-section mail-section">
                    <div className="icon">
                      <i className="feather-mail"></i>
                    </div>
                    <input 
                       type="email" 
                       placeholder="Enter email address"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)} 
                    />
                  </div>
                  <div className="input-section password-section">
                    <div className="icon">
                      <i className="feather-lock"></i>
                    </div>
                    <input
                       type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder="Password"
                    />
                  </div>
                  <div className="forget-text">
                    <Link className="btn-read-more" href="/forgotPassword">
                      <span>Forgot password</span>
                    </Link>
                  </div>
                  <button type="submit" className="btn-default round" disabled={submitting}>
                  {submitting ? "Signing in..." : "Sign In"}
                  </button>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
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

export default SignIn;
