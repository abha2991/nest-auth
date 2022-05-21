import React from "react";
import logo from "./logo.svg";
const Payment = () => {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await fetch("/orders", {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
    const data = await result.json();
    //console.log(data);
    var amount = data.amount;
    var order_id = data.id;
    var currency = data.currency;
    // Getting the order details back
    //const { amount, id: order_id, currency } = result.body;

    //console.log({ amount, currency, order_id });

    const options = {
      key: "rzp_test_g5mVREbtx16Zdy", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Ezea group",
      description: "Test Transaction",
      image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        console.log("After");
        console.log(data);
        const result = await fetch("/success", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log(result.data.msg);
      },
      prefill: {
        name: "Ezea group",
        email: "Ezea@zeabros.com",
        contact: "9999999999",
      },
      notes: {
        address: "Zeabros Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      // console.log(response.error.code);
      // console.log(response.error.description);
      // console.log(response.error.source);
      // console.log(response.error.step);
      // console.log(response.error.reason);
      // console.log(response.error.metadata.order_id);
      // console.log(response.error.metadata.payment_id);
    });
    paymentObject.open();
  }
  return (
      <>
      <button onClick={displayRazorpay}>Pay</button>
    </>
  );
};

export default Payment;
