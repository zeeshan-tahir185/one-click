import React, {useState, useEffect} from 'react';

const ColorPalette = ({user}) => {

  const [api_key, setApiKey] = useState('');
  const GenerateKey = () => {
     fetch('https://oneclickhuman.com/api_request/generate_api_key', {
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
         if(json.status === 'success'){
             setApiKey(json.api_key);    
         }
    });
}

useEffect(() => {
 // console.log(user.user_id);
   if (user.user_id) {
         fetch('https://oneclickhuman.com/api_request/get_api_key', {
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
           if(json.status === 'success'){
             setApiKey(json.api_key);    
           }
       });

   }
}, [1]);

const [code_view1, setCodeView1] = useState("&lt;script&gt;<br> // ********** IMPORTANT **********<br> // Place your API Key here<br> var API_KEY = 'YOUR_API_KEY_HERE'; // Replace 'YOUR_API_KEY_HERE' with your actual API Key<br><br> // Place your mode of operation here (if applicable)<br> var MODE = 'YOUR_MODE_HERE'; // Replace 'YOUR_MODE_HERE' with the desired mode, if needed<br><br>//This varible will store humanized text through streaming<br><br> // Set output language<br>var language = 'English'<br><br>var outputStreaming = '';<br><br> // This varibale will store humanized text after completion<br> var output = '';<br><br> // Set a status of completion<br> var is_completed = false;<br><br> // Initialize a vriable for event source<br> var source;<br><br> // place your text here for conversion<br> var text = 'Academics understand the significance of originality in their writings. While they’re aware that duplicating content is unacceptable, many unintentionally fall into the plagiarism trap, especially during literature reviews. This article delves into strategies that can be employed to avoid such pitfalls.'; <br><br> // Start sending request for paraphrase<br> fetch('https://oneclickhuman.com/api_request/api_create_id', {<br> method: 'POST',<br> headers: {<br> 'Content-Type': 'application/json',<br> },<br> body: JSON.stringify({content: text, api_key: API_KEY, mode: MODE, language: language, keep_words: ['empathy', 'engage']}),<br> })<br> &lt;/script&gt;");
const [code_view2, setCodeView2] = useState(".then(response => response.json())<br> .then(res => {<br><br> // You can set a loader here<br> // Create event source<br> source = new EventSource('https://oneclickhuman.com/api_request/api_paraphrase/' + res.promptID);<br> source.onmessage = function(event) {<br> var data = JSON.parse(event.data);  <br> // When paraphrase is completed<br> if (data.msg === '[DONE]') {<br> // Close the event source after the completion<br> source.close();<br> // Change the status <br> var is_completed = true;<br> }else{<br> if(data.msg !== undefined){ <br> output = output + data.msg;<br> }<br> }<br> };<br><br> })<br>");
const [code_view3, setCodeView3] = useState(".then(response => response.json())<br> .then(res => {<br><br> // Create event source<br> source = new EventSource('https://oneclickhuman.com/api_request/api_paraphrase/' + res.promptID);<br> source.onmessage = function(event) {<br> var data = JSON.parse(event.data);  <br> // When paraphrase is completed<br> if (data.msg === '[DONE]') {<br> // Close the event source after the completion<br> source.close();<br> }else{<br> if(data.msg !== undefined){ <br> // storing streaming text <br> outputStreaming = outputStreaming + data.msg;<br> }<br> }<br> };<br><br> })<br>");
const [code_view4, setCodeView4] = useState("&lt;?php<br>$content = $_POST['content'];<br>$api_key = $_POST['api_key'];<br>$mode = $_POST['mode'];<br><br>$data = array(<br> 'content' => $content,<br> 'api_key' => $api_key,<br> 'mode' => $mode,<br>);<br><br>$api_url = 'https://oneclickhuman.com/api_request/api_create_id';<br><br>$ch = curl_init($api_url);<br><br>curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);<br>curl_setopt($ch, CURLOPT_POST, 1);<br>curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));<br>curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));<br><br>$response = curl_exec($ch);<br><br>if (curl_errno($ch)) {<br> echo 'Curl error: ' . curl_error($ch);<br>}<br><br>curl_close($ch);<br><br>echo json_encode($response, true);<br>?&gt;");


  return (
    <>

        <div className="wrapper">
          <div className="section-title">
            <h4 className="rbt-title-style-3">API &nbsp;
            { api_key === '' ?
            <button className="btn-default btn-small round" onClick={GenerateKey} style={{float: 'right'}}>Generate API KEY</button>
            :
            <span id="api_key">Your API KEY: <b>{api_key}</b></span>
            }
            </h4>
          </div>

          <div className="row g-5">
  
            <div className="col-lg-12">
              <div className="color-box-inner">
                
              <table>
  <thead>
    <tr style={{textAlign: 'left'}}>
      <th style={{padding: '8px'}}>Field</th>
      <th style={{padding: '8px'}}>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>URL</b></td>
      <td>https://oneclickhuman.com/api_request/api_create_id</td>
    </tr>
    <tr>
      <td><b>Parameters</b></td>
      <td>
        <ul style={{listStyle: 'none', paddingLeft: '0'}}>
          <li>
            <b>content</b> <br/>
            <i>Data Type:</i> String <br/>
            Input text for paraphrasing. Maximum word limit: 1500.
          </li>
          <li>
            <b>api_key (Required)</b> <br/>
            <i>Data Type:</i> String <br/>
            API key required for the request.
          </li>
          <li>
            <b>Mode (Required)</b> <br/>
            <i>Data Type:</i> String <br/>
            Available modes: <b>Premium</b>, <b>Lightning</b>.
          </li>
          <li>
            <b>language (Optional)</b> <br/>
            <i>Data Type:</i> String <br/>
            Example: 'English'.
          </li>
          <li>
            <b>keep_words (Optional)</b> <br/>
            <i>Data Type:</i> Array <br/>
            Example: ['empathy', 'engage'].
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><b>Code: JavaScript</b></td>
      <td>
      <p>This is how you will need to generate API call -</p>
                    <div className="code_view" dangerouslySetInnerHTML={{__html: code_view1}}></div><br></br>
                    <p>Get Humanized text from API after completion -</p>
                    <div className="code_view" dangerouslySetInnerHTML={{__html: code_view2}}></div><br></br>
                    <p>Get Humanized text from API in intervals ( i.e. Streaming )</p>
                    <div className="code_view" dangerouslySetInnerHTML={{__html: code_view3}}></div>
      </td>
    </tr>
    <tr>
      <td><b>Code: PHP</b></td>
      <td>
      <p>This is how you will need to generate API call in PHP-</p>
                    <div className="code_view" dangerouslySetInnerHTML={{__html: code_view4}}></div><br></br>
                    <p>You can <a href="https://oneclickhuman.com/api-assets/paraphrase-with-php.zip" download>download</a> the full source code for PHP. </p>
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
}

export default ColorPalette