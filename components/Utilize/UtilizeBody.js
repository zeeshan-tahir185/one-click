
import React, {useState, useEffect} from "react";
import { getSession } from "next-auth/react";
import Link from "next/link";

const UtilizeBody = ({ utilize }) => {

    const [user_signedIn, setuserSignedIn] = useState(false);
    useEffect( () => {
    async function testSession() {
     let session = await getSession(); 
      if(session){
        setuserSignedIn(true);
      }
    }
    
    testSession();
  }, [1]);

  return (
    <>
      {utilize &&
        utilize.map((data, index) => (
          <div id={data.id} className="single-inner-box" key={index}>
            {/* <h3 className="section-title">{data.title}</h3> */}
            {data.body.map((inner, i) => (
              <div
                id={inner.id}
                className="rbt-elements-area rbt-shadow-box"
                key={i}
              >
                <div className="wrapper">
                  <h4 className="title-sm">🔥{inner.title}🔥</h4>
                  <div className="desc">
                    { inner.id === "how-to-use" &&
                    <>
                      <ol className="my-ol">
                        <li><b>While generating the article with ChatGPT , add the below to your prompt -</b> <br/>Write a detailed and information-dense article. Avoid Corporate Jargon. Dont use Fluff. The article should flow naturally and one part should connect with another.</li>
                        <li>Process your article in premium mode to defeat most AI detection tools and ensure cleanly formatted output.</li>
                        <li>Perform a manual review(Optional) to tweak any minor issues that may arise. You just need to paste in google docs and look at the red underlined words. They are typically scarce</li>
                      </ol>
                      <div className="button-group">
                  { user_signedIn ?
                  <Link
                    className="btn-default btn-large"
                    href="/humanizer"
                  >
                    <div className="has-bg-light"></div>
                    <span>Start Humanizing</span>
                  </Link>
                    :
                  <Link
                    className="btn-default btn-large"
                    href="/signin"
                  >
                    <div className="has-bg-light"></div>
                    <span>Start Humanizing</span>
                  </Link>
                  }

                </div>
                      </>
                    }
                    { inner.id === "conversion-modes" &&
                    <>
<table className="mytable">
  <thead>
    <tr>
      <th>Conversion Mode</th>
      <th>Success Rate in Beating AI Detection Tools</th>
      <th>Quality</th>
      <th>Output Formatting</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lightning Mode</td>
      <td>85% (Moderate) - A few tools may detect AI.</td>
      <td>Good (Super high speed)</td>
      <td>Plain text</td>
    </tr>
    <tr>
      <td>Premium Mode</td>
      <td>95% (High)</td>
      <td>High</td>
      <td>Maintains Formatting</td>
    </tr>
  </tbody>
</table>
                      <h4>1️⃣ Premium Mode:</h4>
                      <ul class="my-ul"><li><b>Focus:</b> Preserves original content quality, recommended for SEO, blogs , academic or research material.</li><li><b>Detection:</b> Outperforms all standard AI detection tools and has a 95% success rate against AI detection tools.</li><li><b>Content:</b> Minimal content alteration</li></ul>
                      <h4>2️⃣ Lightning Mode:</h4>
                      <ul class="my-ul"><li><b>Reliability:</b> Designed to evade AI detection, maybe detected by few AI tools.</li><li><b>Content Quality:</b> Accepts slight grammatical inaccuracies; does not support advanced formatting.</li><li><b>Suitability:</b> Super fast output, with a trade-off in formatting and minor errors.</li></ul>
                    </>
                    }
                    { inner.id === "expert-tips" &&
                      <>
                      <ul class="my-ul"><li><b>Content Length:</b> For full efficacy, submit articles over 150 words.</li></ul>
                      <p>With these updated practices, OneclickHuman.com ensures your AI-generated content is transformed with precision, tailored to your needs, and safeguarded against the latest detection tools.</p>
                      </>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
    </>
  );
};

export default UtilizeBody;
