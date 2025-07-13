import Separator from "@/app/separator";
import FooterData from "../../data/footer.json";
import SingleFooter from "./FooterProps/SingleFooter";
import { useAppContext } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo/logo.png";
import logoLight from "../../public/images/logo/logo-light.png";

const Footer = () => {
  const { isLightTheme } = useAppContext();
  return (
    <>
      <footer className="rainbow-footer footer-style-default footer-style-3 position-relative mt-0">
        <Separator isLightTheme={isLightTheme} top={true} />
        <div className="footer-top">
          <div className="container">
            {/* <div className="row justify-content-center mb--30">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="rainbow-footer-widget text-center">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        className={
                          isLightTheme ? "logo-light" : "logo-dark m-auto"
                        }
                        src={isLightTheme ? logo : logoDark}
                        width={201}
                        height={35}
                        alt="Corporate Logo"
                      />
                    </Link>
                  </div>
                  <p className="b1 text-center mt--20 mb--0">
                    Create Website By ChatenAI So Quick Download And Make Your
                    Site.
                  </p>
                </div>
              </div>
            </div> */}
            <div className="separator-animated animated-true mt--50 mb--50"></div>
            {FooterData &&
              FooterData.footer.map((data, index) => (
                <div className="row" key={index}>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="rainbow-footer-widget">
                    <div className="logo">
                    <Link href="/">
                      <Image
                        className={
                          isLightTheme ? "logo-light" : "logo-dark"
                        }
                        src={isLightTheme ? logo : logoLight}
                        width={201}
                        height={35}
                        alt="Logo"
                        style={{margin: '0 auto !important', display: 'block'}}
                      />
                    </Link>
                    <div style={{ display: "flex", gap: "20px", fontSize: '25px', margin: "0 auto !important", width: "fit-content", marginTop: "30px !important" }}>
                    <div class="icon">
                      <a href="https://www.facebook.com/oneclickhuman/" target="_blank"><i class="feather-facebook"></i></a>
                    </div>
                    <div class="icon">
                      <a href="https://www.instagram.com/oneclickhuman/" target="_blank"><i class="feather-instagram"></i></a>
                    </div>
                    </div>
                  </div>
                  <br/>
                    </div>
                  </div>
                  <SingleFooter data={data.services} />
                  <SingleFooter data={data.products} />
                  <SingleFooter data={data.company} />
                  <SingleFooter data={data.solutions} />
                </div>
              ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
