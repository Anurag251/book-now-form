import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutFormComponent = () => {
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <PaymentElement /> */}
        <button disabled={isProcessing}>
          <span>{isProcessing ? "Processing..." : "Pay Now"}</span>
        </button>
      </form>
    </div>
  );
};

export default CheckoutFormComponent;
