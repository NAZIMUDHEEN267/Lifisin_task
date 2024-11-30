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
    <div className="w-2/12 text-white top-0 scroll-auto p-1">
      <div className="border-[1px] border-light_blue justify-center items-center mb-2">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/718/130/non_2x/cityscape-color-abstract-free-vector.jpg"
          className="h-20 w-20 self-center mx-auto"
        />
      </div>
      <ul>
        <li className="bg-light_blue text-center p-2">Create</li>
        {data?.map((item) => (
          <li className="text-center p-2 border-[1px] border-light_blue">
            <Link to="/" className="text-text text-[10px] xl:text-sm hover:text-black">
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2  border-[1px] border-light_blue  pt-4">
        <TbGridDots className="text-light_blue" />
          <Link to="/" className="text-light_blue text-[12px] xl:text-sm hover:text-dark_blue">
            {"More Items"}
          </Link>
      </div>

      <div className="border-[1px] border-light_blue justify-center items-center mt-2">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/718/130/non_2x/cityscape-color-abstract-free-vector.jpg"
          className="h-20 w-20 mx-auto"
        />
      </div>
    </div>
  );
}

export default Sidebar;
