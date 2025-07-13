import { useSession } from "next-auth/react";

export default function FreeItem({parentClass, incresePrice, subsCriptionStatus, oneTimePlan}) {

  const { data: session } = useSession();

    return(
      <div className={`${parentClass} ${!incresePrice ? "mt--30" : ""}`}>
       <div className="rainbow-pricing style-chatenai">
          <div className="pricing-table-inner bg-flashlight">
            
            <div className="pricing-top">
              <div className="pricing-header">
                <h4 className="title">Basic</h4>
                
                <div className="pricing">
                  <div className="price-wrapper">
                    <span className="price">Free</span>
                  </div>
                  <span className="subtitle">For 7 Days</span>
                </div>
      
                <div className="separator-animated animated-true mt--30 mb--30"></div>
              </div>
      
              <div className="pricing-body">
                <ul className="list-style--1">
                  <li><i className="feather-check-circle pe-2"></i>10,500 Words during trial period</li>
                  <li><i className="feather-check-circle pe-2"></i>Maintain Formatting</li>
                  <li><i className="feather-check-circle pe-2"></i>1500 Word Daily limit, 325 word per article</li>
                  <li><i className="feather-check-circle pe-2"></i>Beat ZeroGPT Detector</li>
                  <li><i className="feather-check-circle pe-2"></i>10+ Languages</li>
                  <li><i className="feather-check-circle pe-2"></i>Email Support</li>
                </ul>
              </div>
            </div>
      
            <div className="pricing-footer">
              { session ?
                <>
                { subsCriptionStatus === 0 && oneTimePlan === 0 ?
                  <div style={{textAlign: 'center', marginBottom: '35px'}}>
                    <span className="current-plan">Current Plan</span>
                  </div>
                  :
                  <a className="btn-default round" href="/humanizer">Get Started</a>
                }
                </>
                :
                <a className="btn-default round" href="/signup">Get Started</a>
              }
            </div>
      
          </div>
        </div>
      </div>      
    )
}