import React from "react";
import Chair from "../../../assets/images/chair.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="hero min-h-screen px-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Chair} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="w-85">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
