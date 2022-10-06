import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import {  SwiperSlide } from "swiper/react";
import { useTranslation } from 'react-i18next';

import { locations } from "data/locations";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const Location = () => {
  const [t] = useTranslation();

  return (
    <section
      id="location"
      style={{ marginTop: -2, zIndex: 2 }}
      className="pb-5 pt-4 position-relative"
    >
      <div className="container position-relative pb-5 mb-5">
        <h1 className="title-light display-4 text-center pb-4">{t('LOCATIONS.TITLE').toUpperCase()}</h1>
        <p className="mb-3"> {t('LOCATIONS.DESCRIPTION_TEXT')} </p>
        <div className="position-relative">
            {locations.map((location, index) => (
              <SwiperSlide key={index} className="p-3 rounded-3">
                <a style={{textDecoration: 'none', color: 'white'}} href={location.link} target="_blank" rel="noreferrer">
                  <div className="row position-relative">
                    <div className="position-relative col-lg-6 rounded-3 overflow-hidden">
                      <ScrollAnimation animateOnce animateIn="fadeInLeft">
                        <img
                          src={location.image}
                          alt={location.name}
                          className="w-100 image rounded-3 shadow-sm justify-content-center"
                          style={{ verticalAlign: 'middle' }}
                        />
                      </ScrollAnimation>
                    </div>
                    <div className="px-3 col-lg-6 d-flex justify-content-center flex-column">
                      <ScrollAnimation animateOnce animateIn="fadeInRight">
                        <h1 className="title-light">{location.name}</h1>
                        <p>{location.description}</p>
                      </ScrollAnimation>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
