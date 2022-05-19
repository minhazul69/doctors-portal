import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="flex items-center justify-center my-20 lg:px-12">
        <div className="flex-1 hidden lg:block">
          <img className="w-full mt-[-140px] " src={doctor} alt="" />
        </div>
        <div className="flex-1 text-white p-10 lg:p-0">
          <h5 className="font-bold text-primary text-xl mb-4">Appointment</h5>
          <h3 className="text-3xl font-bold">Make an appointment Today</h3>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Link
            to="/appointment"
            className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
