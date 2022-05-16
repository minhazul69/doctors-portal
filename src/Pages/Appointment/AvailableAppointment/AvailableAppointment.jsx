import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import BookingModal from "./BookingModal";
import Service from "./Service";
import Spinner from "../../Shared/Spinner/Spinner";

const AvailableAppointment = ({ selected }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formatedDate = selected && format(selected, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(`http://localhost:5000/available?date=${formatedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Spinner />;
  }
  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formatedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formatedDate]);
  return (
    <div className="lg:px-12 mb-10">
      <h3 className="text-center text-secondary text-xl my-16">
        Available Appointment on {selected && format(selected, "PP")}
      </h3>

      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          refetch={refetch}
          treatment={treatment}
          selected={selected}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
