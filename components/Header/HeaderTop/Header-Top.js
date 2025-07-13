import { useAppContext } from "@/context/Context";
import Link from "next/link";

const HeaderTop = ({type}) => {
  const { toggleTop, setToggle } = useAppContext();
  return (
    <>
      <div
        className={`header-top-news bg-image1 ${toggleTop ? "" : "deactive"}`}
      >
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                { type === 'not-purchased' &&
                                <div className="inner">
                                <div className="content">
                                  <span className="rainbow-badge">Limited Time Offer</span>
                                  <span className="news-text">
                                    Intro price. Get OneclickHuman at -50% off.
                                  </span>
                                </div>
                                <div className="right-button">
                                  <Link className="btn-read-more" href="/pricing">
                                    <span>
                                      Purchase Now <i className="feather-arrow-right"></i>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                }
                { type === 'purchased' &&
                                <div className="inner">
                                <div className="content">
                                  <span className="news-text">
                                  Monthly balance have been exhusted. Upgrade your plan or purchase lifetime words. 
                                  </span>
                                </div>
                                <div className="right-button">
                                  <Link className="btn-read-more" href="/pricing">
                                    <span>
                                      Purchase Now <i className="feather-arrow-right"></i>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                }

              </div>
            </div>
          </div>
        </div>
        <div className="icon-close">
          <button
            className="close-button bgsection-activation"
            onClick={() => setToggle(!toggleTop)}
          >
            <i className="feather-x"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
