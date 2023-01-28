// import { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";

// let stripePromise;

// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe(
//       "pk_test_51MOvxHHhXNMOwis95KYg5N6KUWHPXLLk4Oy7CnyFvZcPnDShoMnUVBBakKDXhXYiWEGzF7J7vnnXa3dt5qeDBgqO00zGGJD0Q3"
//     );
//   }

//   return stripePromise;
// };

// const Checkout = async () => {
//   const [stripeError, setStripeError] = useState(null);
//   const [isLoading, setLoading] = useState(false);

//   // try {
//   //   const session = await stripe.checkout.sessions.create({
//   //     submit_type: "pay",
//   //     mode: "payment",
//   //     payment_method_types: ["card"],

//   //     line_items: [
//   //       {
//   //         price_data: {
//   //           currency: "aud",
//   //           product_data: {
//   //             name: post.movie.title,
//   //             images: [post.movie.posterImage],
//   //           },
//   //           unit_amount: post.room.tires.standard.price * 100,
//   //         },
//   //         quantity: req.body.quantity,
//   //         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//   //       },
//   //     ],
//   //     // line_items: post.map((item) => {
//   //     //   return {
//   //     //     price_data: {
//   //     //       currency: "aud",
//   //     //       product_data: {
//   //     //         name: item.movie.title,
//   //     //         images: [item.movie.posterImage],
//   //     //         venue: item.venue.name,
//   //     //       },
//   //     //       unit_amount:
//   //     //         req.body.quantity  100  post.room.tires.standard.price,
//   //     //     },
//   //     //   };
//   //     // }),
//   //     //bring the people to success or failed page
//   //     success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
//   //     cancel_url: `${YOUR_DOMAIN}/cancel`,
//   //   });

//   //   res.status(200).json(session);
//   // } catch (error) {
//   //   console.log("error form server");
//   //   res.status(error.statusCode || 500).json(error.message);
//   // }

//   const item = {
//     price: "pr_100",
//     quantity: 2,
//     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//   };

//   const checkoutOptions = {
//     lineItems: [item],
//     mode: "payment",
//     successUrl: `${window.location.origin}/success`,
//     cancelUrl: `${window.location.origin}/cancel`,
//   };

//   const redirectToCheckout = async () => {
//     setLoading(true);
//     console.log("redirectToCheckout");

//     const stripe = await getStripe();
//     const { error } = await stripe.redirectToCheckout(checkoutOptions);
//     console.log("Stripe checkout error", error);

//     if (error) setStripeError(error.message);
//     setLoading(false);
//   };

//   if (stripeError) alert(stripeError);

//   return (
//     <div className="checkout">
//       <h1>Stripe Checkout</h1>
//       <p className="checkout-title">Design+Code React Hooks Course</p>
//       <p className="checkout-description">
//         Learn how to build a website with React Hooks
//       </p>
//       <h1 className="checkout-price">$19</h1>

//       <button
//         className="checkout-button"
//         onClick={redirectToCheckout}
//         disabled={isLoading}
//       >
//         <div className="grey-circle">
//           <div className="purple-circle"></div>
//         </div>
//         <div className="text-container">
//           <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
//         </div>
//       </button>
//     </div>
//   );
// };

// export default Checkout;

// import React from "react";
// import { apis } from "../apis/apis";

// const StripeCheckoutComponent = () => {
//   const handleCheckout = () => {
//     apis.get("/getSession").then(async ({ data }) => {
//       window.location = data.url;
//     });
//   };

//   return (
//     <button className="next" onClick={handleCheckout}>
//       checkout
//     </button>
//   );
// };

// export default StripeCheckoutComponent;

import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutComponent = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_WBqax2FWVzS9QlpJScO07iuL";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutComponent;
