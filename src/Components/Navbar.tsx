import { useCallback, useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMailSharp } from "react-icons/io5";
import { MdQuestionMark } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {
  handleBar: () => void;
};

function Navbar({ handleBar }: Props) {
  const [showNav, setShowNav] = useState(!false);

  const handleShowNav = useCallback(() => {
    setShowNav(!showNav);
  }, [showNav]);

  return (
    <>
      <div className="lg:hidden flex justify-between bg-red-400 p-4 fixed w-full">
        <FaBarsStaggered
          size={20}
          className="cursor-pointer hover:text-gray-600"
          onClick={handleBar}
        />
        <HiDotsHorizontal
          size={20}
          className="cursor-pointer hover:text-gray-600"
          onClick={handleShowNav}
        />
      </div>

      {/* {showNav && (
        <div
          className={`absolute top-0 left-0 w-full bg-gray-200 shadow-lg p-2
          transition-transform duration-300 ease-in
          ${showNav ? "translate-y-12" : "translate-y-full"}`}
        >
          <div className="flex justify-evenly my-4">
            <input
              placeholder="Search..."
              type="search"
              className="border-[1px] border-text lg:text-desc-lg md:text-desc-md text-desc-sm p-4 w-full flex-grow mr-4 pr-8"
            />
            
            <Link
              to={"/"}
              className="flex gap-1 items-center justify-center mr-5"
            >
              <MdQuestionMark className="border-2 border-text" />
            </Link>

            <Link
              to={"/"}
              className="flex gap-1 items-center justify-center mr-5"
            >
              <div className="bg-light_blue p-[4px] sm:p-[6px] rounded-full relative">
                <FaBell color="white" className="text-[12px] sm:text-[17px]"  />
                <p className="absolute text-[6px] sm:text-[8px] z-20 -top-1 -right-1 bg-white rounded-full p-[2px] text-brown">
                  23
                </p>
              </div>
            </Link>

            <Link
              to={"/"}
              className="flex gap-1 items-center justify-center mr-5"
            >
              <div className="bg-dark_blue py-[3px] px-[2px] rounded-full relative">
                <IoMailSharp color="white" className="text-[13px] sm:text-[17px]" />
                <p className="absolute text-[5px] sm:text-[8px] z-20 -top-1 -right-1 bg-white rounded-full p-[2px] text-brown">
                  23
                </p>
              </div>
            </Link>
            <div className="hero flex items-center justify-end flex-1">
              <div>
                <p className="font-bold text-black lg:text-desc-lg md:text-desc-md text-desc-sm hidden sm:block">
                  Ms. Employ
                </p>
                <p className="font-light text-text lg:text-desc-lg md:text-desc-md text-desc-sm hidden sm:block">
                  Product Manager
                </p>
              </div>
              <img
                className="h-18 w-18 ml-3"
                src="https://www.svgrepo.com/show/192244/man-user.svg"
              />
            </div>
          </div>
        </div>
      )} */}

      <div className="hidden p-2 justify-between border-[1px] m-1 border-light_blue lg:flex">
        <div className="flex justify-center items-center  flex-grow basis-2.5/4">
          <div className="flex justify-center items-center grow basis-3/4  relative">
            <input
              placeholder="Search..."
              type="search"
              className="border-[1px] border-text lg:text-desc-lg md:text-desc-md text-desc-sm p-2 flex-grow flex-shrink mr-4 pr-8"
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
            <p className="capitalize text-sm font-medium lg:text-heading-lg md:text-heading-md text-heading-sm">
              Help
            </p>
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
            <p className="capitalize text-sm font-medium lg:text-heading-lg md:text-heading-md text-heading-sm">
              Alerts
            </p>
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
            <p className="capitalize text-sm font-medium lg:text-heading-lg md:text-heading-md text-heading-sm">
              Email
            </p>
          </Link>
        </div>

        <div className="hero flex items-center justify-end flex-1">
          <div>
            <p className="font-bold text-black lg:text-desc-lg md:text-desc-md text-desc-sm">
              Ms. Employ
            </p>
            <p className="font-light text-text lg:text-desc-lg md:text-desc-md text-desc-sm">
              Product Manager
            </p>
          </div>
          <img
            className="h-12 w-12 ml-3"
            src="https://www.svgrepo.com/show/192244/man-user.svg"
          />
        </div>
      </div>

      <div className="flex justify-start gap-4 m-2 border-t-[1px] border-light_blue pt-2">
        <Link
          to={"/"}
          className="text-black text-sm font-light lg:text-heading-lg md:text-heading-md text-heading-sm"
        >
          Dashboard
        </Link>
        <Link
          to={"/"}
          className="text-black text-sm font-light lg:text-heading-lg md:text-heading-md text-heading-sm"
        >
          Overview
        </Link>
        <Link
          to={"/"}
          className="text-black text-sm font-light lg:text-heading-lg md:text-heading-md text-heading-sm"
        >
          Overview
        </Link>
        <Link
          to={"/"}
          className="text-black text-sm font-light lg:text-heading-lg md:text-heading-md text-heading-sm"
        >
          Overview
        </Link>
      </div>
    </>
  );
}

export default Navbar;
