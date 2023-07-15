import React from "react";
import "../../css/back.css";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div className="div_back">
      <Link to="/moredetails">
        <div className="image_back_arrow"></div>
        <span className="span_back">Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
