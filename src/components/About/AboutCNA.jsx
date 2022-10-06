import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from 'react-i18next';

import logoCna from "assets/logos/logo-cna.png";

const AboutCNA = () => {
  const [t] = useTranslation();
  return (
    <article className="position-relative py-5">
      <div className="container mb-5">
        <h1 className="title-light text-center display-4 pb-4">{t('ABOUT_CNA.TITLE').toUpperCase()}</h1>
        <div className="row">
          <div className="col-lg-10 overflow-hidden">
            <ScrollAnimation animateOnce animateIn="fadeInDown">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-12 mx-auto px-5 col-lg-12 col-md-6 mb-md-5">
                        <img
                          className="w-100 "
                          src={logoCna}
                          alt="Logo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 d-flex justify-content-center align-items-center">
                    <div className="col-lg-12 col-12 text-md-start text-center">
                      <h2 className="title-light">{t('ABOUT_CNA.CENTRO_NIKKEI_ARGENTINO').toUpperCase()}</h2>
                      <p className="mb-0">
                      {t('ABOUT_CNA.DESCRIPTION_TEXT')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </article >
  );
};

export default AboutCNA;
