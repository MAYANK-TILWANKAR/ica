// app/components/MakePaymentComponent.js
"use client"; // Mark this component as a client component

import React from "react";

const MakePaymentComponent = (props) => {
  const makePayment = async () => {
    try {
      const res = await initializeRazorpay();
      if (!res) {
        alert("Razorpay SDK failed to load");
        return;
      }

      // Make API call to the serverless API
      const data = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          taxAmt: 4000,
        }),
      }).then((t) => t.json());

      if (data.error) {
        alert("Error creating order: " + data.error);
        return;
      }

      var options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // Use Razorpay key from environment variables
        name: "Excel",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for your test donation",
        image: "https://manuarora.in/logo.png",
        handler: function (response) {
          alert("Razorpay Response: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "pradeep das",
          email: "admin@indradhanu.online",
          contact: "9853785519",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("An error occurred during payment:", error);
    }
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  return (
    <button onClick={makePayment}>
    {props.name}
    </button>
  );
};

export default MakePaymentComponent;
