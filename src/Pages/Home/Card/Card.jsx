import React from "react";
import CardInfo from "./CardInfo";
import Clock from "../../../assets/icons/clock.svg";
import Marker from "../../../assets/icons/marker.svg";
import Phone from "../../../assets/icons/phone.svg";

const Card = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:px-12">
      <CardInfo img={Clock} />
      <CardInfo img={Marker} />
      <CardInfo img={Phone} />
    </div>
  );
};

export default Card;
