import React from "react";

import AboutConfra from "components/About/AboutConfra";
import AboutCNA from "components/About/AboutCNA";
import Institutions from "components/About/Institutions"
import { WhiteWaves } from "components/Layout/WavesSeparator";

const About = () => {
  return (
    <section className="about position-relative overflow-hidden" id="about">
      <div className="container pb-5 mb-5">
        <AboutConfra />
        <AboutCNA />
        <Institutions />
        <WhiteWaves />
      </div>
    </section>
  );
};

export default About;
