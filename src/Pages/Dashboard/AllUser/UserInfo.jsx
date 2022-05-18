import React from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const UserInfo = ({ user, index, refetch }) => {
  const { email, role } = user;
  const handleAdmin = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn bg-green-600 hover:bg-green-800 border-0",
        cancelButton: "btn bg-red-600 hover:bg-red-800 border-0",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You Make Admin This User?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Make Admin",
        cancelButtonText: "cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              refetch();
              console.log(data);
            });
          swalWithBootstrapButtons.fire(
            "SuccessFull",
            "This User Make Admin SuccessFull",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "User Admin Canceled",
            "error"
          );
        }
      });
  };
  return (
    <tr key={user._id}>
      <th>{index + 1}</th>
      <td>{user?.email}</td>
      <td>
        {role === "admin" ? (
          <h5 className="font-bold text-red-700">Already Admin</h5>
        ) : (
          <button onClick={handleAdmin} class="btn btn-sm">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-circle btn-outline">
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
  );
};
