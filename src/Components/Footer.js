import React from "react";
import shuvo2 from "../Assets/images/logo2.png";

function Footer() {
  return (
    <div className="footer text-center">
      <a className="footer-con" href="#" style={{ flexDirection: "column" }}>
          <img src={shuvo2} className="brand-img" alt="brand-img" />
        </a>
      <p className="footer-txt mt-5">
        © 2022. All rights reserved by ShuvoHossain.
      </p>
    </div>
  );
}

export default Footer;
