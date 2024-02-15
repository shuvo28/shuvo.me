import React from "react";
import man3 from "../Assets/images/shuvots.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Hero() {
  return (
    <div className="hero-main">
      <div className="star-ani">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <div className="star-ani2">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <div className="container hero">
        <div className="row">
          <div className="left-hero col-lg-7 text-light  animate__animated animate__zoomInLeft">
            <div>
              <div className="hero-no1">
                <span className="hero-subtitle">WELCOME TO MY WORLD</span>
                <h1 className="hero-title">
                  Hi, I’m{" "}
                  <span className="txt-primary">
                    SHUVO <br />
                  </span>
                </h1>
                <div className="d-flex mb-3">
                  <p className="hero-title">a web developer</p>
                </div>
                <p className="hero-desc">
                  Web Developer | React.js Enthusiast | 3+ Years of Experience
                  <br />
                  Greetings! I'm Shuvo Hossain, a passionate web developer with
                  over three years of hands-on experience in crafting immersive
                  digital experiences. My journey in the dynamic realm of web
                  development has equipped me with a robust skill set and a
                  fervent commitment to staying on the cutting edge of
                  technology.
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
                          href="https://www.facebook.com/ShuvoHossain28"
                        >
                          <i className="fa-brands fa-facebook-f fa-lg share-icon2"></i>
                        </a>
                      </li>
                      <li className="mt-3 me-3">
                        <a
                          className="share-icon link-style"
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/shuvo28"
                        >
                          <i className="fa-brands fa-github fa-lg share-icon2"></i>
                        </a>
                      </li>
                      <li className="mt-3 me-3">
                        <a
                          className="share-icon link-style"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/shuvohossain/"
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
                          <i className="fa-brands fa-react fa-xl"></i>
                        </div>
                      </li>
                      <li className="mt-3 me-3">
                        <div className="share-icon link-style">
                          <i
                            className="fa-brands fa-js fa-xl"
                            style={{ color: "yellow" }}
                          ></i>
                        </div>
                      </li>
                      <li className="mt-3 me-3">
                        <div className="share-icon link-style">
                          <i
                            className="fa-brands fa-html5 fa-xl"
                            style={{ color: "#E6532D" }}
                          ></i>
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
                  {/* <img className="hero-img" src={ss22} alt="hero-img" /> */}
                  <LazyLoadImage
                    className="hero-img"
                    alt="hero img"
                    src={man3}
                    placeholderSrc={
                      "https://leaponmedia.s3.amazonaws.com/media/webp_images/pexels-moose-photos-1036627_bk4skj_jpg.webp"
                    }
                  />
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
