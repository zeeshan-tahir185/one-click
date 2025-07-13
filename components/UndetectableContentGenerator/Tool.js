"use client";

import React, { useState, useEffect } from "react";
import DOMPurify from 'dompurify';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import { Filter } from 'bad-words';
import Timer from "./Timer";
import { useDispatch } from "react-redux";
import { useAppContext } from "@/context/Context";

export const Tool = ({userData}) => {

  const dispatch = useDispatch();
  const { toolTopbarMenu } = useAppContext();

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

  useEffect(() => {
    if(userData.user_id !== null){
      if(userData.subscrption_status === 1 && userData.onetime_plan > 0){
        setHaveSubscription(true);
        //setPlan({...plan, monthly: false, onetime: true});
        //console.log('both');
        if(userData.credits_availbe > 1000 && userData.onetime_credit > 0){
             setQuota({...quota, number: userData.credits_availbe, plan: userData.monthly_plan, text: 'Monthly Balance', tooltip: 'Number of Articles you can Humanize every Month.'});
             setQuotaToDecresed(2);
        }else if(userData.credits_availbe > 1000){
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
                setQuota({...quota, number: userData.quota, plan: 700, text: 'Daily Balance', tooltip: 'Number of articles you can Humanize. Refills at 12:00 EST'});
                setQuotaToDecresed(1);
              }else{
                setQuota({...quota, number: userData.quota, plan: 700, text: 'Balance - ', tooltip: 'Number of articles you can Humanize. Refills at 12:00 EST'});
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
                setQuota({...quota, number: userData.quota, plan: 700, text: 'Daily Balance', tooltip: 'Number of articles you can Humanize. Refills at 12:00 EST'});
                setQuotaToDecresed(1);
              }else{
                setQuota({...quota, number: userData.quota, plan: 700, text: 'Balance - ', tooltip: 'Number of articles you can Humanize. Refills at 12:00 EST'});
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
                setQuota({...quota, number: userData.quota, plan: 700, text: 'Daily Balance', tooltip: 'Number of articles you can Humanize . Refills at 12:00 EST'});
                setQuotaToDecresed(1);
              }else{
                setQuota({...quota, number: userData.quota, plan: 700, text: 'Balance - ', tooltip: 'Number of articles you can Humanize . Refills at 12:00 EST'});
                setShowupdatebtn(true);
              }
        }
   }else{
      //setDiscount('open');
         if(userData.quota > 0){
          //console.log('hit here');
              setQuota({...quota, number: userData.quota, plan: 700, text: 'Daily Balance', tooltip: 'Number of articles you can Humanize . Refills at 12:00 EST'});
              setQuotaToDecresed(1);
          }else{
             //console.log('hit here first time');
             setQuota({...quota, number: userData.quota, plan: 700, text: 'Balance - ', tooltip: 'Number of articles you can Humanize . Refills at 12:00 EST'});
             setShowupdatebtn(true);
          } 
   }
    }
  }, [userData])

  const [words, setWordCount] = useState(0);
  function getCount(str) {
    return str.split(' ').filter(function(num) {
     return num != ''
    }).length;
   }


   // Start of content conversion module - paraphrasing
   const [textInput, setTextInput] = useState('');
   const [contentType, setContentType] = useState('Blog Post');
   const [contentLength, setContentLength] = useState('less than 50 words');
   const [request_process, setRequestProcess] = useState(0);
   const [request_process_1, setRequestProcessOne] = useState(0);
   const [request_process_2, setRequestProcessTwo] = useState(0);
   const [request, setRequest] = useState(0);
   const [paraphrasedText, setParaphrasedText] = useState('');
   let msgCnt = 0;
   var source;
   const free_word_limit = 325;

  useEffect(() => {
    var countWord = getCount(textInput);
    setWordCount(countWord);
  }, [textInput]);

  const [GenerationComplete, setGenerationComplete] = useState(false);
  function paraphrase2(type) {
//console.log(textInput);
    //setUnderConstruction(true);
    //return;
  
      //setRequest(2);
      //return;

      setGenerationComplete(false);
  
    let outputRes = '';
    
    if(request === 1){
         return;
    }
    if(textInput === ''){
       alert("Please enter topic");
       return;
    }
    if(quota.plan === 700){
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

    var completion_url = ''; 
    if(type === 'content'){
        completion_url = 'https://oneclickhuman.com/api_request/completion_content_generator/';
    }
    if(type === 'shorten'){
        completion_url = 'https://oneclickhuman.com/api_request/completion_content_generator_shorten/';
    }
    if(type === 'rewrite'){
        completion_url = 'https://oneclickhuman.com/api_request/completion_content_generator_rewrite/';
    }

    setTimeout(() => {
      document.getElementById('myclick').scrollIntoView({ behavior: "smooth" });
     }, 3000);
  
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
  
            if(json.quota > 0 || json.credits_availbe > 0 || json.onetime_credit > 0 ) {
                
                let paid_user = false;
                if(json.credits_availbe > 0 || json.onetime_credit > 0 ){
                    paid_user = true;
                }else{
                  paid_user = false;
                }
  
                   setRequest(2);
                   var prompt_sent_ai = '';
                   if(type === 'content'){
                       setRequestProcess(1);
                       prompt_sent_ai = textInput;
                   }
                   if(type === 'shorten'){
                       setRequestProcessOne(1);
                       prompt_sent_ai = paraphrasedText;
                   }
                   if(type === 'rewrite'){
                       setRequestProcessTwo(1);
                       prompt_sent_ai = paraphrasedText;
                   }
                   document.getElementById("paraphrase").disabled = true;
    
              fetch('https://oneclickhuman.com/api_request/prompt_content_generator', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({is_live_mode: true, paid_user: paid_user, prompt: prompt_sent_ai, contentType: contentType, contentLength: contentLength}),
              })
              .then(response => response.text())
              .then(promptId => {
                  if (source) {
                      source.close();
                  }
                  source = new EventSource(completion_url + promptId);
                  source.onmessage = function(event) {
                  var dt = JSON.parse(event.data);
  
      // When conversion is completed
      if (dt.msg === '[DONE]') {
           source.close();
          
           setParaphrasedText(outputRes);
           setGenerationComplete(true);
           let word_output_count = getCount(outputRes);
           console.log("Word count is: " + word_output_count);

           fetch('https://oneclickhuman.com/api_request/updatequota', {
            mode:'cors', 
            method: 'POST',
            body: JSON.stringify({
              'user_id' : userData.user_id,
              'quota_to_decresed': quota_to_decresed,
              'decreased_words': word_output_count,
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

                      if(quota.plan !== 700){
                           if(quota_to_decresed === 2){
                               if(userData.onetime_credit > 0){
                                   setQuota({...quota, number: userData.onetime_credit, plan: userData.onetime_plan, text: 'Onetime Balance', tooltip: 'Number of Articles you can Humanize. Lifetime Validity'});        
                                   setQuotaToDecresed(3); 
                               }else{
                                  setQuota({...quota, number: 700, plan: 3, text: 'Daily Word Balance', tooltip: 'Number of articles you can Humanize . Refills at 12:00 EST'}); 
                                  setQuotaToDecresed(1);
                               }
                               setMonthlyCreditsExhausted(true);
                           }
                           if(quota_to_decresed === 3){
                                 setQuota({...quota, number: 700, plan: 3, text: 'Daily Word Balance', tooltip: 'Number of articles you can Humanize . Refills at 12:00 EST'}); 
                                 setQuotaToDecresed(1);
                               //  setLifeTimeExhausted(true);
                           }
                      }else{
                         setShowupdatebtn(true);
                      } 
                 }
            });

           document.getElementById("paraphrase").disabled = false; 

           if(type === 'content'){
            setRequestProcess(0);
           }
           if(type === 'shorten'){
             setRequestProcessOne(0);
           }
           if(type === 'rewrite'){
            setRequestProcessTwo(0);
           }
  
          /* fetch('https://oneclickhuman.com/api_request/add_record', {
                  mode:'cors', 
                  method: 'POST',
                  body: JSON.stringify({
                    'user_id' : login.userID,
                    'user_email' : login.user_email,
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
                      
               }); */
  
      }else{
  
             if(dt.msg !== undefined){
              console.log('....nothing');
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
     <div className="row justify-content-center">
      <div className="col-lg-6" id="left-column">
        <div id="InputWrapper">
         <form class="contact-form-1 rainbow-dynamic-form" id="contact-form" style={{padding: '0 20px 0 25px'}}>
	        <div class="form-group">
            <label><b>Topic, Idea, or keyword</b></label>
		        <input type="text" placeholder="Enter topic here..." onInput={(e) => setTextInput(e.target.value)}/>
	        </div>
          <div class="form-group">
            <label><b>Content Type</b></label> 
		        <select onChange={(e) => setContentType(e.target.value)} value={contentType}>
              <option value="Blog Post">Blog Post</option>
              <option value="Ad">Ad</option>
              <option value="Social Media Post">Social Media Post</option>
              <option value="Paragraph">Paragraph</option>
              <option value="Email">Email</option>
              <option value="News Article">News Article</option>
            </select>
	        </div>
          <div class="form-group">
            <label><b>Content Length</b></label>
		        <select onChange={(e) => setContentLength(e.target.value)} value={contentLength}>
              <option value="less than 50 words">&lt; 50 words</option>
              <option value="50-100 words">50-100 words</option>
              <option value="100-250 words">100-250 words</option>
              <option value="250-400 words">250-400 words </option>
              <option value="500-700 words">500-700 words</option>
              <option value="more than 700 words">&gt; 700 Words </option>
            </select>
	        </div>
         </form>
        </div>
        <div id="bottom-left">
            { quota.plan === 700 || monthly_credits_exhausted === true ?
              <p id="small-text-left-bottom">
                <i className="feather-zap" style={{color: '#FFC107'}}></i>
                <span style={{
                   textDecoration: 'underline',
                   cursor: 'pointer'
                 }} 
                 onClick={() => router.push('/pricing')}
                 >
                 Upgrade
                </span> to get more word balance & improve quality
             </p>
              : ''
            }
             <span id="quota" style={{marginLeft: '12px'}}>
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
              
 
               {/* <span className="quota-col">
                 <span>Words</span><br></br>
                 <span id="word-count">
                 <b>{words}/{quota.plan === 700 ? free_word_limit : '1500'}</b>
                 { CountWarning === true ?
                  <span className="tooltip"><ErrorOutlineIcon style={{color: 'red'}}/>
                     <span className="tooltiptext warning-count">Words limit exceeded. Upgrade.</span>
                   </span>
                   : ''
                  }
                 </span>
               </span> */}
             </span>
             <button id="paraphrase" type="button" className="btn-default btn-small round" onClick={() => paraphrase2('content')}><i></i><span>{ request_process === 1 ? <span class="dot-pulse"></span> : 'Generate Article'}</span></button>
        </div>
      </div>

      <div className="col-lg-6" id="right-column">
       { request === 2 ? 
           <>
           <div id="result-warpper">
             <div id="result" contentEditable={true} suppressContentEditableWarning={true} dangerouslySetInnerHTML={{__html: paraphrasedText}} />
           </div>
           <div id="right-bottom">
              <div style={{display: 'flex', width: '100%', marginTop: '20px', gap: '10px', paddingLeft: '15px'}}>
                <span className="tooltip" onClick={copyContent}><i className="feather-copy"></i><span className="tooltiptext">Copy</span></span>
                { GenerationComplete &&
                  <>
                   <button onClick={() => paraphrase2('shorten')} className="btn-default btn-small round" style={{height: '33px', lineHeight: '34px', padding: '0 20px', fontSize: '13px', width: '85px'}}>{ request_process_1 === 1 ? <span class="dot-pulse"></span> : 'Shorten'}</button>
                   <button onClick={() => paraphrase2('rewrite')} className="btn-default btn-small round" style={{height: '33px', lineHeight: '34px', padding: '0 20px', fontSize: '13px', width: '85px'}}>{ request_process_2 === 1 ? <span class="dot-pulse"></span> : 'Rewrite'}</button>
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
                   <span id="ai-percentage" style={{ lineHeight: "15px", marginTop: "11px", marginRight: '6px' }}>{ai_check}% AI</span>
                 } */}
                  </>
                }
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