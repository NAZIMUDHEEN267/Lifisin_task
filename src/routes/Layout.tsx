import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/SideBar";
import { useCallback, useState } from "react";
import TopBar from "../Components/TopBar";

function Layout() {

  const [showBar, setShowBar] = useState<boolean>(false);


  const handleShowBar = useCallback(() => { 
    setShowBar(!showBar)
  }, [showBar])

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full lg:w-10/12">
        <Navbar handleBar={handleShowBar} />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
