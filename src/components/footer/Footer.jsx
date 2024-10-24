import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup"; // Import the Popup component
import logo from "../../assets/images/logo/logo.png";

function Footer(props) {
  const [dataBlock] = useState({
    heading: "Get Newsletter",
    desc: "Get udpated with news, tips & tricks",
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to control popup visibility

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="footer">
      <div className="shape"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer__main">
              <div className="block-text center">
                <h3 className="heading">{dataBlock.heading}</h3>
                <p>{dataBlock.desc}</p>
              </div>
              <form action="#" className="form">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                  />
                </div>
                <button className="action-btn">
                  <span>Subscribe</span>
                </button>
              </form>
            </div>

            <div className="footer__bottom">
              <Link to="/" className="logo">
                <img src={logo} width={70} alt="respect" />
              </Link>

              <div className="center mb--30">
                <ul className="list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/nfts">Explore</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/nfts">Collections</Link>
                  </li>
                  <li>
                    <Link to="#" onClick={togglePopup}>
                      Disclaimer
                    </Link>{" "}
                    {/* Link to trigger the popup */}
                  </li>
                </ul>
                <p>Copyright © 2022, Respect. Designed by BRDigitech</p>
              </div>

              <ul className="list-social">
                {/* Social icons */}
                <li>
                  <Link to="#">
                    <svg
                      width="9"
                      height="16"
                      viewBox="0 0 9 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.57969 9.03953C2.51969 9.03953 1.19969 9.03953 0.599688 9.03953C0.279688 9.03953 0.179688 8.91953 0.179688 8.61953C0.179688 7.81953 0.179688 6.99953 0.179688 6.19953C0.179688 5.87953 0.299688 5.77953 0.599688 5.77953H2.57969C2.57969 5.71953 2.57969 4.55953 2.57969 4.01953C2.57969 3.21953 2.71969 2.45953 3.11969 1.75953C3.53969 1.03953 4.13969 0.559531 4.89969 0.279531C5.39969 0.0995311 5.89969 0.0195312 6.43969 0.0195312H8.39969C8.67969 0.0195312 8.79969 0.139531 8.79969 0.419531V2.69953C8.79969 2.97953 8.67969 3.09953 8.39969 3.09953C7.85969 3.09953 7.31969 3.09953 6.77969 3.11953C6.23969 3.11953 5.95969 3.37953 5.95969 3.93953C5.93969 4.53953 5.95969 5.11953 5.95969 5.73953H8.27969C8.59969 5.73953 8.71969 5.85953 8.71969 6.17953V8.59953C8.71969 8.91953 8.61969 9.01953 8.27969 9.01953C7.55969 9.01953 6.01969 9.01953 5.95969 9.01953V15.5395C5.95969 15.8795 5.85969 15.9995 5.49969 15.9995C4.65969 15.9995 3.83969 15.9995 2.99969 15.9995C2.69969 15.9995 2.57969 15.8795 2.57969 15.5795C2.57969 13.4795 2.57969 9.09953 2.57969 9.03953Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isVisible && (
        <Link to="#" onClick={scrollToTop} id="scroll-top">
          <span className="icon-arrow-top"></span>
        </Link>
      )}

      {/* Render the Popup */}
      <Popup isVisible={isPopupVisible} onClose={togglePopup} />
    </footer>
  );
}

export default Footer;
