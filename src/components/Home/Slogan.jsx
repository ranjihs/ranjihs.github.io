import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Countdown from "utils/Countdown";
import { DarkWaves } from "components/Layout/WavesSeparator";

const Slogan = () => {
  return (
    <section
      id="home"
      className="slogan position-relative d-flex align-items-center"
    >
      <div className="container text-center d-flex justify-content-center flex-column home">
        <ScrollAnimation animateIn={"fadeIn"} animateOnce>
          <h1 className="display-1 d-flex align-items-center justify-content-center text-shadow">
            <div className="karnivore">
              ARGENTINA{" "}
              <span className="karnivore" style={{ color: "#A3F7FF" }}>
                2o23
              </span>{" "}
              <br />
              <ScrollAnimation animateIn={"pulse"} duration={4} animateOnce>
                <h3 className="karnivore">UN EQUIPO, UN CORAZÓN</h3>
              </ScrollAnimation>
            </div>
          </h1>
        </ScrollAnimation>
        <Countdown />
      </div>
      <DarkWaves />
    </section >
  );
};

export default Slogan;
