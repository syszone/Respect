import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import img from "../../assets/images/layouts/deco.png";
import imgFighter from "../../assets/images/layouts/header-image.png";

const initialTimer = 1296000; // 1 hour for example, adjust as needed

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

// Example countdown values
const countdownValues = {
  days: 10,
  hours: 5,
  minutes: 30,
  seconds: 15,
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

function Banner3(props) {
  const [countdownValues, setCountdownValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [timer, setTimer] = useState(initialTimer);

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
    const seconds = timeLeft % 60;

    setCountdownValues({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    updateCountdownValues(timer);
  }, []); // Initialize countdown values on mount

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
                <h2 className="heading">
                  Your Journey Begins Now!{" "}
                  <span className="arlo_tm_animation_text_word"></span>
                </h2>
                <p className="desc">
                  Enter the world of RESPECT, where every challenge tests your
                  limits and every victory earns real-world rewards. This is
                  more than a fight – it’s a path to mastery, where discipline,
                  strength, and strategy come together. now!"
                </p>

                <Link to="/contact" className="action-btn">
                  <span>Buy RESPECT</span>
                </Link>
              </div>

              <div className="couter-list">
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
              </div>
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
                  top: "330px",
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
                        Next phase pricing = $0.00111
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
                          {countdownValues.seconds}
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

                <div className="main">
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

                <div className="button">
                  <Link
                    to="#"
                    className="action-btn"
                    data-toggle="modal"
                    data-target="#popup_bid"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span>
                      Connect Wallet{" "}
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5 16.5L19 9M19 9L11.5 1.5M19 9H1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
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

export default Banner3;
