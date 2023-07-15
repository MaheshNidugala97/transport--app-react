import React from "react";
import ProgressBar from "./ProgressBar";
import PaymentMethod from "./PaymentMethod";
import InputFields from "./InputFields";
import PanelFooter from "./PanelFooter";
import "./payment.css";

const CheckoutPanel = () => {
  return (
    <div className="bodycheckout">
      <div className="checkout-panel">
        <div className="panel-body">
          <h2 className="title-checkout">Checkout</h2>

          <ProgressBar />

          <PaymentMethod />

          <InputFields />
        </div>

        <PanelFooter />
      </div>
    </div>
  );
};

export default CheckoutPanel;
