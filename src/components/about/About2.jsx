import React, { useState } from "react";

import Button from "../button/Button";
import Partner from "../partner/Partner";

import img from "../../assets/images/layouts/about-06.png";

function About2(props) {
  const [dataBlock] = useState({
    subheading: "About us",
    heading: "1st ICO Platform That Offers Rewards",

    desc1:
      "The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens",
    desc2:
      "The pioneering nature of this ICO platform lies in its innovative approach to investor engagement. By introducing a rewards system, it not only streamlines the process of purchasing and selling tokens but also incentivizes participation. This dual benefit strategy aims to foster a more vibrant and loyal community, where every transaction contributes to a more rewarding experience for all stakeholders involved.",
  });
  return (
    <section className="about s2">
      <div className="shape"></div>
      <div className="shape right"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="block-text center pd-0">
              <h6 className="sub-heading">
                <span>{dataBlock.subheading}</span>
              </h6>
              <h3 className="heading pd">{dataBlock.heading}</h3>
            </div>

            <div
              className="about__main center"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img src={img} alt="Cyfonii" />
              <p className="mb-17">{dataBlock.desc1}</p>
              <p className="mb-30">{dataBlock.desc2}</p>
              <Button title="More About Us" link="/about" />
            </div>

            <Partner />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About2;
