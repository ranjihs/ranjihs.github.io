import React from "react";
import { useTranslation } from 'react-i18next';

import logoAPN from "assets/logos/institutions/logo-apn.png";
import logoCna from "assets/logos/logo-cna-white-plain.png";
import { ReactComponent as Youtube } from "assets/icons/socialMedia/youtube.svg";
import { ReactComponent as Facebook } from "assets/icons/socialMedia/facebook.svg";
import { ReactComponent as Instagram } from "assets/icons/socialMedia/instagram.svg";

const Footer = () => {
  const [t] = useTranslation();
  return (
    <footer className="text-white py-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className=" col-md-3 col-sm-6 col-6 mb-3 justify-content-center text-center">
                <h6 className="text-white-50 fw-bold">{t('FOOTER.FOR_MORE_INFO')}</h6>
                <div>
                  <a
                    href="mailto:info@confra.org.ar"
                    className="fw-bold text-white footer_link header_link active d-inline-block"
                    style={{ fontSize: "0.9rem" }}
                  >
                    info@confra.org.ar
                  </a>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6 col-6 mb-3 justify-content-center text-center">
                <div className="row text-white-50">
                  <div className="col-12">
                    <h6 className="fw-bold ">{t('FOOTER.CONTACT_US')}</h6>
                  </div>
                  <span>
                    <a href="https://www.facebook.com/confra2023">
                      <span className=" sm-margin-right">
                        <Facebook width={20} height={20} fill="#fff" />
                      </span>
                    </a>
                    <a href="https://instagram.com/confra.arg?utm_medium=copy_link">
                      <span className=" sm-margin-right">
                        <Instagram width={20} height={20} fill="#fff" />
                      </span>
                    </a>
                    <a href="https://www.youtube.com/channel/UCBcqzl5v5IvIAHFp048ODlg">
                      <span className=" sm-margin-right">
                        <Youtube width={20} height={20} fill="#fff" />
                      </span>
                    </a>
                  </span>
                </div>
              </div>
              <div className=" col-md-3 col-sm-12 col-12 mb-3 justify-content-center text-center">
                <img src={logoCna} width={75} className="mw-10" alt="cna" />
                <img src={logoAPN} width={100} className="mw-10" alt="apn" />
              </div>
              <div className=" col-md-3 col-sm-12 col-12 mb-3 justify-content-center text-center">
                <p className="text-white-50 fw-bold" style={{ fontSize: "0.7rem" }}>
                  © {new Date().getFullYear()} CONFRA. <br /> {t('FOOTER.RIGHTS_RESERVED')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
