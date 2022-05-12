import React from "react";

const CardInfo = ({ img, title, description, bgColor }) => {
  return (
    <div
      className={`card lg:card-side shadow-xl text-white px-8  ${bgColor} mx-3 lg:mx-0`}
    >
      <figure>
        {" "}
        <img className="lg:pt-1 pt-8" src={img} alt="Album" />{" "}
      </figure>
      <div className="card-body lg:text-left text-center">
        <h2 className="card-title inline-block">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardInfo;
