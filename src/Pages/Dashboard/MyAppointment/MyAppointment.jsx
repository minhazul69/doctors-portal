import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);
  return (
    <div>
      {appointments.length === 0 ? (
        <h1 className="text-3xl text-red-700 text-center font-bold my-10">
          You Have No Appointment At This Time
        </h1>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Treatment</th>
              </tr>
            </thead>
            {appointments.map((appointment, index) => (
              <tbody key={index}>
                <tr>
                  <th>{index + 1}</th>
                  <td>{appointment?.patientName}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.option}</td>
                  <td>{appointment.treatment}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default MyAppointment;
