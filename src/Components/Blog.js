import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";

function Blog() {
  AOS.init();
  const [data, setData] = useState({ data: [] });
  const [blogDetails, setBlogDetails] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/front/blogs")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showByid = (id) => {
    axios
      .get(`http://localhost:8000/api/front/blogs/${id}`)
      .then((res) => {
        setBlogDetails(res.data);
        $("#blogModal").modal({ show: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showModal = () => {
    return (
      <div className="modal" id="blogModal">
        {/* data-keyboard="true" data-backdrop="static" */}
        <div className="modal-dialog modal-container" role="document">
          <div className="blog-modal-con">
            <div className="position-relative">
              <img className="img-fluid blog-modal-img" src={blogDetails.img} alt="card-img-con"/>
              <a
                className="blog-close-btn-con"
                onClick={() => {
                  $("#blogModal").modal({ hide: true });
                }}
              >
                <p className="close-btn text-center">X</p>
              </a>
            </div>
            <div>
              <div
                className="innerHTML"
                dangerouslySetInnerHTML={{
                  __html: blogDetails.desc,
                }}
              />
              <div className="modal-btn-con">
                <a className="portfolio-modal-button me-5">
                  Like This <i className="fa-solid fa-thumbs-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="blog" className="whatI-container">
      {showModal()}
      <div className="main-container text-center" data-aos="fade-up">
        <span className="whatI-sub">VISIT MY BLOG AND KEEP YOUR FEEDBACK</span>
        <h1 className="whatI-title">My Blog</h1>
      </div>

      <div className="categories-container row">
        {data.data.map((feature, index) => {
          return (
            <div
              key={"feature" + index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="my-2 col-md-6 col-xl-4"
            >
              <a
                className="cat-card-blog card m-2"
                onClick={(e) => {
                  e.preventDefault();
                  showByid(feature.id);
                }}
              >
                <div className="content p-4">
                  <p href="#" className="card-img-blog">
                    <img src={feature.img} className="card-img-con" alt="card-img-con" />
                  </p>
                  <div className="">
                    <div className="title-con mt-3">
                      <p href="#" className="title-con-header">
                        {feature.category}
                      </p>
                      <p className="title-con-desc">
                        <span>
                          <i className="fa-solid fa-clock me-2"></i>
                        </span>
                        {feature.read_time}
                      </p>
                    </div>
                    <p href="#" className="card-title2">
                      {feature.title}
                      <span>
                        <i className="go-right fa-solid fa-arrow-right txt-primary ms-2 hvr-icon-wobble-horizontal"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
