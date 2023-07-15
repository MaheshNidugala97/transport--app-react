import React from "react";
import { Link } from "react-router-dom";

const PanelFooter = () => {
  return (
    <div className="panel-footer">
      <Link to="/bookingdetails">
        <button className="btn back-btn">Back</button>
      </Link>
      <button className="btn next-btn">Next Step</button>
    </div>
  );
};

export default PanelFooter;
