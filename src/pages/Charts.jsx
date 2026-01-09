import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LineChartBox from "../components/LineChartBox";
import { trafficData } from "../data/dashboardData";

export default function Charts() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Charts</h1>
          <LineChartBox data={trafficData} />
        </div>
      </div>
    </div>
  );
}
