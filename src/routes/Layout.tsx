import Navbar from "@/Components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "@/Components/SideBar";

function Layout() {
  return (
    <div className="flex">
        <Sidebar />
      <div className="w-10/12 ml-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
