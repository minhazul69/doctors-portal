import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddDoctor = () => {
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.ConfirmPassword) {
      return toast.error("Opps Password Not Match");
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-white bg-black py-5 rounded">
        Add A doctor
      </h1>
      <div className="flex items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-xl">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="label-name">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name Is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="label-email">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email Is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@.[a-z]{3}/,
                      message: "Your Email Have Must Be A Special characters",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="label-password">Specialist</span>
                </label>
                <input
                  type="text"
                  placeholder="Specialist"
                  className="input input-bordered w-full max-w-xs"
                  {...register("specialist", {
                    required: {
                      value: true,
                      message: "Specialist Is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.specialist?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.specialist.message}
                    </span>
                  )}
                </label>
              </div>
              <input className="btn w-full" type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
