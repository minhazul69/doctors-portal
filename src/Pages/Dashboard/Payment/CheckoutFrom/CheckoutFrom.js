import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutFrom = ({ appointment }) => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { price, patientName, patient, _id } = appointment;
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
        console.log(data);
      });
  }, [price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error?.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: ententError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient,
          },
        },
      });
    if (ententError) {
      setCardError(ententError.message);
    } else {
      setTransactionId(paymentMethod.id);
      setCardError("");
      toast.success("Congrats! Your Payment SuccessFull");
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };
      console.log(payment);
      fetch(`http://localhost:5000/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-success mt-5"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500">{cardError}</p>
      {transactionId && (
        <p>
          Your TransactionId:{" "}
          <span className="font-bold text-orange-500">{transactionId}</span>
        </p>
      )}
    </form>
  );
};

export default CheckoutFrom;
