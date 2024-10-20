import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import img from "../../assets/images/layouts/deco.png";
import imgFighter from "../../assets/images/layouts/coming-soon.png";
import logoArt from "../../assets/images/logo/logo-art.png";

// Define the target date in ISO format
const targetDateISO = "2024-12-31T23:59:59.000Z";

// Convert the target date to a Date object and get the timestamp in seconds
const targetDate = new Date(targetDateISO).getTime() / 1000;
const now = new Date().getTime() / 1000;
const initialTimer = targetDate - now; // Calculate the initial timer value in seconds

const boxStyle = {
  background:
    "linear-gradient(89.96deg, rgba(255, 255, 255, 0.05) 0.03%, rgba(255, 255, 255, 0.008) 49.67%, rgba(255, 255, 255, 0.05) 99.96%)",
  backdropFilter: "blur(4px)",
  padding: "12px",
  position: "relative",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  width: "177px",
  height: "102px",
  borderRadius: "20px",
  overflow: "hidden",
  display: "flex", // Added for vertical centering
  flexDirection: "column", // Added for vertical centering
  alignItems: "center", // Added for horizontal centering
  justifyContent: "center", // Added for vertical centering
  margin: "0 5px", // Added for 10px gap between boxes (5px on each side)
};

const numberStyle = {
  color: "#FFF",
  fontSize: "32px",
  fontWeight: 700,
};

const labelStyle = {
  marginTop: "12px",
  //color: "#697783",
  color: "#CED1D3",
  fontSize: "16px",
  fontWeight: 400,
  textTransform: "uppercase", // Added to capitalize the labels
};

const headingBoxStyle = {
  background:
    "linear-gradient(89.96deg, rgba(255, 255, 255, 0.05) 0.03%, rgba(255, 255, 255, 0.008) 49.67%, rgba(255, 255, 255, 0.05) 99.96%)",
  backdropFilter: "blur(2px)",
  borderRadius: "20px",
  display: "flex", // For horizontal alignment
  justifyContent: "center", // For horizontal alignment
  alignItems: "center", // For vertical alignment
  padding: "12px", // Optional, adjust to your liking
  marginBottom: "20px", // Optional, for spacing between heading and boxes
  width: "100%",
};

const headingTextStyle = {
  // Since you're using <h4>, these styles are optional. Adjust as needed.
  color: "#FFF", // Assuming white, adjust as per your theme
  fontSize: "18px", // Adjust as per your preference
  fontWeight: 600, // Adjust as per your preference
  textTransform: "uppercase", // If you want the title in uppercase
};

const containerStyle = {
  display: "flex",
  flexDirection: "column", // Stack elements vertically
  alignItems: "center", // Center horizontally
  width: "100%",
};

const countdownStyle = {
  // Add your countdown styles here, or keep using className="coundown"
  marginBottom: "10px", // Space between countdown and inputs
  marginTop: "10px",
};

const formContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

const inputBoxStyle = {
  // Your existing inputBoxStyle
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(2px)",
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  font: "300 14px/1.5 sans-serif",
  color: "#fff",
  padding: "15px",
  boxShadow: "none",
  flex: 1,
  height: "54px",
  marginRight: "5px", // Gap between inputs
  placeholder: { color: "#fff" }, // Set placeholder color to white
};

const inputBoxStyleLast = {
  ...inputBoxStyle, // Inherit all styles from inputBoxStyle
  marginRight: "0px", // Reset margin for the last input
};

