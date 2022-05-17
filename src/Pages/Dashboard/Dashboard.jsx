import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../Shared/CustomLink/CustomLink";

const Dashboard = () => {
  return (
    <div className="lg:px-12">
      <div class="drawer drawer-mobile">
        <input id="dashboard-dropdown" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
          {/* <!-- Page content here --> */}
          <h2 className="text-3xl font-bold text-purple-700 text-center my-10">
            Welcome To Dashboard
          </h2>
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="dashboard-dropdown" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
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
