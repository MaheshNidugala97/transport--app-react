import React from "react";
import ProgressBar from "./ProgressBar";
import PaymentMethod from "./PaymentMethod";
import InputFields from "./InputFields";
import PanelFooter from "./PanelFooter";

const CheckoutPanel = () => {
  return (
    <div className="checkout-panel">
      <div className="panel-body">
        <h2 className="title">Checkout</h2>

        <ProgressBar />

        <PaymentMethod />

        <InputFields />
      </div>

      <PanelFooter />
    </div>
  );
};

export default CheckoutPanel;
