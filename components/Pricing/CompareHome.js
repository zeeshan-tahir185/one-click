"use client";

import React, { useEffect } from "react";
import sal from "sal.js";

const CompareHome = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <div className="rainbow-pricing-detailed-area mt--30 rainbow-section-gapTop">
        <div className="row row--15">
          <div className="col-lg-12">
            <div className="rainbow-compare-table style-1">
              <table className="table-responsive">
                <thead>
                  <tr>
                    <th className="style-prymary"></th>
                    <th className="style-prymary">Free (Basic)</th>
                    <th className="style-prymary">Business (Pro)</th>
                    <th className="style-prymary">Advanced</th>
                    <th className="style-prymary sm-radius-top-right">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
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

export default CompareHome;
