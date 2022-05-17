import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../Shared/CustomLink/CustomLink";

const Dashboard = () => {
  return (
    <div className="lg:px-12">
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet />
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <CustomLink to="/dashboard">My Appointment</CustomLink>
            </li>
            <li>
              <CustomLink to="/dashboard/review">My Review</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
