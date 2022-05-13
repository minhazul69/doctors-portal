import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selected, setTreatment }) => {
  const { name, slots } = treatment;
  const handleBooking = (e) => {
    e.preventDefault();
    const option = e.target.slot.value;
    const name = e.target.fullName.value;
    const number = e.target.phoneNumber.value;
    const email = e.target.email.value;
    console.log(name, number, email, option);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
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
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
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
