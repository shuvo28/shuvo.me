import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function Whati() {
  AOS.init();
  // const [data, setData] = useState({ data: [] });
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/front/features")
  //     .then((res) => {
  //       // setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("err whatido", err);
  //     });
  // }, []);

  const datas = [
    {
      title: "PSD, XD and FIGMA to React and HTML",
      desc: "I can convert PSD, XD and FIGMA to HTML, React Js.",
      icon: "fa-brands fa-html5",
    },
    {
      title: "Web Development",
      desc: "I can build web applications with React, JavaScript, HTML5, CSS3, jQuery, Bootstrap, Tailwind CSS.",
      icon: "fa-solid fa-globe",
    },
    {
      title: "PSD, XD and FIGMA to HTML",
      desc: "I can convert PSD, XD and FIGMA to HTML.",
      icon: "fa-solid fa-bars",
    },
  ];

  return (
    <div id="features" className="feature-container">
      <div className="main-container" data-aos="fade-up">
        <span className="whatI-sub">FEATURES</span>
        <h1 className="whatI-title">What I Do</h1>
      </div>

      <div className="categories-container row">
        {datas.map((feature, index) => {
          return (
            <div
              key={"feature" + index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="what-con col-sm-12 col-md-6 col-lg-6 col-xl-4 my-lg-4"
            >
              <div className="what-card card">
                <div href="#" className="what-content">
                  <div className="bars-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <div className="">
                    <h5 className="card-title">{feature.title}</h5>
                    <p className="card-desc">{feature.desc}</p>
                    <i className="right-arrow-icon fa-solid fa-arrow-right fa-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Whati;
