import React from "react";

const CardMethod = () => {
  return (
    <label htmlFor="card" className="method card">
      <div className="card-logos">
        <img
          src="https://designmodo.com/demo/checkout-panel/img/visa_logo.png"
          alt="Visa"
        />
        <img
          src="https://designmodo.com/demo/checkout-panel/img/mastercard_logo.png"
          alt="Mastercard"
        />
      </div>

      <div className="radio-input">
        <input id="card" type="radio" name="payment" />
        Pay €49 with credit card
      </div>
    </label>
  );
};

export default CardMethod;
