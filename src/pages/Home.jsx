import React from "react";

import About from "components/Home/About";
import Location from "components/Home/Location";
import Slogan from "components/Home/Slogan";
import Sports from "components/Home/Sports";

const Home = () => {
  return (
    <main>
      <Slogan />
      <About />
      <Sports />
      <Location />
    </main>
  );
};

export default Home;
