import React from "react";
import shuvo2 from "../Assets/images/man.png";

function Footer() {
  return (
    <div className="footer text-center">
      <div className="footer-con">
        <a className="brand-con" href="#" style={{ flexDirection: "column"}}>
          <div className="brand">
            <img src={shuvo2} className="brand-img" alt="brand-img"/>
          </div>
          <h5 className="brand-txt ps-0 pt-3">SHUVO</h5>
        </a>
      </div>
      <p className="footer-txt mt-5">
        © 2022. All rights reserved by ShuvoHossain.
      </p>
    </div>
  );
}

export default Footer;
