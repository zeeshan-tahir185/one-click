"use client";

import React, { useEffect, useState } from "react";
import sal from "sal.js";

const UserModal = ({userFilter, setUserFilter, setUserFilterPopup, filterUser}) => {

  useEffect(() => {
    sal();
  }, []);

  return (
    <>
      {/* ==== DisLike Section Modal ==== */}
      <div
        id="userModal"
        className="rbt-modal-box dislike-modal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content wrapper top-flashlight leftside light-xl">
            <h4>Filter Users</h4>
            <div className="inputBox">
              <label>Date</label>
              <select className="form-select" value={userFilter.date} onChange={(e) => setUserFilter({...userFilter, date: e.target.value})}>
                <option value="3">Last 3 days</option>
                <option value="30">Last 30 days</option>
                <option value="60">Last 60 days</option>
                <option value="180">Last 6 months</option>
                <option value="365">Last Year</option>
              </select>              
            </div>
            <div className="inputBox">
              <label>User Type</label>
              <select className="form-select" value={userFilter.user_type} onChange={(e) => setUserFilter({...userFilter, user_type: e.target.value})}>
                <option value="All">All</option>
                <option value="Subscribers">Subscribers</option>
                <option value="Canceled Subscribers">Canceled Subscribers</option>
                <option value="Lifetime">Lifetime Users</option>
                <option value="Free">Free Users</option>
              </select>              
            </div>
            <button onClick={filterUser} className="btn-default round">
              {userFilter.filter_progress ? 'Filtering users...' : 'Apply Filter'}
            </button>
            <button className="close-button" onClick={() => setUserFilterPopup(false)}>
              <i className="feather-x"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
