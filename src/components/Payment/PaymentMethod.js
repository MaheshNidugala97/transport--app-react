import React from "react";
import CardMethod from "./CardMethod";
import PayPalMethod from "./PayPalMethod";

const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <CardMethod />
      <PayPalMethod />
    </div>
  );
};

export default PaymentMethod;
