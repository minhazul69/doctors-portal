import React from "react";
import CardInfo from "./CardInfo";
import Clock from "../../../assets/icons/clock.svg";
import Marker from "../../../assets/icons/marker.svg";
import Phone from "../../../assets/icons/phone.svg";

const Card = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:px-12 my-12">
      <CardInfo
        title="Opening Hours"
        description="Lorem Ipsum is simply dummy text of the pri"
        img={Clock}
        bgColor="bg-secondary"
      />
      <CardInfo
        title="Visit our location"
        description="Brooklyn, NY 10036, United States"
        img={Marker}
        bgColor="bg-accent"
      />
      <CardInfo
        title="Contact us now"
        description="+000 123 456789"
        img={Phone}
        bgColor="bg-secondary"
      />
    </div>
  );
};

export default Card;
