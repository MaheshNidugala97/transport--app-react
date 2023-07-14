import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./contentsection.css";

function ContentSection() {
  const localTransportation = require("../Assets/public transportation.png");
  const CabService = require("../Assets/cab ser.png");
  const rideSharing = require("../Assets/ride sharing.png");
  return (
    <section className="content-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="frame-header">Common Featured Services</h1>
          </div>
          <div className="row frame-col">
            <div className="col-md-4">
              <div className="frame-column">
                <img
                  src={localTransportation}
                  alt="Image 1"
                  className="locTrans"
                />
                <h4 className="txt">LOCAL TRANSPORTATION</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="frame-column">
                <img src={CabService} alt="Image 2" className="cabserv" />
                <h4 className="txt">CAB SERVICES</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="frame-column">
                <img src={rideSharing} alt="Image 3" />
                <h4 className="txt">RIDE SHARING</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 context">
              <span className="content">
                We have local public transportation service, users can book bus,
                local trains , and we are also providing cab service and ride
                sharing facility user can choose best of there interest. IT
                Provide an intuitive journey planner tool that allows users to
                enter their starting point and destination to find the best
                routes, schedules, and estimated travel times. Include options
                for different modes of public transport (bus, train, subway,
                etc.), as well as any interconnections or transfers required.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
