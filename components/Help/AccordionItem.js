import React from "react";

const AccordionItem = () => {
  return (
    <>
      <div className="rainbow-accordion-style  accordion" id="help-accordion">

<div class="accordion" id="accordionExamplea">
  <div class="accordion-item card bg-flashlight">
    <h2 class="accordion-header card-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What are the different modes?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExamplea">
      <div class="accordion-body card-body">
<table>
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

                <br></br>
                <h4>1️⃣ Premium Mode:</h4>
                <ul className="my-ul">
                  <li><b>Focus:</b> Preserves original content quality, recommended for SEO, blogs , academic or research material.</li>
                  <li><b>Detection:</b> Outperforms all standard AI detection tools and has a 95% success rate against AI detection tools.</li>
                  <li><b>Content:</b> Minimal content alteration</li>
                </ul>
                <br></br>
                <h4>2️⃣ Lightning Mode:</h4>
                <ul className="my-ul">
                  <li><b>Reliability:</b> Designed to evade AI detection, maybe detected by few AI tools.</li>
                  <li><b>Content Quality:</b> Accepts slight grammatical inaccuracies; does not support advanced formatting.</li>
                  <li><b>Suitability:</b> Super fast output, with a trade-off in formatting and minor errors.</li>
                </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item card bg-flashlight">
    <h2 class="accordion-header card-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Will Google Penalize me for AI Content by your Tool?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExamplea">
      <div class="accordion-body card-body">
      AI content is generally considered low quality by Google, but once you pass it through our tool it will be indistinguishable from Human Content. So , you will not see any penalties.
      </div>
    </div>
  </div>
  <div class="accordion-item card bg-flashlight">
    <h2 class="accordion-header card-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Will the tool retain my formating?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExamplea">
      <div class="accordion-body card-body">
      You can copy and paste formatted articles , we will retain the formatting when we process your text.
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  );
};

export default AccordionItem;
