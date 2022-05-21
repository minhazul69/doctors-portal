import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import Spinner from "../../Shared/Spinner/Spinner";

const MyAppointment = () => {
  const navigate = useNavigate();
  // const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const {
    data: appointments,
    isLoading,
    refetch,
  } = useQuery(["user", "navigate"], () =>
    fetch(
      `https://doctor-portal-01826.herokuapp.com/booking?patient=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  // useEffect(() => {
  //   if (user) {
  //     fetch(
  //       `https://doctor-portal-01826.herokuapp.com/booking?patient=${user?.email}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //       }
  //     )
  //       .then((res) => {
  //         if (res.status === 401 || res.status === 403) {
  //           signOut(auth);
  //           localStorage.removeItem("accessToken");
  //           navigate("/");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setAppointments(data);
  //       });
  //   }
  // }, [navigate, user]);

  const handleAppointmentDelete = (id, appointment) => {
    Swal.fire({
      title: "Are you sure ?",
      text: "You can't delete Your Appointment",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
          });
        Swal.fire(
          "Deleted!",
          `Your ${appointment} Appointment Delete SuccessFull.`,
          "success"
        );
      }
    });
  };
  if (isLoading) {
    return <Spinner />;
  }
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
                <th>Price</th>
                <th>Treatment</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{appointment?.patientName}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.option}</td>
                  <td>{appointment.price}</td>
                  <td>{appointment.treatment}</td>
                  <td>
                    <button
                      onClick={() =>
                        handleAppointmentDelete(
                          appointment._id,
                          appointment.date
                        )
                      }
                      class="btn btn-circle btn-outline btn-error"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyAppointment;
