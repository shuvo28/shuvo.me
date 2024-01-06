import React from "react";

import "./Loader.scss";
import { Vortex } from "react-loader-spinner";

function Loader() {
  return (
    <div className="loader-con">
      <Vortex
        visible={true}
        height="200"
        width="200"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["#ff014f", "black", "#ff014f", "black", "#ff014f", "black"]}
      />
    </div>
  );
}

export default Loader;
