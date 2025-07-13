import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const user_email = useSelector(state => state.user_email);
  const router = useRouter();

  const [enquire, setEnquire] = useState({subject: '', message: '', status: false, submit: false});

const CreateEnquire = (e)=>{
  e.preventDefault();
    
  if(!user_email){
     router.push("/signin");
     return;
  }

    setEnquire({...enquire, status: false, submit: true});

    if(enquire.subject === '' || enquire.message === '' || enquire.first_name === '' || enquire.last_name === ''){
       alert('Please fill all the required fields');
       setEnquire({...enquire, submit: false});
       return;
    }

    console.log(user_email);

    fetch('https://oneclickhuman.com/api_request/create_enquire', {
      mode:'cors', 
      method: 'POST',
      body: JSON.stringify({
        'first_name': enquire.first_name,
        'last_name': enquire.last_name,
        'subject' : enquire.subject,
        'message' : enquire.message,
        'email' : user_email
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(res => res.json())
      .then((json) => {
         console.log(json);
         if(json.status === 'success'){
              setEnquire({...enquire, status: true, submit: false});
         }
    });
}

  return (
    <>
      <form
        className="contact-form-1 rainbow-dynamic-form"
        id="contact-form"
        onSubmit={CreateEnquire}
      >
        <div className="form-group">
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First name"
            onChange={(e) => setEnquire({...enquire, first_name: e.target.value})}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Last name"
            onChange={(e) => setEnquire({...enquire, last_name: e.target.value})}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Your Subject"
            onChange={(e) => setEnquire({...enquire, subject: e.target.value})}
          />
        </div>

        <div className="form-group">
          <textarea
            name="contact-message"
            id="contact-message"
            placeholder="Your Message"
            onChange={(e) => setEnquire({...enquire, message: e.target.value})}
          ></textarea>
        </div>

        <div className="form-group">
          <button
            name="submit"
            type="submit"
            id="submit"
            className="btn-default btn-large rainbow-btn round"
            disabled={enquire.submit}
          >
            <span>Submit Now</span>
          </button>
        </div>
        { enquire.status &&
           <p style={{marginTop: '10px'}}>Your message sent to us successfully.</p> 
        }
      </form>
    </>
  );
};

export default ContactForm;
