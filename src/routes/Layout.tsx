import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/SideBar";

function Layout() {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
