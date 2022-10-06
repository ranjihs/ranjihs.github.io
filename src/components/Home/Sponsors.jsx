import React from "react";
import { useTranslation } from 'react-i18next';

import { MainSponsor, PlatinumSponsors, GoldSponsors } from "data/sponsors";
import { DarkWaves } from "components/Layout/WavesSeparator";

const Sponsors = () => {
  const [t] = useTranslation();

  return (
    <section
      id="sponsors"
      className="py-5 bg-white position-relative text-dark"
    >
      <div className="container">
        <h1 className="title text-dark display-4 text-center pb-4">
          {t('SPONSORS.TITLE').toUpperCase()}
        </h1>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h1 className="title position-relative d-inline-block mx-auto section-title display-6 text-center pb-2 my-3">
                {t('SPONSORS.MAIN_SPONSOR')}
              </h1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-6 mx-auto px-md-5 py-3">
                <img
                  className="w-100 aspect rounded-pill shadow"
                  src={MainSponsor.image}
                  alt={MainSponsor.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h1 className="title position-relative d-inline-block mx-auto section-title display-6 text-center pb-2 my-3">
                {t('SPONSORS.PLATINUM_SPONSORS')}
              </h1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {PlatinumSponsors.map((pSponsor, index) => (
                <div className="col-5 mx-auto px-md-5 py-3" key={index}>
                  <img
                    className="w-100 aspect rounded-pill shadow"
                    src={pSponsor.image}
                    alt={pSponsor.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container pb-5 mb-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h1 className="title position-relative d-inline-block mx-auto section-title display-6 text-center pb-2 my-3">
                {t('SPONSORS.GOLD_SPONSORS')}
              </h1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {GoldSponsors.map((gSponsor, index) => (
                <div className="col-4 px-md-4 py-3" index={index}>
                  <img
                    className="w-100 aspect rounded-pill shadow"
                    src={gSponsor.image}
                    alt={gSponsor.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DarkWaves />
    </section>
  );
};

export default Sponsors;
