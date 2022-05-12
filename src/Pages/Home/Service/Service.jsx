import React from "react";
import ServiceInfo from "./ServiceInfo/ServiceInfo";
import Fluoride from "../../../assets/images/fluoride.png";
import Cavity from "../../../assets/images/cavity.png";
import Whitening from "../../../assets/images/whitening.png";
import ServiceBanner from "./ServiceBanner/ServiceBanner";

const Service = () => {
  return (
    <div className="my-28">
      <div className="text-center">
        <h4 className="font-bold text-secondary">Our Service</h4>
        <h1 className="text-3xl mt-2">Services We Provide</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:px-12 mt-16">
        <ServiceInfo img={Fluoride} title="Fluoride Treatment" />
        <ServiceInfo img={Cavity} title="Cavity Filling" />
        <ServiceInfo img={Whitening} title="Teeth Whitening" />
      </div>
      <ServiceBanner />
    </div>
  );
};

export default Service;
