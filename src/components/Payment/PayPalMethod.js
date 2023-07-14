import React from "react";

const PayPalMethod = () => {
  return (
    <label htmlFor="paypal" className="method paypal">
      <img
        src="https://designmodo.com/demo/checkout-panel/img/paypal_logo.png"
        alt="PayPal"
      />
      <div className="radio-input">
        <input id="paypal" type="radio" name="payment" />
        Pay €49 with PayPal
      </div>
    </label>
  );
};

export default PayPalMethod;
