"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import sal from "sal.js";

const Compare = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <div className="rainbow-pricing-detailed-area mt--30 rainbow-section-gapTop">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-left mb--30"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="150"
            >
              <h3 className="title w-600 mb--0">Detailed Comparison</h3>
            </div>
          </div>
        </div>
        <div className="row row--15">
          <div className="col-lg-12">
            <div className="rainbow-compare-table style-1">
              <table className="table-responsive">
                <thead>
                  <tr>
                    <th className="style-prymary">Features</th>
                    <th className="style-prymary">Basic</th>
                    <th className="style-prymary">Business</th>
                    <th className="style-prymary">Advanced</th>
                    <th className="style-prymary sm-radius-top-right">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h6>Daily Word Limit</h6>
                    </td>
                    <td>
                    1500
                    </td>
                    <td>
                    No Daily Limit
                    </td>
                    <td>
                    No Daily Limit
                    </td>
                    <td>
                    No Daily Limit
                    </td>
                  </tr>
                  <tr>
                    <td><h6>Monthly Word Limit</h6></td>
                    <td>10,500</td>
                    <td>50,000</td>
                    <td>200,000</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td><h6>Bypass AI Detectors</h6></td>
                    <td>ZeroGPT, Content Detector, Writer.com, GPT Zero & More</td>
                    <td>ZeroGPT, Content Detector, Writer.com, GPT Zero & More</td>
                    <td>ZeroGPT, Content Detector, Writer.com, GPT Zero & More</td>
                    <td>ZeroGPT, Content Detector, Writer.com, GPT Zero & More</td>
                  </tr>
                  <tr>
                    <td><h6>Undetectable Content Generator</h6></td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><h6>Languages Supported</h6></td>
                    <td>10+ Languages</td>
                    <td>10+ Languages</td>
                    <td>10+ Languages</td>
                    <td>10+ Languages</td>
                  </tr>
                  <tr>
                    <td><h6>Support</h6></td>
                    <td>
                    Basic
                    </td>
                    <td>
                    Priority Support
                    </td>
                    <td>
                    Priority Support
                    </td>
                    <td>Priority Support</td>
                  </tr>
                  <tr>
                    <td><h6>API Access</h6></td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><h6>Maintain Formatting</h6></td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><h6>Maintain Grammar</h6></td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><h6>Lightning Mode</h6></td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Ideal For</h6>
                    </td>
                    <td>
                    New or low-volume users 
                    </td>
                    <td>
                    Solopreneurs, small businesses, or marketers 
                    </td>
                    <td>
                    Growing teams, agencies, or power users 
                    </td>
                    <td>
                    Large companies or agencies
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Key Features / Limits</h6>
                    </td>
                    <td>
                    Low monthly word limit, minimal support, limited features.
                    </td>
                    <td>
                    Higher word limit, essential features, standard support.
                    </td>
                    <td>
                    Everything in Pro plus advanced features, priority support,
                    </td>
                    <td>
                    API Access, Tailored solutions, dedicated account manager, SLA (Service Level Agreement), custom word limits, possibly on-prem or advanced compliance.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compare;
