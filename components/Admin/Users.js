"use client";

import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import sal from "sal.js";
import UserModal from "./UserModal";
import { CSVLink } from "react-csv";

const Users = ({userData}) => {
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
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'User Type',
      selector: row => row.user_type,
      sortable: true,
    },
    {
      name: 'Registration Date',
      selector: row => row.created_at,
      sortable: true,
    },
  ];

  const [users, setusers] = useState([]);
const [loading_users, setLoadingUsers] = useState(true);

useEffect(() => {
  fetch('https://oneclickhuman.com/api_request/get_users', {
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
           setusers(json.users);
           setLoadingUsers(false);
       });

}, [1]);

const [UserFilterPopup, setUserFilterPopup] = useState(false);
const [userFilter, setUserFilter] = useState({
    date: '3',
    plan: 'Any',
    user_type: 'All',
    filter_progress: false,
    filter_applied: false, 
});

const filterUser = (e) => {
   e.preventDefault();
   setUserFilter({...userFilter, filter_applied: true, filter_progress: true});
   
   fetch('https://oneclickhuman.com/api_request/get_users', {
      mode:'cors', 
      method: 'POST',
      body: JSON.stringify({
        'user_id' : userData.user_id,
        'date' : userFilter.date,
        'user_type' : userFilter.user_type,
        'filter' : true,
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(res => res.json())
      .then((json) => {
         //console.log(json.users);
         setusers(json.users);
         setUserFilter({...userFilter, filter_progress: false}); 
         setUserFilterPopup(false);
    }); 
}

const headers = [
  { label: "Email", key: "email" },
  { label: "User Type", key: "user_type" },
  { label: "Registration Date", key: "created_at" }
];

const csvReport = {
  data: users,
  headers: headers,
  filename: 'Report.csv'
};
  
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
              { loading_users === false ?
                    <>
                    <div className="row">
                      <div className="col-md-7">
                        <h2>List of users</h2>
                      </div>
                      <div className="col-md-5">
                      <div>
                      <span style={{float: 'right'}}>
                        <CSVLink {...csvReport}>Export to CSV</CSVLink> <i style={{marginLeft: '20px', cursor: 'pointer'}} className="feather-filter" onClick={() => setUserFilterPopup(true)}></i>
                      </span>
                    </div>
                      </div>
                    </div> 
                    <DataTable
                      columns={columns}
                      data={users}
                      pagination
                    />
                    { UserFilterPopup &&
                    <UserModal 
                      userFilter={userFilter}
                      setUserFilter={setUserFilter}
                      setUserFilterPopup={setUserFilterPopup}
                      filterUser={filterUser} />
                    }
                    </>
                    : 
                    <div>
                      Getting users....
                    </div>
                  }
              </div>
            </div>
          </div>

    </>
  );

};

export default Users;
