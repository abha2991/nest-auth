import logo from "../logo.svg";
import { useEffect, useRef } from "react";
import useScript from "./useScript";
import useProfileApi from '../api/useProfileApi';
import { resolve } from "react-paginate/demo/webpack.config";
import {useNavigate} from 'react-router'

const useRazorpay = () => {
  const navigate= useNavigate();
  const {data:profile,status:userstatus} = useProfileApi();
  var card_id;
  const status = useScript("https://checkout.razorpay.com/v1/checkout.js");
  const pay = async (price,cardId) => {
    console.log("In Razorpay")
    console.log({price,cardId})
    if (userstatus!="success") {
      throw Error("User not logged in");
    }
    if (status !== "ready") {
      throw Error("SDK not initialized");
    }

    const result = await fetch(
        `http://localhost:3001/api/paymentgateway`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            price,
          }),
        }
    );

    if (!result) {
      throw Error("Please try again");
    }
    const data = await result.json();
console.log({data})
    if (result.status === 400) {

      window.alert(data.message);
    }


     card_id=cardId;
    var amount = data.amount;
    var order_id = data.id;
    var currency = data.currency;
    console.log({card_id,cardId})
//console.log({amount,order_id,currency})
    return new Promise((resolve, reject) => {
      const options = {
        key: 'rzp_test_g5mVREbtx16Zdy', // Enter the Key ID generated from the Dashboard
        amount: amount?.toString() ?? "",
        currency: currency,
        name: profile.firstName,
        order_id: order_id,
        handler: async function (response) {
          const data = {
            cardId:card_id,
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          console.log("After");
          console.log(data);
          const result = await fetch("http://localhost:3001/api/paymentgateway/success", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log("Before Prefill")
          if(result.status===201)

          {
            navigate(`/download?id=${cardId}`)
          }
          await useProfileApi();
          resolve();


        },
        prefill: {
          name: profile.firstName,
          email: profile.email,
          contact: profile?.phone ?? "",
        },
        notes: {
          address: "Zeabros Corporate Office",
        },
        theme: {
          color: "#61dafb",
        },
      };
      const paymentObject = new window.Razorpay(options);

      console.log("Agter Prefill")
      paymentObject.on("payment.failed", function (response) {
        reject(response.error.reason);
      });

      console.log("After After  Prefill")
      paymentObject.open();
      console.log("After After After Prefill")
    });
  };

  return { pay };
};

export default useRazorpay;
