import React from "react";
import tretment from "../../../../assets/images/treatment.png";

const ServiceBanner = () => {
  return (
    <div class="hero mt-24 lg:px-12">
      <div class="hero-content flex-col lg:flex-row ">
        <div className="lg:mx-28">
          <img
            src={tretment}
            class="max-w-sm rounded-lg shadow-2xl w-full lg:w-96"
          />
        </div>
        <div className="grow">
          <h1 class="text-3xl lg:text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
