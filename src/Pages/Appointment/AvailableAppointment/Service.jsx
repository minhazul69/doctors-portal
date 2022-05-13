import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl text-center">
      <div class="card-body">
        <h2 class="card-title text-secondary inline-block">{name}</h2>
        <p className="font-bold text-sm ">
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-[#dc2626] font-bold">Try Another Day</span>
          )}{" "}
        </p>
        <p className="text-sm my-2">
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div class="card-actions justify-center ">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            for="booking-modal"
            class="btn btn-primary text-white font-bold modal-button bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
