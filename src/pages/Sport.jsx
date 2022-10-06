import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";

import { sports } from "data/sports";
import { WhiteWaves, DarkWaves } from "components/Layout/WavesSeparator";

const Sport = () => {
  const [t] = useTranslation();
  const { name } = useParams();
  const [sport, setSport] = React.useState(sports[0]);
  useEffect(() => {
    if (name) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
        left: 0,
      });
      setSport(sports.find((s) => s.name === decodeURIComponent(name)));
    }
  }, [name]);
  return (
    <main className="pb-5" style={{ paddingTop: 100 }}>
      <section className="pb-5 position-relative">
        <div className="container pb-5 mb-5">
          <h1 className="title display-2">{t(sport.title)}</h1>
        </div>
        <WhiteWaves />
      </section>
      <section className="py-5 position-relative bg-white text-dark">
        <div className="container pb-5 mb-5">
          <ScrollAnimation animateIn={"fadeInLeft"} animateOnce>
            <div className={`row align-items-center py-4`}>
              <div className="col-lg-5">
                <img
                  src={sport.image}
                  alt=""
                  className="mw-100 rounded-3 shadow image"
                />
              </div>
              <div className="col-lg-7">
                <p>
                  {t(sport.text)}
                </p>
                <p>
                  {t(sport.text)}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <DarkWaves />
      </section>
    </main>
  );
};

export default Sport;
