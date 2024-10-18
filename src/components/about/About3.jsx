import React, { useState } from "react";

import Button from "../button/Button";

import img1 from "../../assets/images/layouts/rewards1.png";
import img2 from "../../assets/images/layouts/rewards2.png";

import avt from "../../assets/images/layouts/avt-05.png";

function About3(props) {
  const [dataBlock] = useState({
    subheading: "Who are we",
    heading: "1st ICO Platform That Offers Rewards",
    desc1:
      "The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens",
    desc2:
      "The pioneering nature of this ICO platform lies in its innovative approach to investor engagement. By introducing a rewards system, it not only streamlines the process of purchasing and selling tokens but also incentivizes participation. This dual benefit strategy aims to foster a more vibrant and loyal community, where every transaction contributes to a more rewarding experience for all stakeholders involved.",
  });
  const [dataCard] = useState([
    {
      id: 1,
      img: img1,
      title: "VIP Airdrop",
      price: "2.26 RESP",
      avt: avt,
      name: "Leslie Alexander",
      tag: "@leslie754",
    },
    {
      id: 2,
      img: img2,
      title: "Staking Bonus",
      price: "2.26 RESP",
      avt: avt,
      name: "Leslie Alexander",
      tag: "@leslie754",
      class: "sm",
    },
  ]);
  return (
    <section className="about s3">
      <div className="shape"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="block-text pd-0">
              <h6 className="sub-heading">
                <span>{dataBlock.subheading}</span>
              </h6>
              <h3 className="heading">{dataBlock.heading}</h3>
              <p className="mb-17">{dataBlock.desc1}</p>
              <p className="mb-26">{dataBlock.desc2}</p>
              <Button title="More About Us" link="/about" />
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div
              className="about__right"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              {dataCard.map((idx) => (
                <div key={idx.id} className={`card-box ${idx.class}`}>
                  <div className="top d-flex">
                    <span className="icon-logo-01"></span>
                    <div>
                      <h6>{idx.title}</h6>
                      <h6 className="price">{idx.price}</h6>
                    </div>
                  </div>
                  <div className="content">
                    <div className="image">
                      <img src={idx.img} alt="Cyfonii" />
                    </div>

                    <div className="info d-flex">
                      <img src={idx.avt} alt="Cyfonii" />

                      <div>
                        <h6 className="name">{idx.name}</h6>
                        <p>{idx.tag}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About3;
