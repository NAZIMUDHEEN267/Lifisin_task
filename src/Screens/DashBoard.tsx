import { FaArrowsAltV } from "react-icons/fa";
import ChartBox from "../Components/ChartBox";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type DataType = {
  item1: string;
  item2: string;
  item3: string;
  item4: string;
};

const data2 = Array.from(
  { length: 4 },
  (): DataType => ({
    item1: "RQ-002-2024",
    item2: "Name of requested",
    item3: "Mariage Leave Request",
    item4: "21 Apr 2024",
  })
);

function DashBoard() {
  const barData = {
    labels: ["2021", "2022", "Year"],
    datasets: [
      {
        label: "Attendance Rate (%)",
        data: [24, 30, 0],
        backgroundColor: ["#4caf50", "#8e44ad"],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const barData2 = {
    labels: ["2021", "2022", "Year"],
    datasets: [
      {
        label: "Attendance Rate (%)",
        data: [65, 93, 0],
        backgroundColor: ["#4caf50", "#8e44ad"],
        borderWidth: 1,
      },
    ],
  };

  const barOptions2 = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-6 border-[1px] m-2 border-light_blue rounded-sm">
      <div className="flex gap-4 flex-1 justify-between flex-wrap">
        <ChartBox>
          <div className="flex basis-1/2 xl:basis-1/3">
            <div className="flex flex-col gap-3 flex-1">
              <p className="capitalize font-bold lg:text-heading-lg md:text-heading-md text-heading-sm">
                Employ turnover rate
              </p>
              <p className="font-bold text-green text-heading-sm lg:text-heading-lg md:text-heading-md">
                {"25%"}
              </p>
              <p className="capitalize font-light text-text lg:text-desc-lg md:text-desc-md text-desc-sm">
                {"Resignatioin Last 90 days: 0"}
              </p>
            </div>
            <div className="p-5 bg-gray-100 rounded-lg w-1/2">
              <Bar data={barData2} options={barOptions2} />
            </div>
          </div>
        </ChartBox>

        <ChartBox>
          <div className="flex justify-between h-full basis-1/2 xl:basis-1/3">
            <div className="flex flex-col gap-3 flex-1 border-r-2 border-black">
              <p className="capitalize font-bold lg:text-heading-lg md:text-heading-md text-heading-sm">
                Total Employees
              </p>
              <p className="font-bold text-green lg:text-heading-lg md:text-heading-md text-heading-sm">
                {"123"}
              </p>
              <p className="capitalize font-light text-text lg:text-desc-lg md:text-desc-md text-desc-sm">
                {"Men: 10 | Female: 22"}
              </p>
            </div>

            <div className="flex flex-col gap-3 flex-1 pl-4">
              <p className="capitalize font-light text-text lg:text-heading-lg md:text-heading-md text-heading-sm">
                {"Full-time Employees: 100"}
              </p>
              <p className="capitalize font-light text-text text-left lg:text-heading-lg md:text-heading-md text-heading-sm">
                {"Contract Employees: 23"}
              </p>
            </div>
          </div>
        </ChartBox>

        <ChartBox>
          <div className="flex basis-1/2 xl:basis-1/3">
            <div className="flex flex-col gap-3 flex-1">
              <p className="capitalize font-bold lg:text-heading-lg md:text-heading-md text-heading-sm">
                Overall Attendance
              </p>
              <p className="font-bold text-green lg:text-heading-lg md:text-heading-md text-heading-sm">
                {"85%"}
              </p>
              <p className="capitalize font-light text-text lg:text-desc-lg md:text-desc-md text-desc-sm">
                {"Attendance Performance: 0"}
              </p>
            </div>

            <div className="p-5 bg-gray-100 rounded-lg w-1/2">
              <Bar data={barData2} options={barOptions2} />
            </div>
          </div>
        </ChartBox>
      </div>

      {/* Table and other empty box */}
      <div className="grid grid-cols-1 custom:grid-cols-2 grid-rows-1 custom:grid-rows-2 gap-4 mt-6">
        <ChartBox>
          <div className="h-[20%]">
            <div className="flex justify-between">
              <p className="capitalize font-bold text-text lg:text-heading-lg md:text-heading-md text-heading-sm">
                Request For Purchase
              </p>
              <FaArrowsAltV className="rotate-45  right-2 text-gray-500 cursor-pointer" />
            </div>
            <table className="min-w-full table-auto border-collapse border border-gray-300 my-4">
              <thead>
                <tr className="bg-light_blue">
                  <th className="border border-gray-300 p-1 text-white lg:text-table-lg md:text-table-md text-table-sm">
                    Request ID
                  </th>
                  <th className="border border-gray-300 p-1 text-white lg:text-table-lg md:text-table-md text-table-sm">
                    Requester
                  </th>
                  <th className="border border-gray-300 p-1 text-white lg:text-table-lg md:text-table-md text-table-sm">
                    Subject
                  </th>
                  <th className="border border-gray-300 p-1 text-white lg:text-table-lg md:text-table-md text-table-sm">
                    Due Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {data2?.map(({ item1, item2, item3, item4 }: DataType, i) => (
                  <tr key={String(i)}>
                    <td className="border border-gray-300 p-1 lg:text-table-lg md:text-table-md text-table-sm">
                      {item1}
                    </td>
                    <td className="border border-gray-300 p-1 lg:text-table-lg md:text-table-md text-table-sm">
                      {item2}
                    </td>
                    <td className="border border-gray-300 p-1 lg:text-table-lg md:text-table-md text-table-sm">
                      {item3}
                    </td>
                    <td className="border border-gray-300 p-1 lg:text-table-lg md:text-table-md text-table-sm">
                      {item4}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between">
              <p className="capitalize font-light text-brown lg:text-desc-lg md:text-desc-md text-desc-sm">
                10 Request in Queue
              </p>
              <button>
                <p className="capitalize font-light text-brown lg:text-desc-lg md:text-desc-md text-desc-sm">
                  View All
                </p>
              </button>
            </div>
          </div>
        </ChartBox>

        <ChartBox>
          <div className="flex justify-between h-[20%]">
            <p className="capitalize font-bold text-text lg:text-heading-lg md:text-heading-md text-heading-sm">
              Upcoming Tasks
            </p>
            <FaArrowsAltV className="rotate-45  right-2 text-gray-500 cursor-pointer" />
          </div>
        </ChartBox>
        <ChartBox>
          <div className="flex justify-between h-[20%]">
            <p className="capitalize font-bold text-text lg:text-heading-lg md:text-heading-md text-heading-sm">
              Upcoming Events
            </p>
            <FaArrowsAltV className="rotate-45  right-2 text-gray-500 cursor-pointer" />
          </div>
        </ChartBox>
        <ChartBox>
          <div className="flex justify-between h-[20%]">
            <p className="capitalize font-bold text-text lg:text-heading-lg md:text-heading-md text-heading-sm">
              {"Net Income()"}
            </p>
            <FaArrowsAltV className="rotate-45  right-2 text-gray-500 cursor-pointer" />
          </div>
        </ChartBox>
      </div>
    </div>
  );
}

export default DashBoard;
