import React, { useEffect } from "react";

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
import { useStore } from "../app/Store";

import "../Assets/css/style.scss";

function Main() {
  const {
    bears,
    increasePopulation,
    decreasePopulation,
    removeAllBears,
    setName,
    clearName,
    name,
  } = useStore();

  return (
    <div className="container-fluid">
      <Header />
      <Hero />
      <div className="container">
        <div className="zustand_btn">
          <button className="btn btn-primary" onClick={increasePopulation}>
            increasePopulation
          </button>
          <button className="btn btn-primary">{bears}</button>
          <button className="btn btn-primary" onClick={decreasePopulation}>
            decreasePopulation
          </button>
          <button className="btn btn-primary" onClick={removeAllBears}>
            removeAllBears
          </button>
          <button className="btn btn-primary" onClick={setName}>
            setName
          </button>
          <button className="btn btn-primary">{name}</button>
          <button className="btn btn-primary" onClick={clearName}>
            clearName
          </button>
        </div>

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
