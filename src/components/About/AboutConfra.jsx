import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from 'react-i18next';

import confraLogo from "assets/logos/CONFRA_LOGO_04.png";

const AboutConfra = () => {
  const [t] = useTranslation();
  return (
    <article className="py-2 overflow-hidden">
      <div className="container">
        <h1 className="title-light display-4 text-center"> {t('ABOUT_CONFRA.TITLE').toUpperCase()} </h1>
        <div className="row pt-4">
          <div className="col-lg-6">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              <h4 className="title-light"> {t('ABOUT_CONFRA.SUBTITLE_INTRO.LABEL').toUpperCase()} </h4>
              <p className="text"> {t('ABOUT_CONFRA.SUBTITLE_INTRO.DESCRIPTION_TEXT')} </p>
              <h4 className="title-light"> {t('ABOUT_CONFRA.SUBTITLE_MISSION').toUpperCase()} </h4>
              <p className="text"> {t('ABOUT_CONFRA.DESCRIPTION_TEXT')} </p>
            </ScrollAnimation>
          </div>
          <div className="col-lg-6 px-4">
            <ScrollAnimation animateIn="fadeInRight" animateOnce>
              <div className="position-relative py-1">
                <img
                  className="w-100 "
                  src={confraLogo}
                  alt="Logo"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutConfra;
