"use client";

import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import sal from "sal.js";
import PaymentModal  from "./PaymentModal";
import { CSVLink } from "react-csv";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Payments = ({userData}) => {
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

  const columns = [
    {
      name: 'Email',
      selector: row => row.user_email,
      sortable: true,
    },
    {
      name: 'Amount Paid',
      selector: row => row.amount_paid + '$',
      sortable: true,
    },
    {
      name: 'Payment Type',
      selector: row => row.plan,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.created_at,
      sortable: true,
    },
  ];

  const [payments, setPayments] = useState([]);
  const [payment_details, setPaymentDetails] = useState({'onetime': 0, 'new_subscription' : 0, 'renewals' : 0});
  const [loading_payments, setLoadingPayments] = useState(false);

  useEffect(() => {
    //console.log(has_subscription);
     fetch('https://oneclickhuman.com/api_request/get_payments', {
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
              setPayments(json.payments);
              setLoadingPayments(false);
          });
   
   }, [1]);

useEffect(() => {
  console.log(payments);
  var new_subscription_amount = 0;
  var renewals_amount = 0;
  var onetime_amount = 0;

  payments.map((payment, index) => {
     if(payment.plan === 'renewal'){
         if(payment.currency === 'USD'){
              renewals_amount = renewals_amount + payment.amount_paid*83;
         }else{
             renewals_amount = renewals_amount + payment.amount_paid;
         }
     }
     if(payment.plan === 'new subscription'){
         if(payment.currency === 'USD'){
             new_subscription_amount = new_subscription_amount + payment.amount_paid*83; 
         }else{
           new_subscription_amount = new_subscription_amount + payment.amount_paid; 
         }            
     }
     if(payment.plan === 'onetime'){
         if(payment.currency === 'USD'){
             onetime_amount = onetime_amount + payment.amount_paid*83;
         }else{
            onetime_amount = onetime_amount + payment.amount_paid;
         }
     }
  });

setPaymentDetails({...payment_details, onetime: onetime_amount, new_subscription: new_subscription_amount, renewals: renewals_amount})
console.log(payments);

}, [payments]);

const [PaymentFilterPopup, setPaymentFilterPopup] = useState(false);
const [paymentFilter, setPaymentFilter] = useState({
    start_date: '',
    end_date: '',
    payment_type: 'Subscriber',
    filter_progress: false,
    filter_applied: false, 
});

const filterPayment = (e) => {
  e.preventDefault();
  setPaymentFilter({...paymentFilter, filter_applied: true, filter_progress: true});
  
  fetch('https://oneclickhuman.com/api_request/get_payments', {
     mode:'cors', 
     method: 'POST',
     body: JSON.stringify({
       'user_id' : userData.user_id,
       'start_date' : paymentFilter.start_date,
       'end_date' : paymentFilter.end_date,
       'payment_type' : paymentFilter.payment_type,
       'filter' : true,
     }),
     headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
   }).then(res => res.json())
     .then((json) => {
        console.log(json.payments);
        setPayments(json.payments);
        setPaymentFilter({...paymentFilter, filter_progress: false}); 
        setPaymentFilterPopup(false);
   }); 
}

const headers = [
  { label: "Email", key: "user_email" },
  { label: "Amount Paid", key: "amount_paid" },
  { label: "Payment Type", key: "plan" },
  { label: "Date", key: "created_at" }
];

const csvReport = {
  data: payments,
  headers: headers,
  filename: 'Report.csv'
};

// Chart code
const [PaymentChart, setPaymentChart] = useState([]);
useEffect(() => {
    fetch('https://oneclickhuman.com/api_request/get_payments_chart', {
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
         const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
         let formattedResults = json.map((obj) => {
             const [year, month] = obj.month.split('-');
             return {"month": monthNames[parseInt(month, 10) - 1], "payment": obj.payment }
         });
         setPaymentChart(formattedResults);
    });

}, [1]);
  
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
              { loading_payments === false ?
                    <>
                    <div className="row">
                      <div className="col-md-8">
                        <h2>Payment Details</h2>
                        <h4 style={{width: '60%', fontSize: '16px'}}>
                          Total Payments: { payment_details.onetime + payment_details.new_subscription + payment_details.renewals }$<br></br><small style={{fontWeight: '500'}}>OneTime - {payment_details.onetime}$ | New Subscription - {payment_details.new_subscription}$ | Renewals - {payment_details.renewals}$</small>
                        </h4>
                      </div>
                      <div className="col-md-4">
                      <div>
                      <span style={{float: 'right'}}>
                        <CSVLink {...csvReport}>Export to CSV</CSVLink> <i style={{marginLeft: '20px', cursor: 'pointer'}} className="feather-filter" onClick={() => setPaymentFilterPopup(true)}></i>
                      </span>
                    </div>
                      </div>
                    </div> 
                    <DataTable
                      columns={columns}
                      data={payments}
                      pagination
                    />
                    { PaymentFilterPopup &&
                    <PaymentModal 
                      paymentFilter={paymentFilter}
                      setPaymentFilter={setPaymentFilter}
                      setPaymentFilterPopup={setPaymentFilterPopup}
                      filterPayment={filterPayment} />
                    }
                                   <div style={{ 
                       width: 'fit-content', 
                       background: '#fff', 
                       margin: '16px', 
                       marginTop: '48px', 
                       padding: '40px 20px 20px 0px'
                   }}>
                   <h4 style={{color: '#000', marginLeft: '21px', marginBottom: '27px'}}>Monthy Payments ($)</h4>
                  <ResponsiveContainer width={850} height={300}>
                     <LineChart data={PaymentChart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                      <Line type="monotone" dataKey="payment" stroke="#8884d8" />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                     </LineChart>
                  </ResponsiveContainer> 
               </div> 
                    </>
                    : 
                    <div>
                      Getting payments....
                    </div>
                  }
              </div>
            </div>
          </div>

    </>
  );

};

export default Payments;
