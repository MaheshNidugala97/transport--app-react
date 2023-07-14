import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../MainLandingpage/homesection.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function HomeSection() {

  const [selectedDate, setSelectedDate] = useState(null);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
 
  return (
    <section className="home-section">
      <div className="background-image"></div>
      <div className="content-container">
        <span className="qstn">Where would you like to travel today?</span>
        <div className="form-container">
          <form>
            <div className="form-field">
              <input
                type="text"
                id="from"
                className="locFrom"
                placeholder="From"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                required
              />
            </div>

            <div className="form-field">
              <input
                type="text"
                id="to"
                className="locTo"
                placeholder="To"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                required
              />
            </div>

            <div className="form-field">
              <div className="side-by-side-fields">
                <div className="datepicker-field">
                  <DatePicker
                    id="date"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText="Select Date"
                    className="custom-datepicker"
                  />
                </div>
                <div className="noofpersons-field">
                  <input
                    type="number"
                    id="numberOfPersons"
                    className="noOfPersons"
                    min="1"
                    placeholder="No of Person"
                    value={numberOfPersons}
                    onChange={(e) => setNumberOfPersons(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="search-button-field">
              <Link
                to="/service"
              >
                <button type="submit" className="search-button">Search</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