function BannerComingSoon(props) {
  const [countdownValues, setCountdownValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [timer, setTimer] = useState(initialTimer > 0 ? initialTimer : 0); // Ensure timer is not negative

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
        updateCountdownValues(timer - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000); // Update every 1000 milliseconds (1 second)

    return () => clearInterval(intervalId);
  }, [timer]);

  const updateCountdownValues = (timeLeft) => {
    const days = Math.floor(timeLeft / (60 * 60 * 24));
    const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = Math.floor(timeLeft % 60); // Use Math.floor() to get whole seconds

    setCountdownValues({
      days,
      hours,
      minutes,
      seconds: seconds.toString().padStart(2, "0"), // Format as string with 2 digits
    });
  };

  useEffect(() => {
    updateCountdownValues(timer);
  }, []); // Initialize countdown values on mount

  // Optional: Recalculate the timer on mount to ensure accuracy (in case the component mounts after a significant delay)
  useEffect(() => {
    const now = new Date().getTime() / 1000;
    const newTimer = targetDate - now;
    if (newTimer > 0) {
      setTimer(newTimer);
      updateCountdownValues(newTimer);
    } else {
      setTimer(0);
      setCountdownValues({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  }, []); // Recalculate the timer on mount for accuracy

  return (
    <section className="banner s3">
      <div className="shape"></div>
      <div className="shape right"></div>
      <div className="shape s3 right"></div>

      <div className="container big">
        <div className="row">
          <div className="col-xl-5 col-md-12">
            <div className="banner__left">
              <div className="block-text">
                <h4 className="heading">
                  Empowering the Tae Kwon Do Community Coming Soon!{" "}
                  <span className="arlo_tm_animation_text_word"></span>
                </h4>
                <p className="desc">
                  Introducing Respect Token, a digital revolution designed to
                  empower and reward the Tae Kwon Do community. Built to honor
                  the values of discipline, respect, and excellence, Respect
                  Token is more than a digital asset—it’s a symbol of unity and
                  growth for practitioners, fans, and enthusiasts.
                </p>
                <h5 className="heading">
                  {" "}
                  <span className="arlo_tm_animation_text_word">
                    As Seen in ESPN News{" "}
                  </span>
                </h5>
                <p className="desc">
                  Respect Token is making waves across the world, with features
                  in ESPN News, showcasing its mission to uplift and connect the
                  global Tae Kwon Do community. Join us as we launch an
                  innovative platform to reward dedication and passion in
                  martial arts. Get ready to embrace the spirit of Tae Kwon Do
                  like never before.
                </p>
                {/* <Link to="/contact" className="action-btn">
                  <span>Buy RESPECT</span>
                </Link> */}
              </div>

              {/* <div className="couter-list">
                <div className="couter-box">
                  <h4 className="numb">
                    11.6Bil<span>+</span>
                  </h4>
                  <p>Total Staked</p>
                </div>
                <div className="couter-box">
                  <h4 className="numb">
                    88%<span>+</span>
                  </h4>
                  <p>APY</p>
                </div>
                <div className="couter-box">
                  <h4 className="numb">
                    40%<span>+</span>
                  </h4>
                  <p>Presale </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-xl-7 col-md-12">
            <div className="banner__right" style={{ padding: "0" }}>
              <div className="image-1">
                <img src={imgFighter} width={800} alt="Cyfonii" />
              </div>

              <div
                className="banner-box"
                data-aos="fade-up"
                data-aos-duration="2000"
                style={{
                  width: "83%",
                  position: "absolute",
                  top: "280px",
                  backdropFilter: "none",
                }}
              >
                {/* <div
                  className="banner-box"
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <h4 className="title">Next Price Increase</h4>
                </div> */}

                <div className="top">
                  {/* <h4 className="title">Ninja 3D Digital Artwork</h4> */}

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderBottom:
                        "border-bottom: 1px solid rgba(255, 255, 255, 0.1);",
                    }}
                  >
                    <div style={headingBoxStyle}>
                      <h4 style={headingTextStyle} className="title">
                        Coming Soon
                      </h4>
                    </div>
                    <div style={{ display: "flex" }}>
                      {/* Container for the boxes */}
                      <div className="countdown-box">
                        <span style={numberStyle}>{countdownValues.days}</span>
                        <span style={labelStyle}>DAY(S)</span>
                      </div>
                      <div className="countdown-box">
                        <span style={numberStyle}>{countdownValues.hours}</span>
                        <span style={labelStyle}>HOUR(S)</span>
                      </div>
                      <div className="countdown-box">
                        <span style={numberStyle}>
                          {countdownValues.minutes}
                        </span>
                        <span style={labelStyle}>MINUTE(S)</span>
                      </div>
                      <div className="countdown-box">
                        <span style={numberStyle}>
                          {countdownValues.seconds.toString().padStart(2, "0")}
                        </span>
                        <span style={labelStyle}>SECOND(S)</span>
                      </div>
                    </div>
                  </div>

                  {/* <div className="wishlist">
                    <div className="icon">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.25 3.8125C11.25 2.36292 10.0256 1.1875 8.51533 1.1875C7.38658 1.1875 6.41708 1.84433 6 2.78175C5.58292 1.84433 4.61342 1.1875 3.48408 1.1875C1.975 1.1875 0.75 2.36292 0.75 3.8125C0.75 8.02417 6 10.8125 6 10.8125C6 10.8125 11.25 8.02417 11.25 3.8125Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p>3432</p>
                  </div> */}
                </div>

                {/* <div className="main">
                  <div className="info" style={{ width: "37%" }}>
                    <p style={{ color: "#CED1D3" }}>Current</p>
                    <h4>1 RESPECT</h4>
                    <p style={{ color: "#CED1D3" }}>$0.001</p>
                  </div>

                  <div style={containerStyle}>
                    <div style={countdownStyle} className="coundown">
                      <p style={{ color: "#fff" }}>
                        USDT Raised: $129250.5 / $1787500.0
                      </p>
                      <span
                        className="js-countdown"
                        data-timer="12865550"
                      ></span>
                    </div>

                    <div style={formContainerStyle}>
                      <div style={inputBoxStyle}>
                        <input
                          type="text"
                          className="input-placeholder"
                          placeholder="Amount in you pay"
                          style={{
                            width: "100%",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            color: "#fff",
                          }}
                        />
                      </div>
                      <div style={inputBoxStyleLast}>
                        <input
                          className="input-placeholder"
                          type="text"
                          placeholder="Respect you get"
                          style={{
                            width: "100%",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            color: "#fff",
                          }}
                        />
                      </div>
                    </div>

                    <div style={countdownStyle} className="coundown">
                      <p style={{ color: "#fff" }}>
                        USDT Raised: $129250.5 / $1787500.0
                      </p>
                      <span
                        className="js-countdown"
                        data-timer="12865550"
                      ></span>
                    </div>
                  </div>
                </div>
*/}
                <div className="button">
                  <Link
                    to="#"
                    className="action-btn"
                    data-toggle="modal"
                    data-target="#popup_bid"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <img src={logoArt} width={70} alt="respect" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerComingSoon;
