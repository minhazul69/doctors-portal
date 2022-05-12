import React from "react";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import Contact from "./Contact/Contact";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Card />
      <Service />
      <Appointment />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
