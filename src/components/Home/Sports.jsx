import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { sports } from "data/sports";
import { DarkWaves } from "components/Layout/WavesSeparator";

const Sports = () => {
  const [t] = useTranslation();
  const showSports = (sports = []) =>
    sports.map((sport, i) => {
      const Icon = require(`../../assets/icons/sports/${sport.name}.png`);
      return (
        <div
          className="col-lg-3 col-md-4 col-sm-6 col-12 overflow-hidden"
          key={i}
        >
          <ScrollAnimation animateIn={"fadeInUp"} animateOnce>
            <Link
              to={`/sports/${encodeURIComponent(sport.name)}`}
              style={{ textDecoration: 'none', color: '#2c3038' }}
            >
              <div className="shadow my-2 sports-card">
                <div className="row">
                  <div className="col-4 d-flex justify-content-center align-items-center">
                    <img
                      src={Icon.default}
                      className="img-fluid aspect"
                      height="auto"
                      alt={sport.name}
                    />
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <h4 className="karnivore align-middle">{t(sport.title)}</h4>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollAnimation>
        </div>
      );
    });

  return (
    <section
      id="sports"
      className="bg-white overflow-hidden position-relative text-dark py-5"
    >
      <div className="container pb-5 mb-5">
        <h1 className="title display-4 text-center pb-4">{t('SPORTS.TITLE').toUpperCase()}</h1>
        <p className="mb-3">
          {t('SPORTS.DESCRIPTION_TEXT')}
        </p>
        <div className="row md-margin-bottom">{showSports(sports)}</div>
      </div>
      <DarkWaves />
    </section>
  );
};

export default Sports;
