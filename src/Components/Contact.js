import React, { useState } from "react";
import axios from "axios";
import contact from "../Assets/images/contact.png";

function Contact() {
  const [successMsg, setSuccessMsg] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    return validateDate(name, value);
  };

  const validateDate = (name, value) => {
    formData[name] = value;

    setFormData({
      ...formData,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // validator.validateAll(formData).then((isValid) => {
    //   if (isValid) {
    //     axios
    //       .post("http://localhost:8000/api/sendmail", formData)
    //       .then((res) => {
    //         setSuccessMsg(res.data);
    //         setFormData({
    //           ...formData,
    //           name: "",
    //           email: "",
    //           msg: "",
    //         });
    //       });
    //   } else {
    //     console.log("err", errors, formData);
    //     setFormData({
    //       ...formData,
    //       errors: errors,
    //     });
    //   }
    // });
  };

  const { errors } = formData;

  return (
    <div id="contact" className="whatI-container">
      <div className="main-container text-center">
        <span className="whatI-sub">CONTACT</span>
        <h1 className="whatI-title">Contact With Me</h1>
      </div>

      <div className="row mt-5">
        <div className="col-lg-5">
          <div className="contact-info">
            <a href="#" className="contact-img-con">
              <img src={contact} className="contact-img" />
            </a>
            <div className="content-info-desc">
              <h4 href="#" className="contact-title">
                Shuvo Hossain
              </h4>
              <p className="contact-text">CEO</p>
              <p className="contact-text2">
                I am available for freelance work. Connect with me via call or
                send a message.
              </p>
              <p className="phone-text">
                Phone:{" "}
                <span className="hvr-underline-from-left">+8801609882128</span>
              </p>
              <p className="phone-text">
                Email:{" "}
                <span className="hvr-underline-from-left">
                  shuvokhan01905@gmail.com
                </span>
              </p>
              <div className="contact-findme mt-5">
                <span className="social-title">FIND WITH ME</span>
                <ul className="list-style ">
                  <li className="mt-3 me-3">
                    <a
                      className="share-icon link-style"
                      target="_blank"
                      href="https://www.facebook.com/ShuvoHossainKhan420/"
                    >
                      <i className="fa-brands fa-facebook-f fa-lg"></i>
                    </a>
                  </li>
                  <li className="mt-3 me-3">
                    <a className="share-icon link-style" href="#">
                      <i className="fa-brands fa-instagram fa-lg"></i>
                    </a>
                  </li>
                  <li className="mt-3 me-3">
                    <a className="share-icon link-style" href="#">
                      <i className="fa-brands fa-linkedin-in fa-lg"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="form-info">
            <form className="contact-form row" onSubmit={handleSubmit}>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="name">YOUR NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="msg">YOUR MESSAGE</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="msg"
                    value={formData.msg}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact-butt-con">
                <button
                  type="submit"
                  className="contact-butt hvr-sweep-to-right"
                >
                  SEND MESSAGE
                  <i className="fa-solid fa-arrow-right fa-lg ms-2"></i>
                </button>
              </div>
              <p className="text-success mt-3">{successMsg}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
