import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MOvxHHhXNMOwis95KYg5N6KUWHPXLLk4Oy7CnyFvZcPnDShoMnUVBBakKDXhXYiWEGzF7J7vnnXa3dt5qeDBgqO00zGGJD0Q3"
    );
  }

  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1MP1dFHhXNMOwis9T1w8kFvE",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/`,
    cancelUrl: `${window.location.origin}/`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div className="checkout">
      <button
        className="next"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Checkout"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;
