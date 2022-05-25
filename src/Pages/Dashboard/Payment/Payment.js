import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutFrom/CheckoutFrom";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51L3D4UHeJjZEDFcjrIrMcM7pky2NrbL9cHSmOC9EnBpTOwQvCbP4VfuGstYI0o9e8mH7638JPzFURtQWBoAdhC7v00aHq7TOU7"
);
const Payment = () => {
  const { id } = useParams();
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(`http://localhost:5000/booking/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h2 className="text-red-500 font-bold text-xl">Please Pay for: {id}</h2>
      <div class="hero  bg-base-200">
        <div class="">
          <div>
            <h1 class="text-5xl font-bold">
              Please Pay For: {appointment.treatment}
            </h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div class="card-body w-96 bg-base-200 rounded shadow-lg mx-auto my-10">
        <h2 class="card-title">Card title!</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
