import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../../css/passanger.details.css";

const PassengerDetails = () => {
  return (
    <div className="passanger_details">
      <div className="first_name">
        <TextField
          autoFocus
          id="outlined-required"
          label="First Name"
          color="secondary"
          sx={{
            width: 300,
            marginTop: "60px",
          }}
          inputProps={{
            style: {
              backgroundColor: "#ffffff",
              height: "10px",
              borderRadius: "6px",
            },
          }}
          margin="normal"
        />
      </div>

      <div className="last_name">
        <TextField
          autoFocus
          id="outlined-required"
          label="Last Name"
          color="secondary"
          sx={{
            width: 300,
            marginTop: "60px",
          }}
          inputProps={{
            style: {
              backgroundColor: "#ffffff",
              height: "10px",
              borderRadius: "6px",
            },
          }}
          margin="normal"
        />
      </div>

      <div className="div_passenger_details">
        <div className="div_one"></div>
        <span className="span_one">1</span>
        <span className="span_div_passengers">Passengers</span>
      </div>
    </div>
  );
};

export default PassengerDetails;
