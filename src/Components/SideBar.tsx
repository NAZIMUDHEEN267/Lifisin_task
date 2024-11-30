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

  return (
    <div className="w-64  text-white p-4">
      <div className="border-[1px] border-light_blue justify-center items-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/718/130/non_2x/cityscape-color-abstract-free-vector.jpg"
          className="h-20 w-20 self-center mx-auto"
        />
      </div>
      <ul>
        <li className="bg-light_blue text-center my-4 p-2">Create</li>
        {data?.map((item) => (
          <li className="mb-4">
            <Link to="/" className="text-text hover:text-black">
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <TbGridDots className="text-light_blue" />
          <Link to="/" className="text-light_blue text-sm hover:text-dark_blue">
            {"More Items"}
          </Link>
      </div>

      <div className="border-[1px] border-light_blue justify-center items-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/718/130/non_2x/cityscape-color-abstract-free-vector.jpg"
          className="h-20 w-20 mx-auto"
        />
      </div>
    </div>
  );
}

export default Sidebar;
