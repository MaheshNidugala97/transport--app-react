import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./worksection.css";

function WorkSection() {
  const workImg = require("../Assets/Frame 125(1.5).png");
  const img = require("../Assets/logo0.75.png");
  return (
    <section className="work-section">
      <div className="worksection-background-image"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="frame-header">What Services We Offer's You</h1>
          </div>
          <div className="row row-col">
            <div className="col-md-12 right-content">
              <div className="brandlogo" style={{ marginLeft: "134px" }}>
                <img src={img} alt="" />
                <span className="brandname">GoRoute</span>
              </div>
              <span className="Transport">TRANSPORT</span>
              <span className="e686_547">
                "Goroute: Your Urban Mobility Companion. Discover the ease and
                convenience of public transportation in our city. Seamlessly
                plan your journeys, access real-time updates, and enjoy
                hassle-free travel on buses, trains, subways, and trams. Embrace
                the freedom of exploring the city with GoRoute."
              </span>
            </div>
          </div>
          <div className="row row-points">
            <div className="col-md-6 list">
              <ul>
                <li className="li1">
                  Seamless Integration with Smart City Services{" "}
                </li>
                <li>Instant Language Translation</li>
                <li>Rewards and Exclusive Benefits</li>
              </ul>
            </div>
            <div className="col-md-6 list">
              <ul>
                <li>Personalized Journey Recommendations </li>
                <li>Eco-Travel Tracker</li>
                <li>Virtual Travel Assistant</li>
                <li>Social Commute Groups</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
