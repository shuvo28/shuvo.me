import React from "react";
import Blog from "./Blog";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Resume from "./Resume";
import Testimonial from "./Testimonial";
import Whati from "./Whati";

import "../Assets/css/style.css";

function Main() {
  return (
    <div className="container-fluid">
      <Header />
      <Hero />
      <div className="container">
        <Whati />
        <Portfolio />
        <Resume />
        <Testimonial />
        <Clients />
        <Pricing />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
