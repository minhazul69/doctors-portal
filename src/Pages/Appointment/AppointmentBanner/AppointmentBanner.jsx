import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ selected, setSelected }) => {
  const css = `.my-today { 
      font-weight: bold;
      font-size: 180%; 
      color: red;
    }`;
  return (
    <div
      class="hero min-h-screen"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl w-full" alt="" />
        <div className="lg:px-24">
          <style>{css}</style>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            modifiersClassNames={{
              today: "my-today",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
