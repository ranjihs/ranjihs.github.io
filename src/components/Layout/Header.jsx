import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

import logo from "assets/logos/CONFRA_LOGO_04.png";

const Header = () => {
  const [headerActiveClass, setHeaderActive] = useState("");
  const [t] = useTranslation();

  useEffect(() => {
    const chk = () =>
      window.scrollY > 100
        ? setHeaderActive(" nav-sticky")
        : setHeaderActive("");
    chk();
    window.addEventListener("scroll", chk);
    return () => {
      window.removeEventListener("scroll", chk);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-custom sticky sticky-dark${headerActiveClass}`}>
      <div className="container px-2">
        <a
          className="logo text-decoration-none animate__animated d-flex align-items-center animate__tada"
          href="/"
        >
          <img src={logo} width={150} alt="CONFRA" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarTogglerDemo03"
        >
          <div></div>
          <ul className="navbar-nav navbar-center" id="mySidenav">
            <li className="nav-item">
              <a href="/#about" className="nav-link">
                {t('HEADER.ABOUT')}
              </a>
            </li>
            <li className="nav-item">
              <a href="/#sports" className="nav-link">
                {t('HEADER.SPORTS')}
              </a>
            </li>
            <li className="nav-item">
              <a href="/#location" className="nav-link">
                {t('HEADER.LOCATION')}
              </a>
            </li>
          </ul>
          <div>
            <a type="button" className="btn btn-primary button" href="https://forms.gle/GHaedZ6nqQWGrEXR8">{t('FORM.VOLUNTEER.BUTTON').toUpperCase()}</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
