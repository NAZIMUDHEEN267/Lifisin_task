import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

function Sidebar() {
  const data: Array<string> = [
    "CRM Management",
    "Sales Order Management",
    "Finance Management",
    "HR Management",
    "Procurment",
    "Asset Managment",
    "Invontary Management",
    "Project Management",
    "Helpdesk Management",
    "Buisness Intelligence",
    "Control Panel",
    "Application Settings",
    "Solutions Builder",
    "Product & Services",
    "Suppliers & Customers",
    "Organization",
  ];

  return

  return (
    <div className="w-5/12 sm:w-3/12 bg-white lg:w-2/12 absolute lg:relative z-30  text-white top-0 scroll-auto p-1 h-screen">
      <div className="border-[1px] border-light_blue justify-center items-center mb-2">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/718/130/non_2x/cityscape-color-abstract-free-vector.jpg"
          className="h-14 w-14 sm:h-18 sm:w-18 lg:h-20 lg:w-20 self-center mx-auto"
        />
      </div>
      <ul>
        <li className="bg-light_blue text-center p-2 lg:text-heading-lg md:text-heading-md text-heading-sm">
          Create
        </li>
        {data?.map((item) => (
          <li className="text-center p-1 lg:p-2 border-[1px] border-light_blue">
            <Link
              to="/"
              className="text-text xl:text-sm hover:text-black lg:text-heading-lg md:text-heading-md text-heading-sm"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2  border-[1px] border-light_blue pt-4 pl-3">
        <TbGridDots className="text-light_blue lg:text-2xl text-xl" />
        <Link
          to="/"
          className="text-light_blue xl:text-sm hover:text-dark_blue lg:text-heading-lg md:text-heading-md text-heading-sm"
        >
          {"More Items"}
        </Link>
      </div>

      <div className="border-[1px] border-light_blue justify-center items-center mt-2">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/718/130/non_2x/cityscape-color-abstract-free-vector.jpg"
          className="mx-auto h-14 w-14 sm:h-18 sm:w-18 lg:h-20 lg:w-20"
        />
      </div>
    </div>
  );
}

export default Sidebar;
