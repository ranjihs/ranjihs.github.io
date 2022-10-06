import "App.css";

import "swiper/swiper-bundle.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect } from "react";

import Layout from "components/Layout";
import Home from "pages/Home";
import Sport from "pages/Sport";

function App() {
  useEffect(() => {
    const loader = document.getElementById("loader");
    const removeLoader = () => loader.remove();
    if (document.readyState === "complete") {
      removeLoader();
    } else {
      window.addEventListener("load", removeLoader);
      return () => window.removeEventListener("load", removeLoader);
    }
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sports/:name" component={Sport} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
