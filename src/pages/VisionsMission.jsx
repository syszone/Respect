import React, { useState } from "react";

import PageTitle from "../components/pagetitle/PageTitle";
import Counter from "../components/counter/Counter";
import Footer from "../components/footer/Footer";
import Faqs from "../components/faqs/Faqs";
import dataFaqs from "../assets/fake-data/data-faq";

import img1 from "../assets/images/layouts/about-01.png";
import img2 from "../assets/images/layouts/about-02.png";
import img3 from "../assets/images/layouts/about-03.png";
import img4 from "../assets/images/layouts/about-04.png";
import img5 from "../assets/images/layouts/about-05.png";

function VisionsMission(props) {
  const [dataImg] = useState([
    {
      id: 1,
      img: img1,
      class: "img1",
    },
    {
      id: 2,
      img: img4,
      class: "img2",
    },
    {
      id: 3,
      img: img3,
      class: "img3",
    },
    {
      id: 4,
      img: img2,
      class: "img4",
    },
    {
      id: 5,
      img: img5,
      class: "img5",
    },
  ]);
  return (
    <div className="page-visions wrapper">
      <PageTitle title="Visions & Mission" />
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="block-text">
                <h6 className="sub-heading">
                  <span>Visions & Mission</span>
                </h6>
                <h3 className="heading wow" data-splitting>
                  Our Vision
                </h3>
                <p className="mb-17">
                  The "RESPECT" token envisions a seamless fusion of the digital
                  and physical realms within the Taekwondo and Martial Arts
                  communities, all unified under the Kombat Taekwondo ecosystem.
                  By integrating the traditions of martial arts with blockchain
                  technology, the RESPECT token aims to empower and reward
                  fighters, referees, coaches, club owners, and the entire
                  Taekwondo community. Serving as the cornerstone of a future
                  where participants can earn and utilize tokens for various
                  benefits, the token ensures trust, fairness, and efficiency
                  within the ecosystem. This digital bridge will revolutionize
                  value exchange, fostering recognition, motivation, and
                  collaboration, ultimately creating a more inclusive and
                  engaging environment for all.
                </p>
              </div>
              <div className="block-text">
                <h6 className="sub-heading">
                  <span>Visions & Mission</span>
                </h6>
                <h3 className="heading wow" data-splitting>
                  Our Mission
                </h3>
                <p>
                  The mission of the "RESPECT" token is to seamlessly unite the
                  digital and physical worlds of Taekwondo and Martial Arts,
                  forming a cohesive ecosystem within Kombat Taekwondo. This
                  token will act as a powerful incentive for fighters, referees,
                  school owners, and the entire Taekwondo Martial Arts
                  communities, paving the way for professional growth and
                  personal enrichment.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="about__right">
                <div className="images">
                  {dataImg.map((idx) => (
                    <img
                      key={idx.id}
                      className={idx.class}
                      src={idx.img}
                      alt="cyfonii"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: 100 }}>
          <div className="row">
            <p>
              The mission of the "RESPECT" token is to seamlessly unite the
              digital and physical worlds of Taekwondo and Martial Arts, forming
              a cohesive ecosystem within Kombat Taekwondo. This token will act
              as a powerful incentive for fighters, referees, school owners, and
              the entire Taekwondo Martial Arts communities, paving the way for
              professional growth and personal enrichment.
            </p>
          </div>
        </div>
      </section>

      {/* <Counter />

      <Faqs data={dataFaqs} /> */}

      <Footer />
    </div>
  );
}

export default VisionsMission;
