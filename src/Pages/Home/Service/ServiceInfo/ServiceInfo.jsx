import React from "react";

const ServiceInfo = ({ img, title }) => {
  return (
    <div className="card  bg-base-100 shadow-xl  mx-3 lg:mx-0">
      <figure>
        <img className="lg:pt-2 pt-8" src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title inline-block">{title}!</h2>
        <p>
          Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has
          been the
        </p>
      </div>
    </div>
  );
};

export default ServiceInfo;
