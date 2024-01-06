import React from "react";

import shuvo2 from "../Assets/images/logo.png";

function Header() {
  return (
    <div className="header-con">
      <nav className="header navbar navbar-expand-xl navbar-light fixed-top animate__animated animate__fadeInDown">
        <div className="d-flex animate__animated animate__rubberBand">
          <a className="ms-4 brand-con" href="#">
            <div className="brand">
              <img src={shuvo2} className="brand-img" alt="brand-img" />
            </div>
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars fa-xl me-4 txt-primary"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active header-butt">
              <a className="nav-link hvr-underline-from-center " href="#">
                HOME
              </a>
            </li>
            <li className="nav-item header-butt">
              <a
                className="nav-link hvr-underline-from-center"
                href="#features"
              >
                FEATURES
              </a>
            </li>
            <li className="nav-item header-butt">
              <a
                className="nav-link hvr-underline-from-center"
                href="#portfolio"
              >
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item header-butt">
              <a className="nav-link hvr-underline-from-center" href="#resume">
                RESUME
              </a>
            </li>
            <li className="nav-item header-butt">
              <a className="nav-link hvr-underline-from-center" href="#clients">
                CLIENTS
              </a>
            </li>
            <li className="nav-item header-butt">
              <a className="nav-link hvr-underline-from-center" href="#pricing">
                PRICIING
              </a>
            </li>
            <li className="nav-item header-butt">
              <a className="nav-link hvr-underline-from-center" href="#blog">
                BLOG
              </a>
            </li>
            <li className="nav-item header-butt">
              <a className="nav-link hvr-underline-from-center" href="#contact">
                CONTACT
              </a>
            </li>

            <div className="ms-2 me-4 btn-container">
              <a className="buy-button" href="#pricing">
                <span className="btn-text">BUY NOW</span>
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
