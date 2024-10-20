import React from "react";
import dataBlog from "../assets/fake-data/data-blog";
import dataCard from "../assets/fake-data/data-card";
import dataFaqs from "../assets/fake-data/data-faq";
import dataItem from "../assets/fake-data/data-item";
import dataRoadMap from "../assets/fake-data/data-roadmap";
import dataTestimonials2 from "../assets/fake-data/data-testimonials2";
import dataTeam from "../assets/fake-data/dataTeam";
import About2 from "../components/about/About2";
import Banner2 from "../components/banner/Banner2";
import BannerComingSoon from "../components/banner/BannerComingSoon";

import Blog from "../components/blog/Blog";
import Counter from "../components/counter/Counter";
import Faqs from "../components/faqs/Faqs";
import Footer2 from "../components/footer/Footer2";
import Footer from "../components/footer/Footer";
import FooterComingSoon from "../components/footer/FooterComingSoon";

import Project2 from "../components/project/Project2";
import Roadmap2 from "../components/roadmap/Roadmap2";
import Team2 from "../components/team/Team2";
import Testimonials2 from "../components/testimonials/Testimonials2";

function ComingSoon(props) {
  return (
    <div className="home-2 wrapper">
      <BannerComingSoon data={dataCard} />

      <FooterComingSoon />
    </div>
  );
}

export default ComingSoon;
