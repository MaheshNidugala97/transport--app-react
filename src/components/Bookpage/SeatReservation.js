import React from "react";
import "../../css/seat.reservation.css";
import Box from "@mui/material/Box";
const SeatReservation = () => {
  return (
    <Box className="div_seat_reservation">
      <div className="seat_reservation">
        <div className="div_three"></div>
        <span className="span_three">3</span>
        <span className="span_seat_reservation">Seat Reservation</span>
      </div>

      <Box
        className="div_choose_seat"
        sx={{
          "&:hover": {
            backgroundColor: "#C211A1",
            opacity: "50%",
          },
        }}
      >
        <span className="choose_seat">Choose your seat</span>
        <span className="euro">from €1.15 </span>
        <div className="div_right-arrow_image"></div>
        <div className="div_seat_image"></div>
      </Box>
    </Box>
  );
};

export default SeatReservation;
