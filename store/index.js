// store/index.js
import { configureStore } from '@reduxjs/toolkit';

const accountInfo = {
    loading: false,
    user_id: null,
    user_created: '0000-00-00',
    user_email: null,
    email_verification: false,
    time: null,
    status : null, 
    quota : 0, 
    current_date : null, 
    credits_availbe : 0, 
    subscrption_status : null, 
    subscription_id : null, 
    cancellation_status : null, 
    onetime_credit : 0, 
    onetime_plan : 0, 
    monthly_plan : 0, 
    subscription_amount : null, 
    onetime_amount : null, 
    subscription_renewal_date : '0000-00-00', 
    is_lifetime_active : null, 
    lifetime_plan : null, 
    lifetime_refill_date : null, 
    lifetime_next_refill_date : null, 
    lifetime_credits : null, 
    max_lifetime_used : null, 
    quota_used : null, 
    currency : null, 
    role : 0
}

const accountReducer = (state = accountInfo, action) => {
  switch (action.type) {
    case 'loading-user':
    return {...state, loading: true };  
    
    case 'loading-success':
    return {...state, 
        loading: false, 
        user_id: action.payload.user_id,
        user_created: action.payload.user_created,
        user_email: action.payload.user_email,
        email_verification: action.payload.email_verification,
        time: action.payload.time,
        status : action.payload.status, 
        quota : action.payload.quota, 
        current_date : action.payload.current_date, 
        credits_availbe : action.payload.credits_availbe, 
        subscrption_status : action.payload.subscrption_status, 
        subscription_id: action.payload.subscription_id,
        cancellation_status : action.payload.cancellation_status, 
        onetime_credit : action.payload.onetime_credit, 
        onetime_plan : action.payload.onetime_plan, 
        monthly_plan : action.payload.monthly_plan, 
        subscription_amount : action.payload.subscription_amount, 
        onetime_amount : action.payload.onetime_amount, 
        subscription_renewal_date : action.payload.subscription_renewal_date, 
        is_lifetime_active : action.payload.is_lifetime_active, 
        lifetime_plan : action.payload.lifetime_plan, 
        lifetime_refill_date : action.payload.lifetime_refill_date, 
        lifetime_next_refill_date : action.payload.lifetime_next_refill_date, 
        lifetime_credits : action.payload.lifetime_credits, 
        max_lifetime_used : action.payload.max_lifetime_used, 
        quota_used : action.payload.quota_used, 
        currency : action.payload.currency, 
        role : action.payload.role
    };

    case 'quota-update-monthly':
      return {...state, credits_availbe: action.credits};

    case 'quota-update-onetime':
      return {...state, onetime_credit: action.credits};  

    case 'quota-update-free':
      return {...state, quota: action.credits};
      
    case 'cancel-success':
      return {...state, cancellation_status: 1 };  

    default: 
      return state;
  }
}

const store = configureStore({
   reducer:  accountReducer
});

export default store;
