import React from "react";
import "../../css/crums.css";

const BreadCrums = () => {
  return (
    <div class="crums-panel">
      <div class="crums-body">
        <div class="progress-bar">
          <div class="step active"></div>
          <div class="step"></div>
          <div class="step"></div>
          <div class="step"></div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrums;
