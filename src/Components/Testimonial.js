import React, { useState, useEffect } from "react";
import axios from "axios";
import man from "../Assets/images/men1.png"

function Testimonial() {
  const [testimonial, setTestimonial] = useState({ data: [] });

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/front/testimonials")
  //     .then((res) => {
  //       setTestimonial(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const testimonials = [
    {
      title: "Web Development",
      name : "Mizanur Rahman",
      company_name : "SmddTech",
      post : "CEO",
      platform: "Fiver - Mar 4, 2015 - Aug 30, 2021",
      desc: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris."
    },
    {
      title: "Web Development",
      name : "Mizanur Rahman",
      company_name : "SmddTech",
      post : "CEO",
      platform: "Fiver - Mar 4, 2015 - Aug 30, 2021",
      desc: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris."
    },
    {
      title: "Web Development",
      name : "Mizanur Rahman",
      company_name : "SmddTech",
      post : "CEO",
      platform: "Fiver - Mar 4, 2015 - Aug 30, 2021",
      desc: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris."
    },
  ]

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="main-container text-center">
        <span className="whatI-sub">WHAT CLIENTS SAY</span>
        <h1 className="whatI-title">Testimonial</h1>
      </div>

      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {testimonials.map((feature, index) => {
          return (
            <div
              key={"feature" + index}
              className={"carousel-item mt-5 " + (index === 0 ? "active" : "")}
            >
              <div className="row car-item">
                <div className="col-md-12 col-lg-4 col-xl-6">
                  <div className="content-info">
                    <a href="/#" className="testi-img-con">
                      <img
                        src={man}
                        className="testi-img"
                        alt="testi-img"
                      />
                    </a>
                    <div className="mt-lg-5 content-info-desc">
                      <p href="#" className="title-con-header">
                        {feature.company_name}
                      </p>
                      <p href="#" className="card-title-car">
                        {feature.name}
                      </p>
                      <p className="operating-text">{feature.post}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-8 col-xl-6">
                  <div className="content-desc">
                    <div className="mt-3 d-flex info-box">
                      <div className="desc-con">
                        <p href="#" className="card-title-car">
                          {feature.title}
                        </p>
                        <p className="card-desc-car">{feature.platform}</p>
                      </div>
                      <div className="star-con d-flex">
                        <i className="fa-solid fa-star fa-xs"></i>
                        <i className="fa-solid fa-star fa-xs"></i>
                        <i className="fa-solid fa-star fa-xs"></i>
                        <i className="fa-solid fa-star fa-xs"></i>
                        <i className="fa-solid fa-star fa-xs"></i>
                      </div>
                    </div>
                    <p className="car-desc-text">{feature.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <button
          className="carousel-control-prev text-center"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          {/* <span className="carousel-control-prev-icon" ></span> */}
          <i className="fa-solid fa-arrow-left fa-lg" aria-hidden="true"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next text-center"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
          <i className="fa-solid fa-arrow-right fa-lg" aria-hidden="true"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
