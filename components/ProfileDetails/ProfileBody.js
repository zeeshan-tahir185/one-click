"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";

const ProfileBody = ({user}) => {
  
  const [new_email, setNewEmail] = useState({ email: '', password: '', password_not_match: false, status: false });
  const changeEmail = (e) => {
    e.preventDefault();
    setNewEmail({ ...new_email, password_not_match: false, status: false });
 
     if(new_email.email === '' && new_email.password === ''){
       alert('Please enter email and current password');
       return;
     }
 
     fetch('https://oneclickhuman.com/api_request/change_email', {
       mode:'cors', 
       method: 'POST',
       body: JSON.stringify({
         'email' : new_email.email,
         'password' : new_email.password,
         'user_id' : user.user_id
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       }
     }).then(res => res.json())
       .then((json) => {
          //console.log(json);
          if(json.status === 'failure' && json.password_matched === 'failure'){
            setNewEmail({...new_email, password_not_match: true});
          }else{
            signOut({ callbackUrl: "/signin" });
          }
     });	
 }

 const [password_change, setPasswordChange] = useState({ current_password: '', new_password: '', cnf_password: '', password_not_match: false, status: false });
 const changePassword = (e) => {
     e.preventDefault();
 
     setPasswordChange({ ...password_change, password_not_match: false, status: false });
 
     if(password_change.new_password !== password_change.cnf_password){
       alert('Current password and confirm password does not matched');
         return;
     }
 
     fetch('https://oneclickhuman.com/api_request/change_password', {
       mode:'cors', 
       method: 'POST',
       body: JSON.stringify({
         'new_password' : password_change.new_password,
         'current_password' : password_change.current_password,
         'user_id' : user.user_id
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       }
     }).then(res => res.json())
       .then((json) => {
          //console.log(json);
          if(json.status === 'failure' && json.password_matched === 'failure'){
               setPasswordChange({...password_change, password_not_match: true});
          }else{
             signOut({ callbackUrl: "/signin" });
          }
     });
 }

 const [delete_acc_modal, setDeleteAccModal] = useState(false);
 const [is_account_deleted, setAccountDeleted] = useState(false);
 const [deleteValue, setDeleteValue] = useState("");
 const deleteAccount = () => {
  if(deleteValue !== 'DELETE'){
    alert('Please type "DELETE" in the box');
    return;
  }
  fetch('https://oneclickhuman.com/api_request/delete_account', {
    mode:'cors', 
    method: 'POST',
    body: JSON.stringify({
    'user_id' : user.user_id,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  }).then(res => res.json())
    .then((json) => {
    //console.log(json);
     if(json.status === 'success') {
         setDeleteAccModal(false);
         setAccountDeleted(true);
         setTimeout(() => {
          signOut({ callbackUrl: "/" });
         }, 3000);
     }
   });  
  }

  return (
    <>
      <div className="single-settings-box profile-details-box top-flashlight light-xl leftside overflow-hidden">
        <div className="profile-details-tab">
          <div className="advance-tab-button mb--30">
            <ul
              className="nav nav-tabs tab-button-style-2 justify-content-start"
              id="settinsTab-4"
              role="tablist"
            >
              <li role="presentation">
                <a
                  href="#"
                  className="tab-button active"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="true"
                >
                  <span className="title">Email</span>
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#"
                  className="tab-button"
                  id="password-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#password"
                  role="tab"
                  aria-controls="password"
                  aria-selected="false"
                >
                  <span className="title">Password</span>
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#"
                  className="tab-button"
                  id="del-account-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#delaccount"
                  role="tab"
                  aria-controls="delaccount"
                  aria-selected="false"
                >
                  <span className="title">Delete Account</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <form
                action="#"
                className="rbt-profile-row rbt-default-form row row--15"
                onSubmit={changeEmail}
              >
                <div className="col-11 text-Center">
                  <p className="mb--20">
                    <strong>Note: </strong>You will be logged out after changing your account email address. You have to sign in with new credentials. Please note that you would not be able to sign with old email address anymore.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="lastname">New Email</label>
                    <input id="lastname" type="text" defaultValue="New Email" onChange={(e) => setNewEmail({ ...new_email, email: e.target.value })}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="username">Password</label>
                    <input id="username" type="password" defaultValue="Password" onChange={(e) => setNewEmail({ ...new_email, password: e.target.value })}/>
                  </div>
                </div>

                <div className="col-12 mt--20">
                  <div className="form-group mb--0">
                    <button type="submit" className="btn-default round">
                      Update Email
                    </button>
                  </div>
                </div>
                { new_email.password_not_match && 
                  <p style={{marginTop: '12px'}}>Wrong Password</p>
                }
              </form>
            </div>

            <div
              className="tab-pane fade"
              id="password"
              role="tabpanel"
              aria-labelledby="password-tab"
            >
              <form
                action="#"
                className="rbt-profile-row rbt-default-form row row--15"
                onSubmit={changePassword}
              >
                <div className="col-11 text-Center">
                  <p className="mb--20">
                    <strong>Note: </strong>You will be logged out after changing your account password. You have to sign in with new credentials. Please note that you would not be able to sign with old password anymore.
                  </p>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="currentpassword">Current Password</label>
                    <input
                      id="currentpassword"
                      type="password"
                      placeholder="Current Password"
                      onChange={(e) => setPasswordChange({ ...password_change, current_password: e.target.value })}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="newpassword">New Password</label>
                    <input
                      id="newpassword"
                      type="password"
                      placeholder="New Password"
                      onChange={(e) => setPasswordChange({ ...password_change, new_password: e.target.value })}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="retypenewpassword">
                      Re-type New Password
                    </label>
                    <input
                      id="retypenewpassword"
                      type="password"
                      placeholder="Re-type New Password"
                      onChange={(e) => setPasswordChange({ ...password_change, cnf_password: e.target.value })}
                    />
                  </div>
                </div>
                <div className="col-12 mt--20">
                  <div className="form-group mb--0">
                    <button className="btn-default round" type="submit">
                      Update Password
                    </button>
                  </div>
                </div>
                { password_change.password_not_match &&
                  <p style={{marginTop: '12px'}}>Wrong Password</p>
                }
              </form>
            </div>

            <div
              className="tab-pane fade"
              id="delaccount"
              role="tabpanel"
              aria-labelledby="del-account-tab"
            >
              <form
                action="#"
                className="rbt-profile-row rbt-default-form row row--15"
              >
                <div className="col-11 text-Center">
                  <p className="mb--20">
                    <strong>Warning: </strong>Deleting your account will
                    permanently erase all your data and cannot be reversed. Are you sure you want to
                    go ahead with deleting your account? Enter your password to
                    confirm.
                  </p>
                </div>
                <div className="col-12 mt--20">
                  <div className="form-group mb--0">
                    <button className="btn-default round" onClick={() => setDeleteAccModal(true)} type="button">
                      <i className="feather-trash-2"></i> Delete Accont
                    </button>
                  </div>
                </div>
                { is_account_deleted &&
                  <p style={{marginTop: '12px'}}>Account deleted successfully</p>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
      { delete_acc_modal &&
            <div id="delete-popup">
            <div id="delete-popup-main">
             <div id="delete-popup-inner">
             <div class="form-group">
                <label for="currentpassword">Please type "DELETE" in the box</label>
                <input value={deleteValue} onChange={(e) => setDeleteValue(e.target.value)} type="text" style={{border: '1px solid #7064e9'}}/>
               </div>
               <div>
                <button className="btn-default round" onClick={() => setDeleteAccModal(false)}>Cancel</button>
                <button className="btn-default round" onClick={deleteAccount} style={{marginLeft: '20px'}}>Delete</button> 
               </div>
              </div>
            </div>
           </div>  
      }
    </>
  );
};

export default ProfileBody;
