import Image from "next/image";
import Link from "next/link";

import Undetectable3 from "../../public/images/Undetectable3.png";

const Split = () => {
  return (
    <>
      <div className="rainbow-split-area rainbow-section-gap">
        <div className="container">
          <div className="rainbow-splite-style">
            <div className="split-wrapper">
              <div className="row g-0 radius-10 align-items-center">
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="split-inner">
                    <h4
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="200"
                    >
                      Generate Undetectable content with AI
                    </h4>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="300"
                    >
                      Use our undetectable content generator to write high quality articles that are not detected by detectors and look absolutely human.
                    </p>
                    <ul
                      className="split-list"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="350"
                    >
                      <li>- Craft Articles in Under 20 Seconds</li>
                      <li>- Reclaim Valuable Hours with Automation</li>
                      <li>- Enhance Readability and Engagement</li>
                    </ul>
                    <div
                      className="view-more-button mt--35"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="400"
                    >
                      <Link className="btn-default round" href="/contact">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="thumbnail">
                    <Image
                      className="radius"
                      src={Undetectable3}
                      alt="Undetectable"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Split;
