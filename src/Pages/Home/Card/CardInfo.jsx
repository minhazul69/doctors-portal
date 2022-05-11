import React from "react";

const CardInfo = ({ img }) => {
  return (
    <div className="card lg:card-side shadow-xl bg-accent text-white px-8 py-5">
      <figure>
        {" "}
        <img src={img} alt="Album" />{" "}
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default CardInfo;
