"use client";

import React, { useState, useEffect } from "react";
import SlateEditor from "./SlateEditor";
import DOMPurify from 'dompurify';
import { Language } from "./Language";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import { Filter } from 'bad-words';
import Timer from "./Timer";
import { useDispatch } from "react-redux";
import { useAppContext } from "@/context/Context";

export const Tool = ({userData}) => {

  const dispatch = useDispatch();
  const { toolTopbarMenu, ToolDocs } = useAppContext();

  const [has_subscription, setHaveSubscription] = useState(false);
  const [monthly_credits_exhausted, setMonthlyCreditsExhausted] = useState(false);
 // const [lifetime_exhausted, setLifeTimeExhausted] = useState(false);
  //const [monthly_onetime_credits_exhausted, setMonthlyOneTimeCreditsExhausted] = useState(false);
  const [showupdatebtn, setShowupdatebtn] = useState(false);
  const [CountWarning, setCountWarning] = useState(false);
  const [quota, setQuota] = useState({number: 0, plan: 0, text: '', tooltip: ''});
  //const [discount, setDiscount] = useState('');
  // quota to decresed -> 1 = free, 2 = monthly, 3 = onetime, 4 = lifetime
  const [quota_to_decresed, setQuotaToDecresed] = useState(1);
  const router = useRouter();

  const [timerPopup, showTimerPopup] = useState({status: false, current_date: null});

  const confetti = require('canvas-confetti');

  useEffect(() => {
    if(userData.user_id !== null){
      if(userData.subscrption_status === 1 && userData.onetime_plan > 0){
        setHaveSubscription(true);
        //setPlan({...plan, monthly: false, onetime: true});
        //console.log('both');
        if(userData.credits_availbe > 1000 && userData.onetime_credit > 0){
             setQuota({...quota, number: userData.credits_availbe, plan: userData.monthly_plan, text: 'Monthly Balance', tooltip: 'Number of Articles you can Humanize every Month.'});
             setQuotaToDecresed(2);
        }else if(userData.credits_availbe > 100){
          setQuota({...quota, number: userData.credits_availbe, plan: userData.monthly_plan, text: 'Monthly Balance', tooltip: 'Number of Articles you can Humanize every Month.'});
          //setLifeTimeExhausted(true);
          setQuotaToDecresed(2);
        }else if(userData.onetime_credit > 0){
           setQuota({...quota, number: userData.onetime_credit, plan: userData.onetime_plan, text: 'Onetime Balance', tooltip: 'Number of Articles you can Humanize. Lifetime Validity'});
           setMonthlyCreditsExhausted(true);
           setQuotaToDecresed(3);
        }else{
          // setMonthlyOneTimeCreditsExhausted(true); 
              if(userData.quota > 0){
                setQuota({...quota, number: userData.quota, plan: 1500, text: 'Daily Balance', tooltip: 'Number of articles you can Humanize. Refills at 12:00 EST'});
                setQuotaToDecresed(1);
              }else{
                setQuota({...quota, number: userData.quota, plan: 1500, text: 'Balance - ', tooltip: 'Number of articles you can Humanize. Refills at 12:00 EST'});
                setShowupdatebtn(true);
              }
           
      } 
   }else if(userData.subscrption_status === 1){
       setHaveSubscription(true);
      // setPlan({...plan, monthly: false, onetime: true});
      if(userData.credits_availbe > 0){
          setQuota({...quota, number: userData.credits_availbe, plan: userData.monthly_plan, text: 'Monthly Balance', tooltip: 'Number of Articles you can Humanize every Month.'});
          setQuotaToDecresed(2);
        }else{
           setMonthlyCreditsExhausted(true); 
              if(userData.quota > 0){
                setQuota({...quota, number: userData.quota, plan: 1500, text: 'Daily Balance', tooltip: 'Number of articles you can Humanize. Refills at 12:00 EST'});
                setQuotaToDecresed(1);
              }else{
                setQuota({...quota, number: userData.quota, plan: 1500, text: 'Balance - ', tooltip: 'Number of articles you can Humanize. Refills at 12:00 EST'});
                setShowupdatebtn(true);
              }
           
        }
   }else if(userData.onetime_plan > 0){
       if(userData.onetime_credit > 0){
            setQuota({...quota, number: userData.onetime_credit, plan: userData.onetime_plan, text: 'Onetime Balance', tooltip: 'Number of Articles you can Humanize. Lifetime Validity'});    
            setQuotaToDecresed(3);
        }else{
          // setLifeTimeExhausted(true);
              if(userData.quota > 0){
                setQuota({...quota, number: userData.quota, plan: 1500, text: 'Daily Balance', tooltip: 'Number of articles you can Humanize . Refills at 12:00 EST'});
                setQuotaToDecresed(1);
              }else{
                setQuota({...quota, number: userData.quota, plan: 1500, text: 'Balance - ', tooltip: 'Number of articles you can Humanize . Refills at 12:00 EST'});
                setShowupdatebtn(true);
              }
        }
   }else{
      //setDiscount('open');
         if(userData.quota > 0){
          //console.log('hit here');
              setQuota({...quota, number: userData.quota, plan: 1500, text: 'Daily Balance', tooltip: 'Number of articles you can Humanize . Refills at 12:00 EST'});
              setQuotaToDecresed(1);
          }else{
             //console.log('hit here first time');
             setQuota({...quota, number: userData.quota, plan: 1500, text: 'Balance - ', tooltip: 'Number of articles you can Humanize . Refills at 12:00 EST'});
             setShowupdatebtn(true);
          } 
   }
    }
  }, [userData])

  const inputCallback = (val) => {
    setTextInput(val);
  }
  const [words, setWordCount] = useState(0);
  function getCount(str) {
    return str.split(' ').filter(function(num) {
     return num != ''
    }).length;
   }

  const backspace = (val) => {
     setTextInput(val);
   
     let filterText = DOMPurify.sanitize(val, {ALLOWED_TAGS: [], FORBID_ATTR: ['style', 'dir', 'id', 'class']});
     filterText = filterText.replace(/&nbsp;/g, "");
     var countWord = getCount(filterText);
     setWordCount(countWord);
   }
   const [placeholder, setPlaceHolder] = useState(true);
   const [TosChecked, setTosChecked] = useState(true);
   const handleTosChange = event => {
      setTosChecked(event.target.checked);
   };

  // Start of modes module
  const [showmodes, setShowModes] = useState(false);
  const showModes = () => {
      setShowModes(!showmodes);
  }
  const [mode, setMode] = useState({text: 'Premium Mode'});
  const changeMode = (text) => {
   if(text === 'Premium Mode') {
       setMode({...mode, text: "Premium Mode"});    
       setShowModes(false);
   }
   if(text === 'Lightning Mode') {
       if(has_subscription){
          setMode({...mode, text: "Lightning Mode"});
          setShowModes(false);
       }else{
         alert('Please subscribe to our monthly plan to unlock Lightning/Unlimited Mode')
       }
     }
   }
   // End of modes module

   // Language module
   const [show_language, setShowLanguage] = useState(false);
   const [language, setLanguage] = useState('English');
   const changeLanguage = (lang) => {
     setLanguage(lang);
     setShowLanguage(false);
   }
   const showLanguage = () => {
      if(show_language === true){
         setShowLanguage(false);
      }else{
         setShowLanguage(true);
      }
   }
   // End Language module

   // Start of reset module 
   const [disable_reset, setDisableReset] = useState(false);
   const [reset_editor, setResetEditor] = useState(false);
   const resetInputText = () => {
      setTextInput('');
      setResetEditor(true);
      setRequest(0);
      setParaphrasedText('');
   } 
   const resetEditorFalse = () => {
      setResetEditor(false);
   }
   // End of reset module 

   // Start of content conversion module - paraphrasing
   const [request_process, setRequestProcess] = useState(0);
   const [textInput, setTextInput] = useState('');
   const [request, setRequest] = useState(0);
   const [paraphrasedText, setParaphrasedText] = useState('');
   let msgCnt = 0;
   var source;
   const free_word_limit = 325;
   const [TextBottomRight, setTextBottomRight] = useState(false);

   function paraphrase2() {

    //setUnderConstruction(true);
    //return;
  
      //setRequest(2);
      //return;
    setAiCheck(null); 
    let outputRes = '';
    let quota_used = 0;
    setTextBottomRight(false);
    
    if(request === 1){
         return;
    }
    if(textInput === ''){
       alert("Please enter text");
       return;
    }
    if(words < 30){
       alert("Please enter more than 30 words");
       return;
    } 
    if(quota.plan === 1500){
        if(words > free_word_limit){
           alert('Words limit is exceeded!');
           return;
        }
    }else{
       if(words > 1500){
           alert('Words limit is exceeded!');
           return;
       }
    }
   /* if(words > quota.number){
      alert('The number of words you entered is more than your balance');
      return;
    } */
    if(TosChecked === false){
        alert('Please accept the terms of service.');
        return;
    }

     setTimeout(() => {
      document.getElementById('myclick').scrollIntoView({ behavior: "smooth" });
     }, 3000);
      
      // link.click();

    let frequency = 0;
    let presence = 0;
    let top_p = 0;
    let temp = 0;
    let filterText = '';
    //let model = 'gpt-4-turbo';
  
    switch(mode.text){
      /*case 'Quality Mode':
      filterText = DOMPurify.sanitize(textInput, {ALLOWED_TAGS: ['h1','h2', 'h3', 'h4', 'h5', 'h6', 'u', 'i', 'li', 'ol', 'br', 'a', 'ul', 'p'], FORBID_ATTR: ['style', 'dir', 'id', 'class', 'data-slate-node']});
      filterText = filterText.replace(/&nbsp;/g, "");
      filterText = filterText.replace(/<p>\s*?<\/p>/g, ''); 
      break; */
  
      case 'Premium Mode':
      filterText = DOMPurify.sanitize(textInput, {ALLOWED_TAGS: ['h1','h2', 'h3', 'h4', 'h5', 'h6', 'u', 'i', 'li', 'ol', 'br', 'a', 'ul', 'p'], FORBID_ATTR: ['style', 'dir', 'id', 'class', 'data-slate-node']});
      filterText = filterText.replace(/&nbsp;/g, "");
      filterText = filterText.replace(/<p>\s*?<\/p>/g, '');
      break;
  
      case 'Lightning Mode':
      filterText = DOMPurify.sanitize(textInput, {ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'u', 'i', 'br', 'a', 'p', 'b'], FORBID_ATTR: ['style', 'dir', 'id', 'class', 'data-slate-node']});
      filterText = filterText.replace(/&nbsp;/g, "");
      filterText = filterText.replace(/<h1>/g, "<p>");
      filterText = filterText.replace(/<\/h1>/g, "</p>");
      filterText = filterText.replace(/<h2>/g, "<p>");
      filterText = filterText.replace(/<\/h2>/g, "</p>");
      filterText = filterText.replace(/<h3>/g, "<p>");
      filterText = filterText.replace(/<\/h3>/g, "</p>");
      filterText = filterText.replace(/<h4>/g, "<p>");
      filterText = filterText.replace(/<\/h4>/g, "</p>");
      filterText = filterText.replace(/<h5>/g, "<p>");
      filterText = filterText.replace(/<\/h5>/g, "</p>");
      filterText = filterText.replace(/<h6>/g, "<p>");
      filterText = filterText.replace(/<\/h6>/g, "</p>");
      filterText = filterText.replace(/<p>\s*?<\/p>/g, '');
      break;
    }
    //return;
  
  fetch('https://oneclickhuman.com/api_request/checkquota', {
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
  
            if(json.quota > 0 || json.credits_availbe > 0 || json.onetime_credit > 0 || mode.text === 'Lightning Mode') {
                console.log("Paraphrase details: quota: " + json.quota + ", credits_availbe: " + json.credits_availbe + " onetime_credit: " + json.onetime_credit);
                let paid_user = false;
                if(json.credits_availbe > 0 || json.onetime_credit > 0 || mode.text === 'Lightning Mode'){
                    paid_user = true;
                }else{
                  paid_user = false;
                }
                   quota_used = json.quota_used;
                   setRequest(2);
                   setRequestProcess(1);
                   document.getElementById("paraphrase").disabled = true;
                   setDisableReset(true);
      
                   var customFilter = new Filter({ placeHolder: " "});
                   filterText = customFilter.clean(filterText);
                  // console.log(filterText);
                   let text_sent_ai = filterText; 
                  // console.log(text_sent_ai);return;
                   let text_string = JSON.stringify({data: text_sent_ai});
    
              fetch('https://oneclickhuman.com/api_request/prompt_batch', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({is_live_mode: true, paid_user: paid_user, prompt: text_sent_ai, language: language, mode: mode.text}),
              })
              .then(response => response.text())
              .then(promptId => {
                  if (source) {
                      source.close();
                  }
                  source = new EventSource("https://oneclickhuman.com/api_request/completion_batches/" + promptId);
                  source.onmessage = function(event) {
                  var dt = JSON.parse(event.data);
                  
           // Update quota at the start of paraphrasing
           if(msgCnt === 0 && mode.text === 'Premium Mode'){
               fetch('https://oneclickhuman.com/api_request/updatequota', {
                  mode:'cors', 
                  method: 'POST',
                  body: JSON.stringify({
                    'user_id' : userData.user_id,
                    'quota_to_decresed': quota_to_decresed,
                    'decreased_words': words,
                  }),
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  }
               }).then(res => res.json())
                 .then((json) => {
                     // quota to decresed -> 1 = free, 2 = monthly, 3 = onetime    
                     setQuota({...quota, number: json.quota_decreased});
                     switch (quota_to_decresed) {
                      case 1:
                        dispatch({type: 'quota-update-free', credits: json.quota_decreased});
                        break;
                      
                      case 2:
                        dispatch({type: 'quota-update-monthly', credits: json.quota_decreased});
                        break;
                        
                      case 3:
                        dispatch({type: 'quota-update-onetime', credits: json.quota_decreased});
                        break;
                     
                      default:
                        break;
                     }
                         
                      //  if(json.quota_decreased > 0 && json.quota_decreased < 1000){
                      //      if(quota_to_decresed === 2 && userData.onetime_credit > 0){
                      //          setQuota({...quota, number: userData.onetime_credit, plan: userData.onetime_plan, text: 'Onetime Balance', tooltip: 'Number of Articles you can Humanize. Lifetime Validity'});        
                      //          setQuotaToDecresed(3);
                      //      }
                      //  }
                       
                       // when switching quota
                       if(json.quota_decreased === 0){
  
                            if(quota.plan !== 1500){
                                 if(quota_to_decresed === 2){
                                     if(userData.onetime_credit > 0){
                                         setQuota({...quota, number: userData.onetime_credit, plan: userData.onetime_plan, text: 'Onetime Balance', tooltip: 'Number of Articles you can Humanize. Lifetime Validity'});        
                                         setQuotaToDecresed(3); 
                                     }else{
                                        setQuota({...quota, number: 1500, plan: 3, text: 'Daily Word Balance', tooltip: 'Number of articles you can Humanize . Refills at 12:00 EST'}); 
                                        setQuotaToDecresed(1);
                                     }
                                     setMonthlyCreditsExhausted(true);
                                 }
                                 if(quota_to_decresed === 3){
                                       setQuota({...quota, number: 1500, plan: 3, text: 'Daily Word Balance', tooltip: 'Number of articles you can Humanize . Refills at 12:00 EST'}); 
                                       setQuotaToDecresed(1);
                                     //  setLifeTimeExhausted(true);
                                 }
                            }else{
                               setShowupdatebtn(true);
                            } 
                       }
                  });
          }
  
      // When conversion is completed
      if (dt.msg === '[DONE]') {
           source.close();
  
        /* if(outputRes.substring(0,2) === '1>'){
              outputRes = outputRes.replace(/^.{2}/g, '<h1>');
         }
         if(outputRes.substring(0,2) === '2>'){
              outputRes = outputRes.replace(/^.{2}/g, '<h2>');
         }
         if(outputRes.substring(0,2) === '3>'){
              outputRes = outputRes.replace(/^.{2}/g, '<h3>');
         } 
         if(outputRes.substring(0,2) === '4>'){
              outputRes = outputRes.replace(/^.{2}/g, '<h4>');
         } 
         if(outputRes.substring(0,2) === '5>'){
              outputRes = outputRes.replace(/^.{2}/g, '<h5>');
         }
         if(outputRes.substring(0,2) === '6>'){
              outputRes = outputRes.replace(/^.{2}/g, '<h6>');
         }       
         if(outputRes.charAt(0) === '>'){
              outputRes = outputRes.replace('>', '');
         } */
          
           setParaphrasedText(outputRes);
  
           document.getElementById("paraphrase").disabled = false; 
           setDisableReset(false);
           setRequestProcess(0);
           var myCanvas = document.createElement('canvas');
           document.body.appendChild(myCanvas);
           var myConfetti = confetti.create(myCanvas, {resize: true,useWorker: true});
           myConfetti({
              particleCount: 100,
              spread: 40,
              origin: { y: 0.6 }
           });
  
           setTimeout(() => {
              setTextBottomRight(true);
              myCanvas.remove();  
           }, 1500);
  
           fetch('https://oneclickhuman.com/api_request/add_record', {
                  mode:'cors', 
                  method: 'POST',
                  body: JSON.stringify({
                    'user_id' : userData.user_id,
                    'user_email' : userData.user_email,
                    'mode' : mode.text,
                    'input' : filterText,
                    'output' : outputRes,
                    'words_used' : getCount(filterText),
                    'quota_used' : quota_used + 1
                  }),
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  }
               }).then(res => res.json())
                 .then((json) => {
                     // console.log(json);
               });
  
      }else{
  
             if(dt.msg !== undefined){
            //  console.log('....nothing');
                  // let ms = dt.msg.replace(":", ",");
                  // ms = ms.replace(";", ".");
                  // ms = ms.replace("-", "");
                  // ms = ms.replace("—", "");
                  // outputRes = outputRes + ms; 
  
                  let ms = dt.msg.replace("`", "");
                  ms = ms.replace("< ", "<");
                  ms = ms.replace(" >", ">");
                  ms = ms.replace(" /", "/");
                  ms = ms.replace("/ >", "/>");
                  ms = ms.replace(/\.([^\s])/g, '. $1');
                  outputRes = outputRes + ms;
             }
  
            // if(msgCnt < 1){
              //  setParaphrasedText('<img style="width: 90%; height: 60px;" src="https://oneclickhuman.com/api-assets/images/textloader.svg" />');
             // }
  
              if(msgCnt < 1){
                console.log('....somehing');
                setParaphrasedText('<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 50 && msgCnt < 53) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 100 && msgCnt < 103) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 140 && msgCnt < 143) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 190 && msgCnt < 193) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 240 && msgCnt < 243) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 290 && msgCnt < 293) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 345 && msgCnt < 348) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 390 && msgCnt < 393) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 440 && msgCnt < 443) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 495 && msgCnt < 498) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 545 && msgCnt < 548) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 590 && msgCnt < 593) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 650 && msgCnt < 653) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 700 && msgCnt < 703) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 750 && msgCnt < 753) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 800 && msgCnt < 803) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 850 && msgCnt < 853) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 900 && msgCnt < 903) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 950 && msgCnt < 953) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 1000 && msgCnt < 1003) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 1050 && msgCnt < 1053) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 1100 && msgCnt < 1103) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 1150 && msgCnt < 1153) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 1150 && msgCnt < 1153) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 1200 && msgCnt < 1203) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 1250 && msgCnt < 1253) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 1300 && msgCnt < 1303) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 1350 && msgCnt < 1353) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 1400 && msgCnt < 1403) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 1450 && msgCnt < 1453) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 1500 && msgCnt < 1503) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 1550 && msgCnt < 1553) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              if(msgCnt > 1600 && msgCnt < 1603) {
                setParaphrasedText(outputRes + '<div class="main-item"><div class="animated-background"></div><div class="animated-background"></div><div class="animated-background"></div></div>');
              }
              msgCnt++;
            }
          };
        });
      }else{
         // if daily quota found 0
         showTimerPopup({status: true, current_date: json.current_date});
      }
    });
  }
  // End of content conversion module - paraphrasing
  
  
    
  const selectText = (nodeId) => {
    const node = document.getElementById(nodeId);
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    toast("Result Copied!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  const copyContent = () =>{
    selectText('result');
  }

  const [ai_check, setAiCheck] = useState(null);
  const [ai_check_request, setAiCheckRequest] = useState(false);
  const checkAI = () => {
    setAiCheckRequest(true);
    const content = document.getElementById('result').innerHTML;
    setParaphrasedText(content);
    fetch('https://oneclickhuman.com/api_request/check_ai_presence', {
      mode:'cors', 
      method: 'POST',
        body: JSON.stringify({
        'user' : userData.user_id,
        'content' : content
      }),
      headers: {
       'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(res => res.json())
      .then((json) => {
         console.log(json);  
         setAiCheck(json.res);
         setAiCheckRequest(false);
      })
  }
  

   return(
    <>
    <div id='tool'>
    <div id="top-bar">
        <span id="mode">
          <span id="mode-title"><i className="feather-cast"></i> Mode: </span>
          <button onClick={showModes}>{mode.text === 'Premium Mode' ? 'Premium' : 'Lightning (Unlimited)'}</button>
          { showmodes === true ? 
            <span id="mode-dropdown">
              <span className="tooltip" onClick={() => changeMode('Premium Mode')}>Premium<span className="tooltiptext">95% Accuracy , Formatted results.</span></span>
              <span className="tooltip" onClick={() => changeMode('Lightning Mode')}>Lightning (Unlimited)🔥{has_subscription ? '' : <i className="feather-lock" style={{color: '#828282', fontSize: '15px', verticalAlign: 'top'}}></i> }<span className="tooltiptext">85% Accuracy, Lightning Fast & Unlimited usage.</span></span>
            </span>
          : ''
          }
        </span>

       <Language 
          language={language} 
          show_language={show_language} 
          showLanguage={showLanguage} 
          changeLanguage={changeLanguage}
       />
       
       { toolTopbarMenu &&
         <ul id="topbar-ul">
          <li>{mode.text === 'Premium Mode' ? <i className="feather-check"></i> : <i className="feather-x"></i> } Retains Formatting</li>
          <li><i className="feather-check"></i> Perfect Grammar</li>
          <li><i className="feather-check"></i> High Readability Score</li>
         </ul>
       }
        { ToolDocs &&
          <a id="documentation" href="/documentation"><i className="feather-file-text"></i> Docs</a>
        }
 
        <span className="tooltip" id="tooltip-reset">{ disable_reset === true ? <i className="feather-repeat" style={{color: '#999', cursor: 'no-drop'}}></i> : <i className="feather-repeat" onClick={resetInputText}></i> }<span className="tooltiptext">Reset</span></span>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-6" id="left-column">
        <div id="InputWrapper">
           <SlateEditor focus={true} inputCallback={inputCallback} resetEditor={reset_editor} resetEditorFalse={resetEditorFalse} backspace={backspace}/>
           { placeholder === true ?
                  <div id="placeholder" onClick={() => setPlaceHolder(false)}>
                    <h4>Insert your AI content here to make it Undetectable</h4> 
                    <br></br>You can add content directly from any AI tool, no need to process it or do anything, this tool will not only humanize the content but also make it sound better.
                    <br></br> 
              </div> 
              : '' 
                }
          </div>
        <div id="bottom-left">
            { quota.plan === 1500 || monthly_credits_exhausted === true ?
              <p id="small-text-left-bottom">
                <i className="feather-zap" style={{color: '#FFC107'}}></i>
                <span style={{
                   textDecoration: 'underline',
                   cursor: 'pointer'
                 }} 
                 onClick={() => router.push('/pricing')}
                 >
                 Upgrade
                </span> to remove Word limit & improve conversion quality
             </p>
              : ''
            }
             <span id="quota">
               { has_subscription && mode.text === 'Lightning Mode' ? 
                 <span className="quota-col">
                   <span>Lightning Mode</span> <br></br>
                   <span><small>Unlimited Words</small></span>
                 </span>
                : 
               <span className="quota-col">
                 <span>{quota.text} {showupdatebtn === true ? <>{quota.number}</> : '' }</span> <br></br>
                 { showupdatebtn === true ?
                   <button className="upgrade btn-default btn-small round" onClick={ () => router.push("/pricing") }>Buy Words</button>
                   :
                 <>  
                 <span><b>{quota.number} Words</b></span>
                 {/* <span className="tooltip">
                   <i className="feather-info"></i>
                   <span className="tooltiptext">{quota.tooltip}</span>
                 </span>  */}
                 </>
                 }
               </span>
              }
 
               <span className="quota-col">
                 <span>Words</span><br></br>
                 <span id="word-count">
                 <b>{words}/{quota.plan === 1500 ? free_word_limit : '1500'}</b>
                 { CountWarning === true ?
                  <span className="tooltip"><ErrorOutlineIcon style={{color: 'red'}}/>
                     <span className="tooltiptext warning-count">Words limit exceeded. Upgrade.</span>
                   </span>
                   : ''
                  }
                 </span>
               </span>
               <span className="quota-col tos">
                 <input
                  type="checkbox"
                  name="tos"
                   onChange={handleTosChange}
                   checked={TosChecked}
                 />
                 <span>I AGREE TO THE <a href="/tos" target="_blank">T&C</a> (NO ACADEMIC MISUSE)</span>
               </span>
             </span>
             <button id="paraphrase" type="button" className="btn-default btn-small round" onClick={paraphrase2}><i></i><span>{ request_process === 1 ? <span class="dot-pulse"></span> : 'Humanize'}</span></button>
        </div>
      </div>

      <div className="col-lg-6" id="right-column">
       { request === 2 ? 
           <>
           <div id="result-warpper">
             <div id="result" contentEditable={true} suppressContentEditableWarning={true} dangerouslySetInnerHTML={{__html: paraphrasedText}} />
           </div>
           <div id="right-bottom">
              <div style={{display: 'flex', width: '100%'}}>
               { mode.text !== 'Premium Mode' && TextBottomRight === true ?
                 <span id="TextBottomRight">Finding the tone too informal? Try <span style={{cursor: 'pointer'}} onClick={() => changeMode('Premium Mode')}>Premium Mode</span></span>
                 : ''
               }
                <span className="tooltip" onClick={copyContent}><i className="feather-copy"></i><span className="tooltiptext">Copy</span></span>
                {/* <button 
                  onClick={() => checkAI()} 
                  className="btn-default btn-border round"
                  style={{
                    height: "36px",
                    fontSize: "13px",
                    lineHeight: "20px",
                    padding: "0px 15px",
                    marginRight: "10px",
                    marginLeft: "auto",
                    background: "#7064e9",
                    color: "#fff"
                  }}
                  disabled={ai_check_request}>
                    {ai_check_request ? 'Checking...' : 'Check for AI'}
                 </button>
                 { request_process === 0 && ai_check !== null &&
                   <span id="ai-percentage" style={{ lineHeight: "15px", marginTop: "11px" }}>AI Percentage: {ai_check}</span>
                 } */}
              </div>
             </div>
             </>
         : ''
       }
      </div>
    </div>
   </div>
   { timerPopup.status &&
     <Timer currentDate={timerPopup.current_date} router={router} showTimerPopup={showTimerPopup}/>
   }
   <button id="myclick" style={{visibility: 'hidden', height: '0', position: 'absolute', bottom: '0'}}>myclick</button>
   </>
   )
}