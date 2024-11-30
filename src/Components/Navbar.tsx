import { FaBell, FaSearch } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { MdQuestionMark } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex p-2 justify-between border-[1px] m-1 border-light_blue">
        <div className="flex justify-center items-center  flex-grow basis-2.5/4">
          <div className="flex justify-center items-center grow basis-3/4  relative">
            <input
              placeholder="Search..."
              type="search"
              className="border-[1px] border-text text-[10px] p-2 flex-grow flex-shrink mr-4 pr-8"
            />

            <FaSearch
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={16}
            />
          </div>

          <Link
            to={"/"}
            className="flex gap-1 items-center justify-center mr-5"
          >
            <MdQuestionMark className="border-2 border-text" />
            <p className="capitalize text-sm font-medium">Help</p>
          </Link>

          <Link
            to={"/"}
            className="flex gap-1 items-center justify-center mr-5"
          >
            <div className="bg-light_blue p-[6px] rounded-full relative">
              <FaBell color="white" size={14} />
              <p className="absolute text-[8px] z-20 -top-1 -right-1 bg-white rounded-full p-[2px] text-brown">
                23
              </p>
            </div>
            <p className="capitalize text-sm font-medium">Alerts</p>
          </Link>

          <Link
            to={"/"}
            className="flex gap-1 items-center justify-center mr-5"
          >
            <div className="bg-dark_blue py-[3px] px-[2px] rounded-full relative">
              <IoMailSharp color="white" size={17} />
              <p className="absolute text-[8px] z-20 -top-1 -right-1 bg-white rounded-full p-[2px] text-brown">
                23
              </p>
            </div>
            <p className="capitalize text-sm font-medium">Email</p>
          </Link>
        </div>

        <div className="hero flex items-center justify-end flex-1">
          <div>
            <p className="font-bold text-[12px] text-black">Ms. Employ</p>
            <p className="font-light text-[12px] text-text">Product Manager</p>
          </div>
          <img
            className="h-12 w-12 ml-3"
            src="https://www.svgrepo.com/show/192244/man-user.svg"
          />
        </div>
      </div>

      <div className="flex justify-start gap-4 m-2 border-t-[1px] border-light_blue pt-2">
        <Link to={"/"} className="text-black text-sm font-light">
          Dashboard
        </Link>
        <Link to={"/"} className="text-black text-sm font-light">
          Overview
        </Link>
        <Link to={"/"} className="text-black text-sm font-light">
          Overview
        </Link>
        <Link to={"/"} className="text-black text-sm font-light">
          Overview
        </Link>
      </div>
    </>
  );
}

export default Navbar;
