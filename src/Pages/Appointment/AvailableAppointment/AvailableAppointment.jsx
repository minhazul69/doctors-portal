import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ selected }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="lg:px-12 mb-10">
      <h3 className="text-center text-secondary text-xl my-16">
        Available Appointment on {format(selected, "PP")}
      </h3>

      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-5">
        {services.map((service) => (
          <Service
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selected={selected}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
