import React, { useEffect, useState } from "react";
import CountDownIcon from "components/Layout/CountdownIcon";
import { useTranslation } from 'react-i18next';

const Countdown = () => {
  const [t] = useTranslation();
  const time = "02 february 2023";
  const [timeLeft, setTimeLeft] = useState({});
  const times = ["days", "hours", "mins", "secs"];
  const timeLabel = {
    "days": t('COUNTDOWN.DAYS'),
    "hours": t('COUNTDOWN.HOURS'),
    "mins": t('COUNTDOWN.MINUTES'),
    "secs": t('COUNTDOWN.SECONDS'),
  };

  useEffect(() => {
    const updateTime = () => {
      const timer = new Date(time || Date.now()).getTime();
      const now = Date.now();
      const remainingTime = timer - now;
      const prevsecs = Math.floor(remainingTime / 1000);
      const prevmins = Math.floor(prevsecs / 60);
      const secs = prevsecs % 60;
      const prevHours = Math.floor(prevmins / 60);
      const mins = prevmins % 60;
      const days = Math.floor(prevHours / 24);
      const hours = prevHours % 24;
      if (days >= 0 && hours >= 0 && mins >= 0 && secs >= 0)
        setTimeLeft({ secs, mins, hours, days });
    };
    const myInterval = setInterval(updateTime, 1000);
    return () => clearInterval(myInterval);
  }, [time]);
  return (
    <div className="bg-white text-dark shadow py-2 flex-sm-row flex-column px-sm-5 px-4 mx-auto align-items-center d-inline-flex rounded-pill">
      <h3 className="me-sm-4 mb-0">
        <span className="title">{t('COUNTDOWN.LABEL').toUpperCase()}</span>
      </h3>
      <div className="counter">
        <CountDownIcon />
        {times.map((el) => (
          <div className="counter-item" key={el}>
            <span className="counter--value">
              <div className="count-down" style={{ display: "inline" }}>
                <div className="hand hand-m">
                  <span className="digital digital-1 ">
                    {timeLeft[el] < 10 ? "0" + timeLeft[el] : timeLeft[el]}
                  </span>
                </div>
              </div>
            </span>
            <strong className="counter--label">{timeLabel[el]}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
