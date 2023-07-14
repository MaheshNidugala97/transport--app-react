import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "../../css/contact.details.css";

const ContactDetails = () => {
  const [countrycode, setCountryCode] = React.useState("Germany");

  const handleChange = (event) => {
    setCountryCode(event.target.value);
  };

  return (
    <div className="div_contact">
      <div className="div_email">
        <TextField
          autoFocus
          id="outlined-required"
          label="Email"
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
      <div className="div_country_code">
        <FormControl>
          <InputLabel
            id="country-code-select-label"
            sx={{
              top: "60px",
              left: "30px",
            }}
          >
            Code
          </InputLabel>
          <Select
            labelId="country-code-select-label"
            id="country-code-select"
            value={countrycode}
            onChange={handleChange}
            color="secondary"
            sx={{
              width: 80,
              marginTop: "60px",
              backgroundColor: "#ffffff",
              height: 44,
              borderRadius: "6px",
              marginLeft: "30px",
            }}
          >
            <MenuItem value={"India"}>+91</MenuItem>
            <MenuItem value={"Germany"}>+49</MenuItem>
            <MenuItem value={"UK"}>+44</MenuItem>
            <MenuItem value={"China"}>+88</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="div_phone_number">
        <TextField
          autoFocus
          id="outlined-required"
          label="Phone"
          color="secondary"
          sx={{
            width: 220,
            marginTop: "60px",
            marginLeft: "45px",
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
      <div className="div_contact_details">
        <div className="div_two"></div>
        <span className="span_two">2</span>
        <span className="span_contact">Contact</span>
      </div>
    </div>
  );
};

export default ContactDetails;
