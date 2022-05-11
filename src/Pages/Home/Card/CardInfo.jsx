import React from "react";

const CardInfo = ({ img, title, description, bgColor }) => {
  return (
    <div className={`card lg:card-side shadow-xl text-white px-8  ${bgColor}`}>
      <figure>
        {" "}
        <img src={img} alt="Album" />{" "}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardInfo;
