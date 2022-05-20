import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";

const AddDoctor = () => {
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageStorageKey = "5de414c45289bac60608bac851de7a6e";
  const onSubmit = (data) => {
    // if (data.image[0].size !== 200) {
    //   console.log(data.image[0].size);
    // console.log(data.image[0].type);
    //   return toast.error("Image Must be 200kb");
    // }
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialist: data.specialist,
            img: image,
          };
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor Add SuccessFull");
                reset();
              } else {
                toast.error("Doctor Add Fail Please Try Again");
              }
              console.log(inserted);
            });
        }
        console.log("Success:", result);
      });
    console.log(data);
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-white bg-black py-5 rounded">
        Add A doctor
      </h1>
      <div className="flex items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-xl">Add Doctor</h2>
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
                <select
                  {...register("specialist")}
                  class="select w-full max-w-xs"
                >
                  {services.map((service) => (
                    <option value={service?.name} key={service?._id}>
                      {service?.name}
                    </option>
                  ))}
                </select>
                <label className="label">
                  {errors?.specialist?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.specialist?.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="label-image">Image</span>
                </label>
                <input
                  type="file"
                  className="input input-bordered w-full max-w-xs"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image Is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.image?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.image.message}
                    </span>
                  )}
                </label>
              </div>
              <input className="btn w-full" type="submit" value="Add" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
