import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./routesearchform.css";

function RouteSearchForm() {
  return (
    <section className="routeform-section">
      <div className="routeform-container">
        <div className="row row-form">
          <div className="col-3 divlocFrom1">
            <input type="text" placeholder="From" className="locFrom1" />
          </div>
          <div className="col-3 divlocFrom1">
            <input type="text" placeholder="To" className="locTo1" />
          </div>
          <div className="col-2 divlocFrom1">
            <DatePicker
              id="date"
              // selected={selectedDate}
              // onChange={handleDateChange}
              placeholderText="Select Date"
              className="datepick"
            />
          </div>
          <div className="col-2 divlocFrom1">
            <input
              type="text"
              placeholder="no of Person"
              className="personcount"
            />
          </div>
          <div className="col-2 divlocFrom1">
            <button type="submit" className="btn-route">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RouteSearchForm;
