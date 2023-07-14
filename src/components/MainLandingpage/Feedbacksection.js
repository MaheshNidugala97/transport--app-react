import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./feedbacksection.css";

function FeedbackSection() {
  return (
    <section className="feedback-section">
      <div className="feedback-background-image"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="frame-header">What Our Customer Say's</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;
