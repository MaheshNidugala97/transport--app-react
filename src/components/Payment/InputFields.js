import React from "react";

const InputFields = () => {
  return (
    <div className="input-fields">
      <div className="column-1">
        <label htmlFor="cardholder">Cardholder's Name</label>
        <input type="text" id="cardholder" className="input-field1" />
        <div className="column-2">
          <label htmlFor="cardnumber">Card Number</label>
          <input type="password" id="cardnumber" className="input-field1" />
        </div>
        <div className="small-inputs">
          <div>
            <label htmlFor="date">Valid Thru</label>
            <input type="text" id="date" className="input-field1" />
          </div>

          <div>
            <label htmlFor="verification">CVV / CVC</label>
            <input type="password" id="verification" className="input-field1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFields;
