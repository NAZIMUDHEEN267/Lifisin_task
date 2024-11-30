import { FaArrowsAltV } from "react-icons/fa";
import ChartBox from "@/Components/ChartBox";
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
    labels: ["2021", "2022"],
    datasets: [
      {
        label: "Attendance Rate (%)",
        data: [24, 30],
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
    labels: ["2021", "2022"],
    datasets: [
      {
        label: "Attendance Rate (%)",
        data: [65, 93],
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
              <p className="capitalize font-bold">Employ turnover rate</p>
              <p className="font-bold text-green text-xl lg:text-sm">{"25%"}</p>
              <p className="capitalize font-light text-text">
                {"Resignatioin Last 90 days: 0"}
              </p>
            </div>
            <div
             className="p-5 bg-gray-100 rounded-lg w-1/2"
            >
              <h3>Overall Attendance</h3>
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
        </ChartBox>

        <ChartBox>
          <div className="flex justify-between h-full basis-1/2 xl:basis-1/3">
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
          <div className="flex basis-1/2 xl:basis-1/3">
            <div className="flex flex-col gap-3 flex-1">
              <p className="capitalize font-bold">Employ turnover rate</p>
              <p className="font-bold text-green text-xl">{"25%"}</p>
              <p className="capitalize font-light text-text">
                {"Resignatioin Last 90 days: 0"}
              </p>
            </div>

            <div
            className="p-5 bg-gray-100 rounded-lg w-1/2"
            >
              <h3>Overall Attendance</h3>
              <Bar data={barData2} options={barOptions2} />
            </div>
          </div>
        </ChartBox>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-1 xl:grid-rows-2 gap-4 mt-6">
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
                {data2?.map(({ item1, item2, item3, item4 }: DataType, i) => (
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
