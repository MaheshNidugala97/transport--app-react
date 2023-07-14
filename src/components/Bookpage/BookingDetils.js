import React from "react";
import "../../css/booking.details.css";
import { Link } from "react-router-dom";

const BookingDetails = () => {
  return (
    <div>
      <div className="div_booking_details">
        <div className="div_date_time">
          <span className="span_date_from">Thu, 29 Jun</span>
          <span className="span_date_to"> Fri, 30 Jun</span>
          <div className="arrow_image_right"></div>
        </div>
        <div className="div_city">
          <span className="span_time_from">15:00 </span>
          <span className="span_time_to">22:20 </span>
          <span className="city_name_from">Berlin</span>
          <span className="city_name_to"> Munich </span>
          <div className="image_dest"></div>
        </div>
      </div>

      <div id="id_adults" className="div_adults">
        <span class="span_adult"> 1 Adult </span>
        <span class="span_euro"> €49.99 </span>
        <div class="horizantal_line">
          <hr></hr>
        </div>
      </div>

      <div id="id_total" className="div_total">
        <span class="span_total"> Total(incl.VAT) </span>
        <span class="span_total_euro"> €49.99 </span>
      </div>

      <div id="id_voucher" className="div_voucher">
        <span class="span_redeem_voucher">redeem voucher</span>
        <div class="voucher_image"></div>
        <div class="voucher_down_arrow_image"></div>
      </div>

      <div>
        <Link to="/payment">
          <button id=" id_button" class="button">
            Confirm Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingDetails;
