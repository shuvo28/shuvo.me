import React from "react";
import ss22 from "../Assets/images/man.png";

function Hero() {
  return (
    <div className="hero-main">
      <div className="star-ani">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <div className="star-ani2">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <div className="container hero pt-5">
        <div className="row">
          <div className="left-hero col-lg-7 text-light  animate__animated animate__zoomInLeft">
            <div>
              <div className="hero-no1">
                <span className="hero-subtitle">WELCOME TO MY WORLD</span>
                <h1 className="hero-title">
                  Hi, I’m{" "}
                  <span className="txt-primary">
                    Shuvo <br />
                  </span>
                </h1>
                <div className="d-flex mb-3">
                  <p className="hero-title">
                    a web developer
                  </p>
                </div>
                <p className="hero-desc">
                  I'm a web developer with 2 years of professional experience. I
                  have worked with custom eCommerce Software, Blogs, Tutor
                  management etc. I have the following skills: PSD, XD, FIGMA to
                  HTML Custome applications development with PHP, Laravel,
                  React, MySQL, JavaScript, Bootstrap, jQuery, HTML5, CSS3.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                  <div>
                    <span className="social-title">FIND WITH ME</span>
                    <ul className="list-style ">
                      <li className="mt-3 me-3">
                        <a
                          className="share-icon link-style"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.facebook.com/ShuvoHossainKhan420/"
                        >
                          <i className="fa-brands fa-facebook-f fa-lg share-icon2"></i>
                        </a>
                      </li>
                      <li className="mt-3 me-3">
                        <a
                          className="share-icon link-style"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.facebook.com/ShuvoHossainKhan420/"
                        >
                          <i className="fa-brands fa-instagram fa-lg share-icon2"></i>
                        </a>
                      </li>
                      <li className="mt-3 me-3">
                        <a
                          className="share-icon link-style"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.facebook.com/ShuvoHossainKhan420/"
                        >
                          <i className="fa-brands fa-linkedin-in fa-lg share-icon2"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                  <div>
                    <span className="social-title">BEST SKILL ON</span>
                    <ul className="list-style ">
                      <li className="mt-3 me-3">
                        <div className="share-icon link-style">
                          <i className="fa-brands fa-php fa-xl"></i>
                        </div>
                      </li>
                      <li className="mt-3 me-3">
                        <div className="share-icon link-style">
                          <i className="fa-brands fa-laravel fa-xl"></i>
                        </div>
                      </li>
                      <li className="mt-3 me-3">
                        <div className="share-icon link-style">
                          <i className="fa-brands fa-react fa-xl"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 animate__animated animate__zoomInRight">
            <div className="right-hero ">
              <div className="inner">
                <span>
                  <img className="hero-img" src={ss22} alt="hero-img"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
