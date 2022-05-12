import React from "react";
import banner from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      className="flex justify-center py-10"
      style={{ background: `url(${banner})` }}
    >
      <div className="py-10">
        <h4 className="text-lg font-bold text-primary text-center mb-2">
          Contact Us
        </h4>
        <h2 className="text-3xl text-center text-white">
          Stay connected with us
        </h2>
        <form action="" className="text-center mt-16">
          <input
            type="email"
            placeholder="Email Address"
            class="input input-bordered input-accent w-full max-w-xs mb-6"
          />
          <input
            type="text"
            placeholder="Subject"
            class="input input-bordered input-accent w-full max-w-xs mb-6"
          />
          <br />
          <textarea
            className="border rounded border-accent mb-6 p-3"
            name=""
            placeholder="Your Message"
            cols="38"
            rows="6"
          ></textarea>
          <br />
          <button
            class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
