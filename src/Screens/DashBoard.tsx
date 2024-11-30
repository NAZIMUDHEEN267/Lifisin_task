import { FaArrowsAltV } from "react-icons/fa";
import ChartBox from "../Components/ChartBox";

type DataType = {
  item1: string;
  item2: string;
  item3: string;
  item4: string;
};

const data = Array.from(
  { length: 4 },
  (): DataType => ({
    item1: "RQ-002-2024",
    item2: "Name of requested",
    item3: "Mariage Leave Request",
    item4: "21 Apr 2024",
  })
);

function DashBoard() {
  return (
    <div className="p-6 border-[1px] border-light_blue rounded-sm h-full">
      <div className="flex gap-4 flex-1 justify-between">
        <ChartBox>
          <div className="flex flex-col gap-3">
            <p className="capitalize font-bold">Employ turnover rate</p>
            <p className="font-bold text-green text-xl">{"25%"}</p>
            <p className="capitalize font-light text-text">
              {"Resignatioin Last 90 days: 0"}
            </p>
          </div>
        </ChartBox>

        <ChartBox>
          <div className="flex justify-between">
            <div className="flex flex-col gap-3 flex-1 border-r-2 border-black justify-center">
              <p className="capitalize font-bold">Total Employees</p>
              <p className="font-bold text-green text-xl">{"123"}</p>
              <p className="capitalize font-light text-text">
                {"Men: 10 | Female: 22"}
              </p>
            </div>

            <div className="flex flex-col gap-3 flex-1 pl-4  justify-center">
              <p className="capitalize font-light text-text">
                {"Full-time Employees: 100"}
              </p>
              <p className="capitalize font-light text-text text-left">
                {"Contract Employees: 23"}
              </p>
            </div>
          </div>
        </ChartBox>

        <ChartBox>
          <div className="flex flex-col gap-3">
            <p className="capitalize font-bold">Employ turnover rate</p>
            <p className="font-bold text-green text-xl">{"25%"}</p>
            <p className="capitalize font-light text-text">
              {"Resignatioin Last 90 days: 0"}
            </p>
          </div>
        </ChartBox>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-6">
        <ChartBox>
          <>
            <div className="flex justify-between">
              <p className="capitalize font-bold text-text">
                Request For Purchase
              </p>
              <FaArrowsAltV className="rotate-45  right-2 text-gray-500 cursor-pointer" />
            </div>
            <table className="min-w-full table-auto border-collapse border border-gray-300 my-4">
              <thead>
                <tr className="bg-light_blue">
                  <th className="border border-gray-300 p-2 text-white">
                    Request ID
                  </th>
                  <th className="border border-gray-300 p-2 text-white">
                    Requester
                  </th>
                  <th className="border border-gray-300 p-2 text-white">
                    Subject
                  </th>
                  <th className="border border-gray-300 p-2 text-white">
                    Due Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map(({ item1, item2, item3, item4 }: DataType, i) => (
                  <tr key={String(i)}>
                    <td className="border border-gray-300 p-2">{item1}</td>
                    <td className="border border-gray-300 p-2">{item2}</td>
                    <td className="border border-gray-300 p-2">{item3}</td>
                    <td className="border border-gray-300 p-2">{item4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between">
              <p className="capitalize font-light text-[12px] text-brown">
                10 Request in Queue
              </p>
              <button>
                <p className="capitalize font-light text-[12px] text-brown">
                  View All
                </p>
              </button>
            </div>
          </>
        </ChartBox>
        <ChartBox>
          <div className="flex justify-between">
            <p className="capitalize font-bold text-text">Upcoming Tasks</p>
            <FaArrowsAltV className="rotate-45  right-2 text-gray-500 cursor-pointer" />
          </div>
        </ChartBox>
        <ChartBox>
          <div className="flex justify-between">
            <p className="capitalize font-bold text-text">Upcoming Events</p>
            <FaArrowsAltV className="rotate-45  right-2 text-gray-500 cursor-pointer" />
          </div>
        </ChartBox>
        <ChartBox>
          <div className="flex justify-between">
            <p className="capitalize font-bold text-text">{"Net Income()"}</p>
            <FaArrowsAltV className="rotate-45  right-2 text-gray-500 cursor-pointer" />
          </div>
        </ChartBox>
      </div>
    </div>
  );
}

export default DashBoard;