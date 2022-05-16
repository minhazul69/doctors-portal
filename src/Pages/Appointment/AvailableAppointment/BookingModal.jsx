import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, selected, setTreatment }) => {
  const { name, slots, _id } = treatment;
  const [user] = useAuthState(auth);
  const handleBooking = (e) => {
    e.preventDefault();
    const option = e.target.slot.value;
    const number = e.target.phoneNumber.value;
    if (!number) {
      return toast.error("Please Type A Number");
    }
    const formatedDate = format(selected, "PP");
    console.log(formatedDate);
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      option,
      patient: user?.email,
      patientName: user?.displayName,
      phone: number,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`Appointment is set, ${formatedDate} at ${option} `);
        } else {
          toast.error(
            `Already have an appointment on ${data.booking?.date} at ${data.booking?.option}`
          );
        }
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-2xl text-secondary">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 justify-items-center mt-10"
          >
            <input
              disabled
              value={format(selected, "PP")}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-accent w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              disabled
              name="fullName"
              value={user?.displayName}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              disabled
              value={user?.email || ""}
              name="email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs text-white font-bold bg-gradient-to-r from-secondary to-primary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
